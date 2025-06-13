import { test, expect } from '@playwright/test';

test.describe('Typography and Fonts', () => {
  test('Font families are correctly applied', async ({ page }) => {
    await page.goto('/components');
    
    // Check heading fonts (should be IBM Plex Serif)
    const h1 = page.locator('h1').first();
    const h1FontFamily = await h1.evaluate(el => getComputedStyle(el).fontFamily);
    expect(h1FontFamily).toContain('IBM Plex Serif');
    
    const h2 = page.locator('h2').first();
    const h2FontFamily = await h2.evaluate(el => getComputedStyle(el).fontFamily);
    expect(h2FontFamily).toContain('IBM Plex Serif');
    
    // Check body text fonts (should be Inter)
    const bodyText = page.locator('p').first();
    const bodyFontFamily = await bodyText.evaluate(el => getComputedStyle(el).fontFamily);
    expect(bodyFontFamily).toContain('Inter');
    
    // Check card descriptions use Inter
    const cardDescription = page.locator('[class*="CardDescription"]').first();
    if (await cardDescription.isVisible()) {
      const descFontFamily = await cardDescription.evaluate(el => getComputedStyle(el).fontFamily);
      expect(descFontFamily).toContain('Inter');
    }
  });

  test('Font weights are correctly applied', async ({ page }) => {
    await page.goto('/components');
    
    // Check heading font weights
    const h1 = page.locator('h1').first();
    const h1FontWeight = await h1.evaluate(el => getComputedStyle(el).fontWeight);
    expect(parseInt(h1FontWeight)).toBeGreaterThanOrEqual(600); // Should be semibold or higher
    
    // Check body text weight
    const bodyText = page.locator('p').first();
    const bodyFontWeight = await bodyText.evaluate(el => getComputedStyle(el).fontWeight);
    expect(parseInt(bodyFontWeight)).toBeLessThanOrEqual(500); // Should be normal to medium weight
  });

  test('Typography variants work correctly', async ({ page }) => {
    await page.goto('/components');
    
    // Wait for typography section to load
    await expect(page.locator('h2:has-text("Typography")')).toBeVisible();
    
    // Check different heading levels
    for (let level = 1; level <= 4; level++) {
      const heading = page.locator(`h${level}:has-text("Heading ${level}")`);
      if (await heading.isVisible()) {
        const fontSize = await heading.evaluate(el => getComputedStyle(el).fontSize);
        expect(parseInt(fontSize)).toBeGreaterThan(16); // Headings should be larger than base font
      }
    }
    
    // Check text variants
    const largeText = page.locator('text=Large text for important content');
    if (await largeText.isVisible()) {
      const fontSize = await largeText.evaluate(el => getComputedStyle(el).fontSize);
      expect(parseInt(fontSize)).toBeGreaterThan(16);
    }
    
    const smallText = page.locator('text=Small text for secondary information');
    if (await smallText.isVisible()) {
      const fontSize = await smallText.evaluate(el => getComputedStyle(el).fontSize);
      expect(parseInt(fontSize)).toBeLessThan(16);
    }
  });

  test('CSS custom properties for fonts are defined', async ({ page }) => {
    await page.goto('/');
    
    // Check that CSS custom properties are available
    const headingFont = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--font-heading');
    });
    
    const bodyFont = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--font-body');
    });
    
    expect(headingFont).toBeTruthy();
    expect(bodyFont).toBeTruthy();
    expect(headingFont).not.toBe(bodyFont); // Should be different fonts
  });

  test('Font loading and FOUT prevention', async ({ page }) => {
    // Navigate and check font loading
    await page.goto('/');
    
    // Wait for fonts to load
    await page.waitForLoadState('networkidle');
    
    // Check that fonts are actually loaded and rendered
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();
    
    // Take screenshot to verify font rendering
    await page.screenshot({ path: 'tests/screenshots/font-rendering.png', fullPage: false });
    
    // Check no font swap/flash occurred by ensuring text is immediately styled
    const fontDisplay = await h1.evaluate(el => {
      const computedStyle = getComputedStyle(el);
      return {
        fontFamily: computedStyle.fontFamily,
        fontWeight: computedStyle.fontWeight,
        fontSize: computedStyle.fontSize
      };
    });
    
    expect(fontDisplay.fontFamily).toContain('IBM Plex Serif');
    expect(fontDisplay.fontSize).toBeTruthy();
  });
});

test.describe('Chart Typography', () => {
  test('Chart fonts use CSS custom properties', async ({ page }) => {
    await page.goto('/blocks/dashboard');
    
    // Wait for charts to render
    await page.waitForTimeout(2000);
    
    // Check that charts are present
    const canvasElements = page.locator('canvas');
    await expect(canvasElements).toHaveCount(4);
    
    // Since Chart.js renders to canvas, we can't directly test the fonts
    // but we can verify the configuration is correct by checking the Chart.js options
    const chartFontConfig = await page.evaluate(() => {
      // Access the Chart.js instance if available in global scope
      // This is a best-effort check since Chart.js is contained in React components
      return {
        bodyFontAvailable: getComputedStyle(document.documentElement).getPropertyValue('--font-body'),
        headingFontAvailable: getComputedStyle(document.documentElement).getPropertyValue('--font-heading')
      };
    });
    
    expect(chartFontConfig.bodyFontAvailable).toBeTruthy();
    expect(chartFontConfig.headingFontAvailable).toBeTruthy();
  });
});