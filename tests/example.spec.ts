import { test, expect } from '@playwright/test';

test('Base path page title is equal to Remix-playwright-github-action', async ({
  page,
  baseURL,
}) => {
  await page.goto(baseURL!);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Remix-playwright-github-action/);
});
