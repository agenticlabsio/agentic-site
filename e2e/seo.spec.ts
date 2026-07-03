import { test, expect } from '@playwright/test'

async function jsonLdTypes(page: import('@playwright/test').Page): Promise<string[]> {
  const scripts = await page.locator('script[type="application/ld+json"]').allTextContents()
  return scripts.map((raw) => {
    const parsed = JSON.parse(raw) // throws (failing the test) if any block is malformed
    return parsed['@type']
  })
}

test('homepage has title, canonical, OG image, and Organization/WebSite/FAQPage schema', async ({
  page,
}) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Agentic Labs/)
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://agenticlabs.io')
  await expect(page.locator('meta[property="og:image"]')).toHaveCount(1)

  const types = await jsonLdTypes(page)
  expect(types).toContain('Organization')
  expect(types).toContain('WebSite')
  expect(types).toContain('FAQPage')
})

test('resources/faq has FAQPage and BreadcrumbList schema', async ({ page }) => {
  await page.goto('/resources/faq')
  const types = await jsonLdTypes(page)
  expect(types).toContain('FAQPage')
  expect(types).toContain('BreadcrumbList')
})

test('solutions index has BreadcrumbList schema', async ({ page }) => {
  await page.goto('/solutions')
  const types = await jsonLdTypes(page)
  expect(types).toContain('BreadcrumbList')
})

test('solution detail page has Service, FAQPage, and BreadcrumbList schema', async ({ page }) => {
  await page.goto('/solutions/intelligent-agents')
  const types = await jsonLdTypes(page)
  expect(types).toContain('Service')
  expect(types).toContain('FAQPage')
  expect(types).toContain('BreadcrumbList')
})

test('blog post has Article and BreadcrumbList schema with real dates', async ({ page }) => {
  await page.goto('/resources/blog/agentic-ai-2026')
  const scripts = await page.locator('script[type="application/ld+json"]').allTextContents()
  const parsed = scripts.map((raw) => JSON.parse(raw))
  const article = parsed.find((s) => s['@type'] === 'Article')

  expect(article).toBeTruthy()
  expect(article.datePublished).not.toBe('2026-01-01')
  expect(parsed.map((s) => s['@type'])).toContain('BreadcrumbList')
})

test('organization schema does not include a fabricated aggregateRating', async ({ page }) => {
  await page.goto('/')
  const scripts = await page.locator('script[type="application/ld+json"]').allTextContents()
  const parsed = scripts.map((raw) => JSON.parse(raw))
  const org = parsed.find((s) => s['@type'] === 'Organization')

  expect(org).toBeTruthy()
  expect(org.aggregateRating).toBeUndefined()
})
