import { test, expect } from '@playwright/test';

test('has title and renders hero section', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Pranesh S/);

  // Expect the Hero Section name to be visible
  await expect(page.getByText("Hi, I'm Pranesh S", { exact: false })).toBeVisible();
});
