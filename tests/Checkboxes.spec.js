const{test,expect}=require('@playwright/test')

test('checkBoxs test', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    
   // single checkbox
   await page.locator('//input[@type="checkbox" and @id="monday"]').check();
   await expect(await page.locator('//input[@type="checkbox" and @id="monday"]')).toBeChecked();
   await expect(await page.locator('//input[@type="checkbox" and @id="monday"]').isChecked()).toBeTruthy();
   await expect(await page.locator('//input[@type="checkbox" and @id="sunday"]').isChecked()).toBeFalsy();

   // multiple checkboxes
   const checkboxeLocators = [
                    "//input[@type='checkbox' and @id='monday']",
                    "//input[@type='checkbox' and @id='sunday']",
                    "//input[@type='checkbox' and @id='saturday']"
                    ];
                for(const locator of checkboxeLocators){ // select multiple checkboxes
                    await page.locator(locator).check();
                }
                await page.waitForTimeout(2000);
                for(const locator of checkboxeLocators){ // unselect multiple checkboxes
                    if(await page.locator(locator).isChecked()){
                        await page.locator(locator).uncheck();
                    }
                    
                }


    await page.waitForTimeout(5000); // 5 seconds
})