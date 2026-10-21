/**
 * Accessibility audit. Runs axe-core (WCAG 2.1 A/AA) against one or more paths and
 * exits non-zero if any violation is found.
 *
 *   node scripts/a11y.mjs / /portfolio
 */
// See scripts/shots.mjs: always take chromium from @playwright/test.
import { chromium } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const paths = process.argv.slice(2).length ? process.argv.slice(2) : ['/']
const base = process.env.SHOT_BASE_URL ?? 'http://localhost:3000'

const browser = await chromium.launch()
let failed = 0

for (const path of paths) {
  for (const viewport of [
    { width: 1440, height: 900 },
    { width: 390, height: 844 },
  ]) {
    // axe-core requires a real BrowserContext, not the browser.newPage() shortcut
    const context = await browser.newContext({ viewport })
    const page = await context.newPage()
    await page.goto(`${base}${path}`, { waitUntil: 'networkidle' })

    const { violations } = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze()

    const label = `${path} @ ${viewport.width}px`

    if (violations.length === 0) {
      console.log(`PASS  ${label}`)
    } else {
      failed += violations.length
      console.log(`FAIL  ${label}`)
      for (const v of violations) {
        console.log(`  [${v.impact}] ${v.id}: ${v.help}`)
        for (const node of v.nodes.slice(0, 3)) {
          console.log(`      ${node.target.join(' ')}`)
        }
      }
    }

    await context.close()
  }
}

await browser.close()
process.exit(failed > 0 ? 1 : 0)
