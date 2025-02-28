//const {test, expect}=require('@playwright/test');
import { test, expect } from '@playwright/test';

test('Locators',async ({page})=>{

    await page.goto('https://www.demoblaze.com/')
    // click on login button
    await page.locator('id=login2').click() // property
    // provide username 
    await page.locator('#loginusername').fill('RakshaVamsi') // css selector
    // provide password
    await page.fill('#loginpassword','Arvind@1999')
    // click on login button
    await page.click('//button[normalize-space()="Log in"]') // xpath

    // verify logout link presence
    const logoutLink=await page.locator('//a[normalize-space()="Log out"]')
    await expect(logoutLink).toBeVisible();

    await page.close()
})