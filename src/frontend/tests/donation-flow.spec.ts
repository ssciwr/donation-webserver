import { test, expect } from "@playwright/test";

test("donation wizard flow (Tier 1, BUILD_MODE skips DB)", async ({ page }) => {
  await page.goto("/donation");
  await expect(page.getByTestId("page-donation")).toBeVisible();

  // Step 0: open the first modal
  await page.getByTestId("donation-open-form").click();
  await expect(page.getByTestId("donation-form-modal")).toBeVisible();

  // Next button disabled until gender, age, and native language are picked
  const formNext = page.getByTestId("donation-form-next");
  await expect(formNext).toBeDisabled();
  await page.locator('input[name="gender"][value="0"]').check();
  await expect(formNext).toBeDisabled();
  await page.locator('input[name="age"][value="2"]').check();
  await expect(formNext).toBeDisabled();
  await page.locator('input[name="lang"][value="1"]').check();
  await expect(formNext).toBeEnabled();

  // Step 1: form -> country
  await formNext.click();
  await expect(page.getByTestId("donation-country-modal")).toBeVisible();

  // Next button disabled until a country is picked on the map
  const countryNext = page.getByTestId("donation-country-next");
  await expect(countryNext).toBeDisabled();
  await page.locator('[cc="de"]').first().click();
  await expect(countryNext).toBeEnabled();

  // Step 2: country -> forward email
  await countryNext.click();
  await expect(page.getByTestId("donation-forward-email-modal")).toBeVisible();

  // Step 3: forward email -> disclosure
  await page.getByTestId("donation-forward-next").click();
  await expect(page.getByTestId("donation-disclosure-modal")).toBeVisible();

  // Step 4: accept disclosure to show submit
  await page.getByTestId("donation-disclosure-checkbox").click();
  await page.getByTestId("donation-disclosure-accept").click();
  await expect(page.getByTestId("donation-submit")).toBeVisible();
});
