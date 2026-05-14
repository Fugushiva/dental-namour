/**
 * Hermes Visual Review — Playwright screenshots batch
 *
 * Exécuté au Checkpoint 2.5 entre M4 et M5.
 * Capture 6 screenshots par route (mobile + desktop, light + dark) pour review humain.
 *
 * Pré-requis :
 *   - Serveur Next.js de prod up sur localhost:3000 (npm run start)
 *   - @playwright/test installé
 *   - Chromium installé
 *
 * Usage :
 *   npx playwright test scripts/hermes-visual-review.spec.ts
 *
 * Output :
 *   visual-review/<route>-<viewport>-<theme>.png
 *
 * Configuration des routes : lit hermes.smoke.config.json à la racine.
 */

import { test, expect, devices } from '@playwright/test'
import * as fs from 'fs'
import * as path from 'path'

const BASE_URL = process.env.HERMES_BASE_URL || 'http://localhost:3000'
const OUTPUT_DIR = process.env.HERMES_VR_DIR || 'visual-review'

function resolveRoutes(): string[] {
  const envRoutes = process.env.HERMES_ROUTES
  if (envRoutes) return envRoutes.split(',').map(r => r.trim()).filter(Boolean)

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

const VIEWPORTS = [
  { name: 'mobile', width: 375, height: 667 },
  { name: 'desktop', width: 1440, height: 900 },
]

const THEMES: Array<'light' | 'dark'> = ['light', 'dark']

const routes = resolveRoutes()

// Ensure output dir exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
}

function safeName(route: string): string {
  return route.replace(/^\//, '').replace(/\//g, '_') || 'home'
}

test.describe('Hermes Visual Review', () => {
  for (const route of routes) {
    for (const viewport of VIEWPORTS) {
      for (const theme of THEMES) {
        test(`${route} — ${viewport.name} — ${theme}`, async ({ browser }) => {
          const context = await browser.newContext({
            viewport: { width: viewport.width, height: viewport.height },
            colorScheme: theme,
            deviceScaleFactor: viewport.name === 'mobile' ? 2 : 1,
          })
          const page = await context.newPage()

          await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle', timeout: 30000 })
          // Allow CSS animations to settle
          await page.waitForTimeout(800)

          const filename = `${safeName(route)}-${viewport.name}-${theme}.png`
          const filepath = path.join(OUTPUT_DIR, filename)

          await page.screenshot({
            path: filepath,
            fullPage: true,
          })

          await context.close()
          console.log(`[hermes-vr] ✅ ${filename}`)
        })
      }
    }
  }
})
