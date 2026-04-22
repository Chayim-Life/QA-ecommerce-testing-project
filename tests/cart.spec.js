import { test, expect } from '@playwright/test';

test('Add product to cart', async ({ page }) => {
  await page.goto('https://automationexercise.com');

  await page.click('text=Products');
  await page.click('.product-overlay >> text=Add to cart');

  await page.click('text=View Cart');

  const items = await page.locator('.cart_description').count();
  expect(items).toBeGreaterThan(0);
});

test('Remove product from cart', async ({ page }) => {
  await page.goto('https://automationexercise.com/view_cart');

  if (await page.locator('.cart_quantity_delete').count() > 0) {
    await page.click('.cart_quantity_delete');
  }

  await expect(page.locator('text=Cart is empty')).toBeVisible();
});
