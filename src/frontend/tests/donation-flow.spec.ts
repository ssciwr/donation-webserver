import { test, expect } from '@playwright/test';

test('donation wizard flow (Tier 1, BUILD_MODE skips DB)', async ({ page }) => {
  await page.goto('/donation');
  await expect(page.getByTestId('page-donation')).toBeVisible();

  // Step 0: open the first modal
  await page.getByTestId('donation-open-form').click();
  await expect(page.getByTestId('donation-form-modal')).toBeVisible();

  // Step 1: form -> country
  await page.getByTestId('donation-form-next').click();
  await expect(page.getByTestId('donation-country-modal')).toBeVisible();

  // Step 2: country -> forward email
  await page.getByTestId('donation-country-next').click();
  await expect(page.getByTestId('donation-forward-email-modal')).toBeVisible();

  // Step 3: forward email -> disclosure
  await page.getByTestId('donation-forward-next').click();
  await expect(page.getByTestId('donation-disclosure-modal')).toBeVisible();

  // Step 4: accept disclosure to show submit
  await page.getByTestId('donation-disclosure-checkbox').click();
  await page.getByTestId('donation-disclosure-accept').click();
  await expect(page.getByTestId('donation-submit')).toBeVisible();
});

