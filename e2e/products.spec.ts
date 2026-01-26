import { test, expect } from '@playwright/test';

test.describe('Product Catalog', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[type="email"]', 'user@test.com');
    await page.fill('input[type="password"]', 'user123');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('/products');
  });

  test('should display products', async ({ page }) => {
    await expect(page.locator('h2:has-text("Product Catalog")')).toBeVisible();

    const products = page.getByTestId('product-grid').locator('> div');
    await expect(products).toHaveCount(6);
  });

  test('should filter by category', async ({ page }) => {
    await page.selectOption('select', 'Electronics');
    await page.click('button:has-text("Apply Filters")');
    await page.waitForTimeout(500);

    const categoryLabels = page.locator('text=ELECTRONICS');
    const count = await categoryLabels.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should search products', async ({ page }) => {
    await page.fill('input[placeholder="Search products..."]', 'laptop');
    await page.click('button:has-text("Apply Filters")');
    await page.waitForTimeout(500);
    await expect(page.locator('text=Laptop Dell XPS')).toBeVisible();
  });

  test('should paginate results', async ({ page }) => {
    await page.click('button:has-text("Next")');
    await expect(page.locator('text=Page 2')).toBeVisible();
  });
});
