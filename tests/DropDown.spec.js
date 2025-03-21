const {test,expect} = require('@playwright/test');

test('dropdown test', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    // multiple ways to select dropdown
    // await page.locator('#country').selectOption({label: 'India'}) // by label / visible text
    // await page.locator('#country').selectOption('India')// by text
    // await page.locator('#country').selectOption({value: 'uk'}) // by value
    // await page.locator('#country').selectOption({index: 1}) // by index
    // await page.selectOption('#country', 'India')

    // Assertions
    //1. check number of options in dropdown - approach 1
    // const options = await page.locator('#country option')
    // await expect(options).toHaveCount(10)

    //2. check number of options in dropdown - approach 2
    // const options=await page.$$('#country option') // $$ is equivalent to document.querySelectorAll
    // console.log("Number of options in dropdown: ", options.length)
    // await expect(options.length).toBe(10);

    //3. check  presence of specific option in dropdown - approach 1
    // const content=await page.locator('#country').textContent()
    // await expect(content.includes('India')).toBeTruthy();

    //4. check  presence of specific option in dropdown - approach 2 using loopig statement
    // const options=await page.$$('#country option')
    // let flag = false;
    // for(const option of options){
    //     // console.log(await option.textContent());
    //     let text=await option.textContent();
    //     if(text.includes('France')){
    //         flag=true;
    //         break;
    //     }
    // }
    // await expect(flag).toBeTruthy();

    // 5. slection option from looping
    const options = await page.$$('#country option');

    for (const option of options) {
        let text = await option.textContent();
        let value = await option.getAttribute('value'); // Get the actual value
    
        if (text?.includes('France')) { // ? is used to avoid null exception
            await page.selectOption("#country", value); // Select using extracted value
            break;
        }
    }
    
    await page.waitForTimeout(2000)

});