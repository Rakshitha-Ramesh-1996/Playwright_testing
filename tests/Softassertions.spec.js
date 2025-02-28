import { test, expect } from '@playwright/test';

test('Soft assertion test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');

  // Hard assertion
  await expect(page).toHaveTitle('STORE')
  await expect(page).toHaveURL('https://www.demoblaze.com/')
  await expect(page.locator('.navbar-brand')).toBeVisible()

  // Soft assertions
  await expect.soft(page).toHaveTitle('STORES')
  await expect.soft(page).toHaveURL('https://www.demoblaze.com/')
  await expect.soft(page.locator('.navbar-brand')).toBeVisible()

  
});