import { test, expect } from '@playwright/test';

test('debug - check page content', async ({ page }) => {
  await page.goto('/');
  
  // Take a screenshot to see what's actually rendered
  await page.screenshot({ path: 'tests/screenshots/homepage-debug.png', fullPage: true });
  
  // Check if page loads at all
  await expect(page).toHaveTitle(/Lerian Design System/);
  
  // Check what headings exist
  const headings = page.locator('h1, h2, h3, h4, h5, h6');
  const count = await headings.count();
  console.log(`Found ${count} headings`);
  
  // Log all heading text
  for (let i = 0; i < count; i++) {
    const text = await headings.nth(i).textContent();
    console.log(`Heading ${i}: ${text}`);
  }
  
  // Check if any text contains "Lerian"
  const lerianText = page.locator('text=Lerian');
  const lerianCount = await lerianText.count();
  console.log(`Found ${lerianCount} elements with "Lerian" text`);
});