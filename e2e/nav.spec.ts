import { test, expect } from '@playwright/test'

// Nav is driven by the SiteSettings CMS global — these guard the exact
// regression the unification fixed: case-studies pages used to omit the
// "Industries" link because each page hand-rolled its own nav array.
const PAGES_TO_CHECK = ['/', '/case-studies', '/solutions/intelligent-agents']

for (const path of PAGES_TO_CHECK) {
  test(`${path} header nav includes Industries and Solutions`, async ({ page }) => {
    await page.goto(path)
    const nav = page.locator('header').first()
    await expect(nav.getByRole('link', { name: 'Industries', exact: true }).first()).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Solutions', exact: true }).first()).toBeVisible()
  })
}

test('header CTA resolves to the contact anchor', async ({ page }) => {
  await page.goto('/solutions')
  const cta = page.locator('header').getByRole('link', { name: 'Book a Strategy Call' })
  await expect(cta).toHaveAttribute('href', '/#contact')
})

test('clicking a nav link navigates to the right page', async ({ page }) => {
  await page.goto('/')
  await page.locator('header').getByRole('link', { name: 'Industries', exact: true }).first().click()
  await expect(page).toHaveURL(/\/industries$/)
  await expect(page.locator('h1')).toBeVisible()
})
