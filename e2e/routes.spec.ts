import { test, expect } from '@playwright/test'

const STATIC_ROUTES = [
  '/',
  '/solutions',
  '/industries',
  '/case-studies',
  '/resources',
  '/resources/blog',
  '/resources/faq',
  '/platform',
  '/platform/integrations',
  '/portfolio',
]

const DETAIL_ROUTES = [
  '/solutions/intelligent-agents',
  '/industries/healthcare',
  '/case-studies/patient-intake',
  '/resources/blog/agentic-ai-2026',
]

for (const path of [...STATIC_ROUTES, ...DETAIL_ROUTES]) {
  test(`${path} renders with unified chrome`, async ({ page }) => {
    const response = await page.goto(path)
    expect(response?.status()).toBe(200)

    await expect(page.locator('h1')).toHaveCount(1)
    await expect(page.locator('main')).toHaveCount(1)

    // Unified SiteHeader: exactly one <header>, with the logo linking home.
    await expect(page.locator('header')).toHaveCount(1)
    await expect(page.locator('header a[href="/"] img')).toHaveCount(1)

    // Unified Footer: identify the site footer by its content, not its tag —
    // QuoteSection also renders a semantic <footer> for blockquote attribution.
    await expect(page.getByText('All Rights Reserved')).toBeVisible()
  })
}
