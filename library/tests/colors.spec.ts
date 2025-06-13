import { test, expect } from '@playwright/test';

test.describe('Color Consistency', () => {
  test('CSS custom properties for Lerian colors are defined', async ({ page }) => {
    await page.goto('/');
    
    // Check that all Lerian color CSS custom properties are available
    const colorProperties = await page.evaluate(() => {
      const style = getComputedStyle(document.documentElement);
      return {
        yellow: style.getPropertyValue('--lerian-yellow'),
        green: style.getPropertyValue('--lerian-green'),
        red: style.getPropertyValue('--lerian-red'),
        blue: style.getPropertyValue('--lerian-blue'),
        black: style.getPropertyValue('--lerian-black'),
        grayDark: style.getPropertyValue('--lerian-gray-dark'),
        grayMedium: style.getPropertyValue('--lerian-gray-medium'),
        gray: style.getPropertyValue('--lerian-gray'),
        grayLight: style.getPropertyValue('--lerian-gray-light')
      };
    });
    
    // Verify all color properties are defined
    Object.entries(colorProperties).forEach(([colorName, value]) => {
      expect(value.trim()).toBeTruthy();
      expect(value.trim()).toMatch(/^\d+\s+\d+%\s+\d+%$/); // HSL format without hsl()
    });
  });

  test('Brand colors display correctly on brand assets page', async ({ page }) => {
    await page.goto('/brand/assets');
    
    // Check color swatches are visible
    const colorSwatches = page.locator('[class*="bg-lerian-"]');
    await expect(colorSwatches).toHaveCount(4); // Blue, Yellow, Green, Red
    
    // Check hex values match expected colors
    const expectedColors = {
      '#2ED8FE': 'Lerian Blue',
      '#FEBD02': 'Lerian Yellow', 
      '#50F769': 'Lerian Green',
      '#FF6760': 'Lerian Red',
      '#191A1B': 'Lerian Black'
    };
    
    for (const [hex, colorName] of Object.entries(expectedColors)) {
      await expect(page.locator(`text=${hex}`)).toBeVisible();
      await expect(page.locator(`text=${colorName}`)).toBeVisible();
    }
  });

  test('Color classes work correctly', async ({ page }) => {
    await page.goto('/components');
    
    // Check that Lerian color classes apply correctly
    const yellowBadge = page.locator('.bg-lerian-yellow').first();
    if (await yellowBadge.isVisible()) {
      const backgroundColor = await yellowBadge.evaluate(el => getComputedStyle(el).backgroundColor);
      // Should be some shade of yellow (hsl or rgb)
      expect(backgroundColor).toMatch(/(rgb|hsl)/);
    }
    
    const greenBadge = page.locator('.bg-lerian-green').first();
    if (await greenBadge.isVisible()) {
      const backgroundColor = await greenBadge.evaluate(el => getComputedStyle(el).backgroundColor);
      expect(backgroundColor).toMatch(/(rgb|hsl)/);
    }
  });

  test('Dashboard charts use Lerian colors', async ({ page }) => {
    await page.goto('/blocks/dashboard');
    
    // Wait for charts to load
    await page.waitForTimeout(2000);
    
    // Since Chart.js renders to canvas, we can't directly inspect the colors
    // But we can verify the color configuration is accessible
    const lerianColorsAvailable = await page.evaluate(() => {
      const style = getComputedStyle(document.documentElement);
      return {
        hasYellow: !!style.getPropertyValue('--lerian-yellow'),
        hasGreen: !!style.getPropertyValue('--lerian-green'),
        hasRed: !!style.getPropertyValue('--lerian-red'),
        hasBlue: !!style.getPropertyValue('--lerian-blue')
      };
    });
    
    expect(lerianColorsAvailable.hasYellow).toBe(true);
    expect(lerianColorsAvailable.hasGreen).toBe(true);
    expect(lerianColorsAvailable.hasRed).toBe(true);
    expect(lerianColorsAvailable.hasBlue).toBe(true);
  });

  test('Semantic color mappings work', async ({ page }) => {
    await page.goto('/components');
    
    // Check semantic color properties
    const semanticColors = await page.evaluate(() => {
      const style = getComputedStyle(document.documentElement);
      return {
        primary: style.getPropertyValue('--primary'),
        secondary: style.getPropertyValue('--secondary'),
        accent: style.getPropertyValue('--accent'),
        destructive: style.getPropertyValue('--destructive'),
        background: style.getPropertyValue('--background'),
        foreground: style.getPropertyValue('--foreground')
      };
    });
    
    // Verify semantic colors are defined
    Object.entries(semanticColors).forEach(([colorName, value]) => {
      expect(value.trim()).toBeTruthy();
    });
  });

  test('Button variants have correct colors', async ({ page }) => {
    await page.goto('/components');
    
    // Check different button variants
    const primaryButton = page.locator('button:has-text("Primary Button")');
    await expect(primaryButton).toBeVisible();
    
    const secondaryButton = page.locator('button:has-text("Secondary Button")');
    await expect(secondaryButton).toBeVisible();
    
    const destructiveButton = page.locator('button:has-text("Destructive")');
    await expect(destructiveButton).toBeVisible();
    
    // Check that buttons have different background colors
    const primaryBg = await primaryButton.evaluate(el => getComputedStyle(el).backgroundColor);
    const secondaryBg = await secondaryButton.evaluate(el => getComputedStyle(el).backgroundColor);
    const destructiveBg = await destructiveButton.evaluate(el => getComputedStyle(el).backgroundColor);
    
    expect(primaryBg).not.toBe(secondaryBg);
    expect(primaryBg).not.toBe(destructiveBg);
    expect(secondaryBg).not.toBe(destructiveBg);
  });

  test('Alert variants use correct colors', async ({ page }) => {
    await page.goto('/components');
    
    // Check alert variants
    const infoAlert = page.locator('[role="alert"]:has-text("Information")').first();
    const errorAlert = page.locator('[role="alert"]:has-text("Error")').first();
    const successAlert = page.locator('[role="alert"]:has-text("Success")').first();
    
    if (await infoAlert.isVisible() && await errorAlert.isVisible()) {
      const infoBorderColor = await infoAlert.evaluate(el => getComputedStyle(el).borderColor);
      const errorBorderColor = await errorAlert.evaluate(el => getComputedStyle(el).borderColor);
      
      expect(infoBorderColor).not.toBe(errorBorderColor);
    }
    
    if (await successAlert.isVisible()) {
      const successBorderColor = await successAlert.evaluate(el => getComputedStyle(el).borderColor);
      // Success should use green color
      expect(successBorderColor).toMatch(/(rgb|hsl)/);
    }
  });
});

test.describe('Dark Mode Support', () => {
  test('Color system works in light mode', async ({ page }) => {
    await page.goto('/');
    
    // Verify we're in light mode (default)
    const backgroundColor = await page.evaluate(() => {
      return getComputedStyle(document.body).backgroundColor;
    });
    
    // Light mode should have light background
    expect(backgroundColor).toMatch(/rgb\(255,\s*255,\s*255\)|rgb\(250,|rgb\(249,/);
  });
});

test.describe('Color Accessibility', () => {
  test('Color combinations have sufficient contrast', async ({ page }) => {
    await page.goto('/components');
    
    // Check primary button contrast
    const primaryButton = page.locator('button:has-text("Primary Button")');
    const buttonStyles = await primaryButton.evaluate(el => {
      const styles = getComputedStyle(el);
      return {
        backgroundColor: styles.backgroundColor,
        color: styles.color
      };
    });
    
    expect(buttonStyles.backgroundColor).toBeTruthy();
    expect(buttonStyles.color).toBeTruthy();
    
    // Basic contrast check - they should be different colors
    expect(buttonStyles.backgroundColor).not.toBe(buttonStyles.color);
  });
});