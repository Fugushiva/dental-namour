#!/usr/bin/env node
/**
 * Hermes Smoke Test — Layout & i18n invariants
 *
 * Lit le HTML rendu par le serveur Next.js (npm run start) sur chaque route
 * et vérifie les invariants Hermes V1.4 (cf. standards/tech-stack.md §5bis) :
 *   - <html lang> cohérent avec la route (ou hardcodé valide si monolingue)
 *   - Exactement 1 <main> par page
 *   - Exactement 1 <footer> par page
 *   - Skip-nav présent (href="#main-content")
 *   - Pas de role="main" en doublon
 *
 * Exit code :
 *   0 = toutes routes PASS
 *   1 = au moins une route FAIL
 *   2 = erreur d'exécution (serveur down, route 500, etc.)
 *
 * Usage :
 *   node scripts/hermes-smoke.js
 *   node scripts/hermes-smoke.js --routes /fr,/en,/fr/contact
 *   node scripts/hermes-smoke.js --base http://localhost:3000 --timeout 15000
 *
 * Auto-detection des routes :
 *   1. Argument --routes (CSV) si fourni
 *   2. Sinon, hermes.smoke.config.json à la racine du projet : { "routes": [...] }
 *   3. Sinon, fallback ["/"] + tentative ["/fr","/en"] (warn si 404)
 */

const http = require('http')
const https = require('https')
const fs = require('fs')
const path = require('path')

// --- CLI args -------------------------------------------------------------

const args = process.argv.slice(2)
function arg(name, fallback) {
  const i = args.indexOf(`--${name}`)
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback
}

const BASE_URL = arg('base', 'http://localhost:3000').replace(/\/$/, '')
const TIMEOUT_MS = parseInt(arg('timeout', '15000'), 10)
const ROUTES_ARG = arg('routes', null)

// --- Routes resolution ----------------------------------------------------

function resolveRoutes() {
  if (ROUTES_ARG) return ROUTES_ARG.split(',').map(r => r.trim()).filter(Boolean)

  const configPath = path.resolve(process.cwd(), 'hermes.smoke.config.json')
  if (fs.existsSync(configPath)) {
    try {
      const cfg = JSON.parse(fs.readFileSync(configPath, 'utf8'))
      if (Array.isArray(cfg.routes) && cfg.routes.length) return cfg.routes
    } catch (e) {
      console.error(`[hermes-smoke] hermes.smoke.config.json invalid: ${e.message}`)
    }
  }

  // Fallback heuristique : si app/[lang]/ existe, essayer /fr et /en
  if (fs.existsSync(path.resolve(process.cwd(), 'app/[lang]'))) {
    return ['/fr', '/en']
  }
  return ['/']
}

// --- HTTP fetch -----------------------------------------------------------

function fetch(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http
    const req = lib.get(url, { headers: { Accept: 'text/html' } }, res => {
      let data = ''
      res.on('data', chunk => (data += chunk))
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }))
    })
    req.on('error', reject)
    req.setTimeout(TIMEOUT_MS, () => {
      req.destroy(new Error(`Timeout after ${TIMEOUT_MS}ms`))
    })
  })
}

// --- Assertions -----------------------------------------------------------

function countMatches(html, regex) {
  return (html.match(regex) || []).length
}

function extractHtmlLang(html) {
  const m = html.match(/<html\s+[^>]*lang=["']([^"']+)["']/i)
  return m ? m[1] : null
}

function expectedLangFromRoute(route) {
  // /fr/... → fr ; /en/... → en ; / → null (monolingue, accepter n'importe quoi valide)
  const m = route.match(/^\/([a-z]{2})(\/|$)/)
  return m ? m[1] : null
}

function checkRoute(route, html, status) {
  const issues = []

  if (status !== 200) {
    issues.push(`HTTP ${status} (expected 200)`)
    return issues
  }

  // 1. <html lang>
  const lang = extractHtmlLang(html)
  const expectedLang = expectedLangFromRoute(route)
  if (!lang) {
    issues.push('Missing lang attribute on <html>')
  } else if (expectedLang && lang !== expectedLang) {
    issues.push(`<html lang="${lang}"> mismatches route ${route} (expected lang="${expectedLang}")`)
  }

  // 2. <main> count
  const mainCount = countMatches(html, /<main[\s>]/gi)
  if (mainCount !== 1) {
    issues.push(`Expected exactly 1 <main>, found ${mainCount}`)
  }

  // 3. <footer> count
  const footerCount = countMatches(html, /<footer[\s>]/gi)
  if (footerCount !== 1) {
    issues.push(`Expected exactly 1 <footer>, found ${footerCount}`)
  }

  // 4. role="main" duplicates (forbidden if <main> already exists)
  const roleMainCount = countMatches(html, /role=["']main["']/gi)
  if (roleMainCount > 0 && mainCount > 0) {
    issues.push(`Forbidden role="main" duplicates <main> tag (${roleMainCount} occurrences)`)
  }

  // 5. Skip-nav
  const hasSkipNav = /href=["']#main-content["']/i.test(html)
  if (!hasSkipNav) {
    issues.push('Missing skip-nav link (expected href="#main-content")')
  }

  // 6. <html> single occurrence
  const htmlCount = countMatches(html, /<html[\s>]/gi)
  if (htmlCount !== 1) {
    issues.push(`Expected exactly 1 <html>, found ${htmlCount}`)
  }

  // 7. <body> single occurrence
  const bodyCount = countMatches(html, /<body[\s>]/gi)
  if (bodyCount !== 1) {
    issues.push(`Expected exactly 1 <body>, found ${bodyCount}`)
  }

  return issues
}

// --- Main -----------------------------------------------------------------

async function main() {
  const routes = resolveRoutes()
  console.log(`[hermes-smoke] Base URL: ${BASE_URL}`)
  console.log(`[hermes-smoke] Routes  : ${routes.join(', ')}\n`)

  let totalFail = 0
  const results = []

  for (const route of routes) {
    const url = `${BASE_URL}${route}`
    try {
      const { status, body } = await fetch(url)
      const issues = checkRoute(route, body, status)
      if (issues.length === 0) {
        console.log(`  ✅ ${route}`)
        results.push({ route, pass: true })
      } else {
        console.log(`  ❌ ${route}`)
        issues.forEach(i => console.log(`     - ${i}`))
        results.push({ route, pass: false, issues })
        totalFail++
      }
    } catch (e) {
      console.log(`  💥 ${route} — ${e.message}`)
      results.push({ route, pass: false, error: e.message })
      totalFail++
    }
  }

  console.log()
  console.log(`[hermes-smoke] ${routes.length - totalFail}/${routes.length} routes PASS`)

  if (totalFail > 0) {
    console.error('[hermes-smoke] VERDICT: FAIL')
    process.exit(1)
  }
  console.log('[hermes-smoke] VERDICT: PASS')
  process.exit(0)
}

main().catch(e => {
  console.error('[hermes-smoke] Fatal error:', e)
  process.exit(2)
})
