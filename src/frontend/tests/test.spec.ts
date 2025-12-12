import { test, expect } from '@playwright/test';

test('home page shows a card', async ({ page }) => {
  await page.goto('/');
  // Preferred: use a stable test id
  const card = page.getByTestId('card');
  await expect(card).toBeVisible();

  // If you don’t have a test id, fallback to a selector:
  // await expect(page.locator('.card')).toBeVisible();
  // or a role/name if it’s an article/card component:
  // await expect(page.getByRole('article')).toBeVisible();
});