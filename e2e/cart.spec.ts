import { test, expect } from '@playwright/test';

test.describe('Shopping Cart', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[type="email"]', 'user@test.com');
    await page.fill('input[type="password"]', 'user123');
    await page.click('button[type="submit"]');
  });

  test('should add product to cart', async ({ page }) => {
    await page.goto('/products');

    const addButton = page.locator('button:has-text("Add to Cart")').first();
    await addButton.click();

    await page.waitForTimeout(500);

    const badge = page.locator('button:has-text("Cart") span');
    await expect(badge).toHaveText('1');
  });

  test('should update cart quantity', async ({ page }) => {
    await page.goto('/products');

    await page.locator('button:has-text("Add to Cart")').first().click();

    await page.goto('/cart');

    await page.click('button:has-text("+")', { timeout: 5000 });

    await page.waitForTimeout(500);

    const quantityInput = page.locator('input[type="number"]').first();
    await expect(quantityInput).toHaveValue('2');
  });

  test('should remove item from cart', async ({ page }) => {
    await page.goto('/products');
    await page.locator('button:has-text("Add to Cart")').first().click();

    await page.goto('/cart');

    await page.click('button:has-text("Remove")');

    await expect(page.locator('text=Your cart is empty')).toBeVisible();
  });

  test('should persist cart after refresh', async ({ page }) => {
    await page.goto('/products');
    await page.locator('button:has-text("Add to Cart")').first().click();

    await page.reload();

    const badge = page.locator('button:has-text("Cart") span');
    await expect(badge).toHaveText('1');
  });
});
