import { test, expect } from '@playwright/test';

test.describe('Main Pages', () => {
  test('Home page loads correctly', async ({ page }) => {
    await page.goto('/');
    
    // Check page title
    await expect(page).toHaveTitle(/Lerian Design System/);
    
    // Check main heading
    await expect(page.locator('h1')).toContainText('Coding together to give everyone the freedom');
    
    // Check hero description mentions Midaz plugin development
    await expect(page.locator('text=Midaz plugin developers')).toBeVisible();
    
    // Check navigation links
    await expect(page.locator('nav a[href="/components"]')).toBeVisible();
    await expect(page.locator('nav a[href="/blocks"]')).toBeVisible();
    
    // Verify no console errors
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    await page.waitForLoadState('networkidle');
    expect(consoleErrors).toHaveLength(0);
  });

  test('Components page loads and displays all sections', async ({ page }) => {
    await page.goto('/components');
    
    // Check page title and main heading
    await expect(page.locator('h1')).toContainText('Component Library');
    
    // Check Typography section
    await expect(page.locator('h2:has-text("Typography")')).toBeVisible();
    await expect(page.locator('text=IBM Plex Serif for headings')).toBeVisible();
    await expect(page.locator('text=Inter for body text')).toBeVisible();
    
    // Check all component sections are present
    const sections = [
      'Typography',
      'Buttons', 
      'Form Elements',
      'Alerts',
      'Badges',
      'Avatars',
      'Color Palette',
      'Progress',
      'Tabs',
      'Dialogs & Modals',
      'Menus & Dropdowns',
      'Loading States',
      'Calendar'
    ];
    
    for (const section of sections) {
      await expect(page.locator(`h2:has-text("${section}")`)).toBeVisible();
    }
    
    // Test interactive components
    await expect(page.locator('button:has-text("Primary Button")')).toBeVisible();
    await expect(page.locator('input[placeholder="Enter text here"]')).toBeVisible();
    
    // Test dialog interaction
    await page.click('button:has-text("Open Dialog")');
    await expect(page.locator('[role="dialog"]')).toBeVisible();
    await page.keyboard.press('Escape');
    
    // Test progress bar interaction
    await page.click('button:has-text("Increase")');
    const progressValue = await page.locator('text=Progress:').textContent();
    expect(progressValue).toContain('%');
  });

  test('Blocks page loads and shows all blocks', async ({ page }) => {
    await page.goto('/blocks');
    
    // Check page title
    await expect(page.locator('h1')).toContainText('Block Library');
    
    // Check that blocks are marked as "Ready"
    const readyBadges = page.locator('text=Ready');
    await expect(readyBadges).toHaveCount(8); // Expecting 8 blocks
    
    // Check block categories
    const blockTypes = [
      'Authentication',
      'Dashboard', 
      'Forms',
      'E-commerce',
      'Communication',
      'Marketing',
      'Data Tables',
      'Charts & Analytics'
    ];
    
    for (const blockType of blockTypes) {
      await expect(page.locator(`text=${blockType}`)).toBeVisible();
    }
    
    // Test block navigation
    await page.click('a[href="/blocks/dashboard"]');
    await expect(page).toHaveURL('/blocks/dashboard');
    await expect(page.locator('h1')).toContainText('Dashboard');
  });

  test('Dashboard block page works with charts', async ({ page }) => {
    await page.goto('/blocks/dashboard');
    
    // Check dashboard loads
    await expect(page.locator('h1')).toContainText('Dashboard');
    
    // Check chart type buttons are present
    await expect(page.locator('button:has-text("Line Chart")')).toBeVisible();
    await expect(page.locator('button:has-text("Bar Chart")')).toBeVisible();
    await expect(page.locator('button:has-text("Pie Chart")')).toBeVisible();
    await expect(page.locator('button:has-text("Doughnut Chart")')).toBeVisible();
    
    // Test chart type switching
    await page.click('button:has-text("Bar Chart")');
    await page.waitForTimeout(1000); // Wait for chart to render
    
    await page.click('button:has-text("Pie Chart")');
    await page.waitForTimeout(1000); // Wait for chart to render
    
    // Verify canvas elements exist (charts render to canvas)
    const canvasElements = page.locator('canvas');
    await expect(canvasElements).toHaveCount(4); // Expecting 4 charts
  });

  test('Brand assets page displays correctly', async ({ page }) => {
    await page.goto('/brand/assets');
    
    // Check page title
    await expect(page.locator('h1')).toContainText('Brand Assets');
    
    // Check color palette
    const colorNames = ['Lerian Blue', 'Lerian Yellow', 'Lerian Green', 'Lerian Red', 'Lerian Black'];
    for (const colorName of colorNames) {
      await expect(page.locator(`text=${colorName}`)).toBeVisible();
    }
    
    // Check hex color values are displayed
    await expect(page.locator('text=#2ED8FE')).toBeVisible(); // Blue
    await expect(page.locator('text=#FEBD02')).toBeVisible(); // Yellow
    await expect(page.locator('text=#50F769')).toBeVisible(); // Green
    await expect(page.locator('text=#FF6760')).toBeVisible(); // Red
    await expect(page.locator('text=#191A1B')).toBeVisible(); // Black
  });
});

test.describe('Navigation', () => {
  test('Header navigation works correctly', async ({ page }) => {
    await page.goto('/');
    
    // Test navigation to components
    await page.click('nav a[href="/components"]');
    await expect(page).toHaveURL('/components');
    await expect(page.locator('h1')).toContainText('Component Library');
    
    // Navigate back to home via logo
    await page.click('a[href="/"]');
    await expect(page).toHaveURL('/');
    
    // Test navigation to blocks
    await page.click('nav a[href="/blocks"]');
    await expect(page).toHaveURL('/blocks');
    await expect(page.locator('h1')).toContainText('Block Library');
    
    // Test brand dropdown
    await page.hover('text=Brand');
    await expect(page.locator('a[href="/brand/assets"]')).toBeVisible();
    await expect(page.locator('a[href="/brand/avatars"]')).toBeVisible();
  });
});

test.describe('Responsiveness', () => {
  test('Pages are responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    await page.goto('/');
    
    // Check mobile layout
    await expect(page.locator('h1')).toBeVisible();
    
    // Test navigation menu (should be hamburger on mobile)
    await page.goto('/components');
    await expect(page.locator('h1')).toBeVisible();
    
    // Check component grid adapts to mobile
    const buttons = page.locator('button:has-text("Primary Button")');
    await expect(buttons).toBeVisible();
  });
  
  test('Pages work on tablet', async ({ page }) => {
    // Set tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    
    await page.goto('/blocks/dashboard');
    
    // Check charts render on tablet
    const canvasElements = page.locator('canvas');
    await expect(canvasElements).toHaveCount(4);
    
    // Check layout adapts
    await expect(page.locator('h1')).toBeVisible();
  });
});