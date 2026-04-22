import { test, expect } from '@playwright/test';

test('TC-001: Successful login', async ({ page }) => {
  await page.goto('https://example.com/login');

  await page.fill('#email', 'testuser@example.com');
  await page.fill('#password', 'ValidPassword123');
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/.*dashboard/);
});

test('TC-002: Invalid login', async ({ page }) => {
  await page.goto('https://example.com/login');

  await page.fill('#email', 'testuser@example.com');
  await page.fill('#password', 'WrongPassword123');
  await page.click('button[type="submit"]');

  await expect(page.locator('text=Invalid email or password')).toBeVisible();
});
