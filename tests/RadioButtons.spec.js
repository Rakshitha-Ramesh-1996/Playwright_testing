const{test,expect}=require('@playwright/test')

test('Radio button test', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    
    // Click on radio button
    await page.check('//input[@id="female"]');
    // await page.locator('//input[@id="female"]').check();
    await expect(await page.locator('//input[@id="female"]')).toBeChecked();
    await expect(await page.locator('//input[@id="female"]').isChecked()).toBeTruthy();

    await expect(await page.locator('//input[@id="male"]')).not.toBeChecked();
    await expect(await page.locator('//input[@id="male"]').isChecked()).toBeFalsy();

    await page.waitForTimeout(5000); // 5 seconds
})