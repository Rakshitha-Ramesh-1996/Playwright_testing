const{test,expect}=require('@playwright/test')

test('InputBox test', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    // Input - name
    await expect(await page.locator('//input[@id="name"]')).toBeVisible();
    await expect(await page.locator('//input[@id="name"]')).toBeEmpty();
    await expect(await page.locator('//input[@id="name"]')).toBeEditable();
    await expect(await page.locator('//input[@id="name"]')).toBeEnabled();

    await page.fill('//input[@id="name"]','Raksha')
    // await page.locator('//input[@id="name"]').fill('Raksha')
    await page.waitForTimeout(5000); // 5 seconds
})