const{test,expect}=require('@playwright/test')

test('Multi dropdown test', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    
    // Click on multi dropdown
    await page.selectOption('#colors',['Red','Green','Blue']);

    // Assertions
    // 1. check number of options in dropdown
    // const options=await page.locator('#colors option')
    // await expect(options).toHaveCount(7)

    // 2. check number of options in dropdown using js array
    // const options=await page.$$('#colors option')
    // console.log('Number of options in dropdown: '+options.length);
    // await expect(options).toHaveLength(7)

    // 3. check presence of value in dropdown
    const content=await page.locator('#colors').textContent();
    await expect(content.includes('Green')).toBeTruthy();

    await page.waitForTimeout(5000); // 5 seconds
})