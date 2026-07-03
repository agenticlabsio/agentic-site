import { test, expect } from '@playwright/test'

test('FAQ accordion expands and collapses a question', async ({ page }) => {
  await page.goto('/resources/faq')
  // Scoped to <main> — the header's mobile-menu toggle also has aria-expanded.
  const firstQuestion = page.locator('main button[aria-expanded]').first()

  await expect(firstQuestion).toHaveAttribute('aria-expanded', 'false')
  await firstQuestion.click()
  await expect(firstQuestion).toHaveAttribute('aria-expanded', 'true')
  await firstQuestion.click()
  await expect(firstQuestion).toHaveAttribute('aria-expanded', 'false')
})

test('mobile hamburger opens the nav menu, a link navigates, and body scroll is restored', async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto('/')

  const menuButton = page.getByRole('button', { name: 'Menu' })
  await menuButton.click()

  const mobileMenu = page.locator('#nav-mobile-menu')
  await expect(mobileMenu.getByRole('link', { name: 'Industries', exact: true })).toBeVisible()

  const bodyOverflowWhileOpen = await page.evaluate(() => document.body.style.overflow)
  expect(bodyOverflowWhileOpen).toBe('hidden')

  await mobileMenu.getByRole('link', { name: 'Industries', exact: true }).click()
  await expect(page).toHaveURL(/\/industries$/)

  const bodyOverflowAfterNav = await page.evaluate(() => document.body.style.overflow)
  expect(bodyOverflowAfterNav).toBe('')
})

test('theme toggle flips data-theme on an interior page', async ({ page }) => {
  await page.goto('/solutions')
  const toggle = page.getByRole('button', { name: 'Toggle theme' }).first()

  const before = await page.evaluate(() => document.documentElement.getAttribute('data-theme'))
  await toggle.click()
  await expect
    .poll(() => page.evaluate(() => document.documentElement.getAttribute('data-theme')))
    .not.toBe(before)
})
