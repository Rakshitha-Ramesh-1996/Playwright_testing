// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test.only('test',async({page})=>{
    
    await page.goto('https://www.demoblaze.com/')
    //Login
     await page.click('#login2')
     await page.fill('#loginusername','admin')
     await page.fill('#loginpassword','admin')
     await page.click('//button[normalize-space()="Log in"]')
     await expect(page.locator('#logout2')).toBeVisible()
      await page.waitForTimeout(2000); // 2 seconds
})