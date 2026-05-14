#!/usr/bin/env node
/**
 * Hermes Runtime Check — Browser-side errors detection
 *
 * Lance un navigateur headless (Playwright Chromium) sur chaque route du site
 * et capture toutes les erreurs runtime observables par le navigateur :
 *   - console.error
 *   - console.warn (filtré sur patterns critiques)
 *   - pageerror (exceptions JS non catchées)
 *   - requestfailed (404/500 sur ressources internes)
 *   - DOM post-hydration : 1 <main>, 1 <footer>, <html lang> cohérent
 *
 * Pré-requis :
 *   - Serveur Next.js de prod up sur localhost:3000 (npm run start)
 *   - @playwright/test installé (npm i -D @playwright/test)
 *   - Chromium installé (npx playwright install chromium)
 *
 * Exit code :
 *   0 = toutes routes PASS (zéro erreur capturée)
 *   1 = au moins une erreur sur une route
 *   2 = erreur d'exécution (Playwright manquant, serveur down, etc.)
 *
 * Usage :
 *   node scripts/hermes-runtime-check.js
 *   node scripts/hermes-runtime-check.js --routes /fr,/en,/fr/contact
 *   node scripts/hermes-runtime-check.js --base http://localhost:3000 --settle 2000
 *
 * Auto-detection des routes : identique à hermes-smoke.js.
 */

const fs = require('fs')
const path = require('path')

// --- CLI args -------------------------------------------------------------

const args = process.argv.slice(2)
function arg(name, fallback) {
  const i = args.indexOf(`--${name}`)
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback
}

const BASE_URL = arg('base', 'http://localhost:3000').replace(/\/$/, '')
const SETTLE_MS = parseInt(arg('settle', '2000'), 10)
const NAV_TIMEOUT_MS = parseInt(arg('timeout', '30000'), 10)
const ROUTES_ARG = arg('routes', null)

// --- Patterns critiques (console.warn) ------------------------------------

const CRITICAL_WARN_PATTERNS = [
  /hydrat/i,
  /mismatch/i,
  /did not match/i,
  /server.*client/i,
  /key prop/i,
  /unique "key"/i,
  /cannot update.*unmounted/i,
  /act\(\)/i,
  /forwardRef/i,
  /findDOMNode/i,
]

// White-list (autorisées, ne fail pas)
const ALLOWED_WARN_PATTERNS = [
  /Download the React DevTools/i,
  /DevTools failed to (parse|load) source map/i,
]

function isCriticalWarn(text) {
  if (ALLOWED_WARN_PATTERNS.some(p => p.test(text))) return false
  return CRITICAL_WARN_PATTERNS.some(p => p.test(text))
}

// --- Route resolution -----------------------------------------------------

function resolveRoutes() {
  if (ROUTES_ARG) return ROUTES_ARG.split(',').map(r => r.trim()).filter(Boolean)

  const configPath = path.resolve(process.cwd(), 'hermes.smoke.config.json')
  if (fs.existsSync(configPath)) {
    try {
      const cfg = JSON.parse(fs.readFileSync(configPath, 'utf8'))
      if (Array.isArray(cfg.routes) && cfg.routes.length) return cfg.routes
    } catch (_) {}
  }

  if (fs.existsSync(path.resolve(process.cwd(), 'app/[lang]'))) {
    return ['/fr', '/en']
  }
  return ['/']
}

function expectedLangFromRoute(route) {
  const m = route.match(/^\/([a-z]{2})(\/|$)/)
  return m ? m[1] : null
}

// --- Main -----------------------------------------------------------------

async function main() {
  let chromium
  try {
    ;({ chromium } = require('@playwright/test'))
  } catch (e) {
    console.error('[hermes-runtime] @playwright/test not installed.')
    console.error('  Run: npm i -D @playwright/test && npx playwright install chromium')
    process.exit(2)
  }

  const routes = resolveRoutes()
  console.log(`[hermes-runtime] Base URL: ${BASE_URL}`)
  console.log(`[hermes-runtime] Routes  : ${routes.join(', ')}\n`)

  const browser = await chromium.launch({
    headless: true,
    args: ['--disable-extensions', '--disable-component-extensions-with-background-pages'],
  })

  let totalFail = 0
  const allResults = []

  for (const route of routes) {
    const url = `${BASE_URL}${route}`
    const context = await browser.newContext({ ignoreHTTPSErrors: false })
    const page = await context.newPage()

    const errors = []
    const criticalWarns = []
    const pageErrors = []
    const failedRequests = []

    page.on('console', msg => {
      const type = msg.type()
      const text = msg.text()
      if (type === 'error') {
        errors.push(text)
      } else if (type === 'warning' && isCriticalWarn(text)) {
        criticalWarns.push(text)
      }
    })

    page.on('pageerror', err => {
      pageErrors.push(err.message)
    })

    page.on('requestfailed', req => {
      const u = req.url()
      // Only fail on internal resources
      if (u.startsWith(BASE_URL) || u.includes('/_next/')) {
        failedRequests.push(`${req.method()} ${u} → ${req.failure()?.errorText || 'unknown'}`)
      }
    })

    let navError = null
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: NAV_TIMEOUT_MS })
      // Settle period to catch post-hydration warnings
      await page.waitForTimeout(SETTLE_MS)
    } catch (e) {
      navError = e.message
    }

    // DOM post-hydration checks
    const domIssues = []
    if (!navError) {
      try {
        const lang = await page.evaluate(() => document.documentElement.lang || null)
        const expected = expectedLangFromRoute(route)
        if (!lang) domIssues.push('Missing <html lang>')
        else if (expected && lang !== expected)
          domIssues.push(`<html lang="${lang}"> mismatches route (expected "${expected}")`)

        const mainCount = await page.evaluate(() => document.querySelectorAll('main').length)
        if (mainCount !== 1) domIssues.push(`DOM has ${mainCount} <main>, expected 1`)

        const footerCount = await page.evaluate(() => document.querySelectorAll('footer').length)
        if (footerCount !== 1) domIssues.push(`DOM has ${footerCount} <footer>, expected 1`)

        const errorBoundary = await page.evaluate(
          () => !!document.querySelector('[data-error-boundary]')
        )
        if (errorBoundary) domIssues.push('Error boundary visible in DOM')
      } catch (e) {
        domIssues.push(`DOM check failed: ${e.message}`)
      }
    }

    const allIssues = [
      ...errors.map(e => `console.error: ${e.slice(0, 200)}`),
      ...criticalWarns.map(w => `console.warn (critical): ${w.slice(0, 200)}`),
      ...pageErrors.map(p => `pageerror: ${p.slice(0, 200)}`),
      ...failedRequests.map(f => `requestfailed: ${f.slice(0, 200)}`),
      ...domIssues,
      ...(navError ? [`navigation: ${navError}`] : []),
    ]

    if (allIssues.length === 0) {
      console.log(`  ✅ ${route}`)
      allResults.push({ route, pass: true })
    } else {
      console.log(`  ❌ ${route}`)
      allIssues.forEach(i => console.log(`     - ${i}`))
      allResults.push({ route, pass: false, issues: allIssues })
      totalFail++
    }

    await context.close()
  }

  await browser.close()

  console.log()
  console.log(`[hermes-runtime] ${routes.length - totalFail}/${routes.length} routes PASS`)

  if (totalFail > 0) {
    console.error('[hermes-runtime] VERDICT: FAIL')
    process.exit(1)
  }
  console.log('[hermes-runtime] VERDICT: PASS')
  process.exit(0)
}

main().catch(e => {
  console.error('[hermes-runtime] Fatal error:', e)
  process.exit(2)
})
