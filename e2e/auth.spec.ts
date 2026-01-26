import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
  test('should login successfully', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Login');
    await page.fill('input[type="email"]', 'user@test.com');
    await page.fill('input[type="password"]', 'user123');
    await page.click('button[type="submit"]');

    await expect(page).toHaveURL(/\/products/);
    await expect(page.locator('text=Regular User')).toBeVisible();
  });

  test('should show error with invalid credentials', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[type="email"]', 'wrong@test.com');
    await page.fill('input[type="password"]', 'wrong');
    await page.click('button[type="submit"]');

    await expect(page.locator('text=Invalid credentials')).toBeVisible();
  });

  test('should logout successfully', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[type="email"]', 'user@test.com');
    await page.fill('input[type="password"]', 'user123');
    await page.click('button[type="submit"]');

    await page.click('button:has-text("Logout")');

    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  });
});
