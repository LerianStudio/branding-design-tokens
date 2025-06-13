import { test, expect } from '@playwright/test';

test('basic test - homepage loads', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Lerian Design System/);
  await expect(page.locator('h1')).toContainText('Coding together to give everyone the freedom');
  
  // Check that Lerian content is present
  await expect(page.locator('text=Lerian')).toBeVisible();
});