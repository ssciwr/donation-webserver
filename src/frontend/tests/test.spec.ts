import { test, expect } from '@playwright/test';

const routes: Array<{ path: string; testId: string }> = [
  { path: '/', testId: 'page-home' },
  { path: '/about', testId: 'page-about' },
  { path: '/donation', testId: 'page-donation' },
  { path: '/tutorial', testId: 'page-tutorial' },
  { path: '/blog', testId: 'page-blog' },
  { path: '/faq', testId: 'page-faq' },
  { path: '/team', testId: 'page-team' },
  { path: '/contact', testId: 'page-contact' }
];

for (const route of routes) {
  test(`smoke: ${route.path} loads`, async ({ page }) => {
    await page.goto(route.path);
    await expect(page.getByTestId(route.testId)).toBeVisible();
  });
}

test('home page shows a card', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('card')).toBeVisible();
});