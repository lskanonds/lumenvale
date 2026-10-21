/**
 * Visual check helper: screenshots every top-level section of a page plus the footer,
 * at desktop and mobile widths. Used during development to review layout without
 * relying on the editor preview pane.
 *
 *   node scripts/shots.mjs [path] [outDir]
 */
// Import from @playwright/test, not `playwright`: installing both side by side gives
// two copies of the runtime and Playwright refuses to run the e2e suite.
import { chromium } from '@playwright/test'
import { mkdir } from 'node:fs/promises'

const path = process.argv[2] ?? '/'
const outDir = process.argv[3] ?? '.shots'
const base = process.env.SHOT_BASE_URL ?? 'http://localhost:3000'

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
]

await mkdir(outDir, { recursive: true })

const browser = await chromium.launch()

for (const vp of viewports) {
  const page = await browser.newPage({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
  })

  await page.goto(`${base}${path}`, { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts.ready)

  const blocks = await page.locator('main > section, footer').all()

  for (const [index, block] of blocks.entries()) {
    const file = `${outDir}/${vp.name}-${String(index).padStart(2, '0')}.png`
    await block.screenshot({ path: file })
    console.log(file)
  }

  await page.close()
}

await browser.close()
