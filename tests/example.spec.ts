import { test, expect } from '@playwright/test';

test('Base path page title is equal to Saksbehandling', async ({
  page,
  baseURL,
}) => {
  await page.goto(baseURL!);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Saksbehandling/);
});
