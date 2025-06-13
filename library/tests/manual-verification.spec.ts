import { test, expect } from '@playwright/test';

test('Manual verification test', async ({ page }) => {
  await page.goto('/');
  
  // Just check that page loads and has some basic elements
  await expect(page).toHaveTitle(/Lerian Design System/);
  
  // Check for any heading
  const anyHeading = page.locator('h1, h2, h3, h4, h5, h6').first();
  await expect(anyHeading).toBeVisible();
  
  // Check navigation exists
  await expect(page.locator('nav')).toBeVisible();
  
  // Test navigation to components page
  await page.click('a[href="/components"]');
  
  // Basic verification that components page loads
  await expect(page.locator('h1, h2, h3, h4, h5, h6').first()).toBeVisible();
  
  // Test font families are applied correctly
  const heading = page.locator('h1, h2, h3, h4, h5, h6').first();
  if (await heading.isVisible()) {
    const fontFamily = await heading.evaluate(el => getComputedStyle(el).fontFamily);
    expect(fontFamily).toContain('IBM Plex Serif');
  }
  
  // Test body text uses Inter
  const paragraph = page.locator('p').first();
  if (await paragraph.isVisible()) {
    const fontFamily = await paragraph.evaluate(el => getComputedStyle(el).fontFamily);
    expect(fontFamily).toContain('Inter');
  }
  
  // Test colors are defined
  const colorVars = await page.evaluate(() => {
    const style = getComputedStyle(document.documentElement);
    return {
      yellow: style.getPropertyValue('--lerian-yellow'),
      blue: style.getPropertyValue('--lerian-blue'),
      green: style.getPropertyValue('--lerian-green'),
      red: style.getPropertyValue('--lerian-red')
    };
  });
  
  expect(colorVars.yellow.trim()).toBeTruthy();
  expect(colorVars.blue.trim()).toBeTruthy();
  expect(colorVars.green.trim()).toBeTruthy();
  expect(colorVars.red.trim()).toBeTruthy();
  
  console.log('✅ All manual verification tests passed!');
});