import { test, expect } from '@playwright/test'

test('blog post renders Lexical body content, key takeaways, and the shared CtaSection', async ({
  page,
}) => {
  await page.goto('/resources/blog/agentic-ai-2026')

  await expect(page.locator('h1')).toBeVisible()

  // Lexical richText body renders inside the .blog-content container.
  const body = page.locator('.blog-content')
  await expect(body).toBeVisible()
  await expect(body.locator('p, h2, h3').first()).toBeVisible()

  // Key Takeaways block (only rendered when the CMS record has entries).
  await expect(page.getByRole('heading', { name: 'Key Takeaways' })).toBeVisible()

  // The bottom CTA now comes from the shared CtaSection component.
  await expect(page.getByRole('link', { name: 'Book a Strategy Call' }).last()).toBeVisible()
})

test('blog list page renders the shared CtaSection', async ({ page }) => {
  await page.goto('/resources/blog')
  await expect(page.getByRole('heading', { name: "Enough reading. Let's build one." })).toBeVisible()
})
