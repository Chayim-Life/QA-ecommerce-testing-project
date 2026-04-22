import { test, expect } from '@playwright/test';

test('Login with empty fields', async ({ page }) => {
  await page.goto('https://automationexercise.com/login');

  await page.click('button:has-text("Login")');

  await expect(page.locator('input[name="email"]')).toBeVisible();
});
