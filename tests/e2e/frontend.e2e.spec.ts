import { test, expect } from '@playwright/test'

const BASE = 'http://localhost:3000'

// These run against the demo content from `npm run seed`.
const CASE_STUDY = '/portfolio/copperwash-solar'

test.describe('Public site', () => {
  test('homepage renders the brand and tagline', async ({ page }) => {
    await page.goto(BASE)

    await expect(page).toHaveTitle(/Lumenvale Energy/)
    await expect(page.locator('h1')).toContainText('Sunlight, accounted for.')
    await expect(page.getByRole('link', { name: /Lumenvale/ }).first()).toBeVisible()
  })

  test('every main navigation link resolves', async ({ page }) => {
    await page.goto(BASE)

    const hrefs = await page
      .getByRole('navigation', { name: 'Main' })
      .getByRole('link')
      .evaluateAll((links) => links.map((l) => l.getAttribute('href')!))

    expect(hrefs.length).toBeGreaterThan(0)

    for (const href of hrefs) {
      const response = await page.goto(`${BASE}${href}`)
      expect(response?.status(), `${href} should not error`).toBe(200)
      await expect(page.locator('h1')).toBeVisible()
    }
  })

  test('header turns solid once the hero is scrolled past', async ({ page }) => {
    await page.goto(BASE)
    const header = page.locator('header')

    await expect(header).toHaveClass(/bg-transparent/)
    await page.evaluate(() => window.scrollTo({ top: 400, behavior: 'instant' }))
    await expect(header).not.toHaveClass(/bg-transparent/)
  })

  test('mobile menu opens and closes', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto(BASE)

    const toggle = page.getByRole('button', { name: 'Open menu' })
    await expect(page.locator('#mobile-menu')).toBeHidden()

    await toggle.click()
    await expect(page.locator('#mobile-menu')).toBeVisible()
    await expect(page.getByRole('navigation', { name: 'Mobile' })).toBeVisible()

    await page.getByRole('button', { name: 'Close menu' }).click()
    await expect(page.locator('#mobile-menu')).toBeHidden()
  })

  test('portfolio links through to the case study', async ({ page }) => {
    await page.goto(`${BASE}/portfolio`)

    await page.getByRole('link', { name: /Copperwash Solar/ }).first().click()
    await expect(page).toHaveURL(new RegExp(`${CASE_STUDY}$`))
    await expect(page.locator('h1')).toContainText('Copperwash Solar')
  })

  test('case study leads with performance and never shows an empty metric', async ({ page }) => {
    await page.goto(`${BASE}${CASE_STUDY}`)

    const performance = page.getByRole('heading', { name: /peer group/i, level: 2 })
    await expect(performance).toBeVisible()

    // Performance sits above the plant description: the audience is owners and lenders.
    const performanceY = (await performance.boundingBox())!.y
    const overviewY = (await page.getByText('The plant', { exact: true }).first().boundingBox())!.y
    expect(performanceY).toBeLessThan(overviewY)

    // Metrics without a figure are dropped rather than rendered blank. The trend arrows live
    // inside the value element, so strip them before checking that a digit is left.
    const cards = page.locator('[data-metric]')
    await expect(cards.first()).toBeVisible()

    const values = await cards.locator('[data-metric-value]').allTextContents()
    expect(values.length, 'no metric cards rendered at all').toBeGreaterThan(0)
    for (const raw of values) {
      const figure = raw.replace(/[↑↓\s]/g, '')
      expect(figure, `metric card rendered without a figure: "${raw}"`).toMatch(/\d/)
    }

    // An index is only readable with the size of the group and the date it runs to.
    await expect(page.getByText(/peer group of \d+ plants/i)).toBeVisible()
    await expect(page.getByText(/Figures to \w+ \d{4}/i)).toBeVisible()

    // The chart is never the only way to read a value: the table has one row per plotted
    // point, counted from the chart rather than hard-coded.
    const points = await page.locator('figure svg polyline').getAttribute('points')
    const plotted = points!.trim().split(/\s+/).length
    expect(plotted).toBeGreaterThan(2)

    const table = page.getByRole('table', { name: /Yield index/i })
    await expect(table).not.toBeVisible()
    await page
      .getByRole('group')
      .filter({ hasText: /View the figures as a table/i })
      .click()
    await expect(table).toBeVisible()
    await expect(table.locator('tbody tr')).toHaveCount(plotted)

    await expect(page.getByRole('link', { name: /Talk to us about your plant/i })).toHaveAttribute(
      'href',
      '/owners',
    )
  })

  // A rejected attachment has to be explained in words, and must not cost the sender the
  // answers they had already typed.
  test('a rejected attachment is explained and does not empty the form', async ({ page }) => {
    await page.goto(`${BASE}/owners`)

    const upload = page.locator('input[type="file"][name="attachments"]')
    await expect(upload).toHaveCount(1)

    const answers = {
      name: 'Attachment Test',
      email: 'attachment-test@example.com',
      plantName: 'Test Plant',
      message: 'Checking that a rejected file does not cost me my answers.',
    }
    await page.fill('input[name="name"]', answers.name)
    await page.fill('input[name="email"]', answers.email)
    await page.fill('input[name="plantName"]', answers.plantName)
    await page.fill('textarea[name="message"]', answers.message)

    await upload.setInputFiles({
      name: 'accounts.exe',
      mimeType: 'application/octet-stream',
      buffer: Buffer.from('MZ not a spreadsheet'),
    })
    await page.getByRole('button', { name: /send enquiry/i }).click()

    await expect(page.getByText(/is not one of those/i)).toBeVisible()

    for (const [field, value] of Object.entries(answers)) {
      const selector = field === 'message' ? `textarea[name="${field}"]` : `input[name="${field}"]`
      await expect(page.locator(selector), `${field} was emptied by the rejection`).toHaveValue(
        value,
      )
    }
  })

  test('unknown routes return the branded 404', async ({ page }) => {
    const response = await page.goto(`${BASE}/this-page-does-not-exist`)

    expect(response?.status()).toBe(404)
    await expect(page.locator('h1')).toContainText('find that page')
  })
})
