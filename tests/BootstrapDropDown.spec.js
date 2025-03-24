const{test,expect}=require('@playwright/test')

test('Bootstrap DropDown test', async({page})=>{
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')
    
    // 1 count the number of options
    await page.click('.multiselect');
    // const options=await page.locator('//ul//li//a//label//input')
    // await expect(options).toHaveCount(11)
    
    // 2
    // const options=await page.$$('//ul//li//a//label//input')
    // await expect(options.length).toBe(11)

    // 3 select options from dropdown
//     const options=await page.$$('//ul//li//a//label')
//     for(let option of options){
//         const value=await option.textContent();
//         // console.log("value is:",value);
//         if(value.includes('Angular')||value.includes('Java')||value.includes('MySQL')){
//             await option.click();
//     }
// }
// 4 deselect options from dropdown
const options=await page.$$('//ul//li//a//label')
for(let option of options){
    const value=await option.textContent();
    // console.log("value is:",value);
    if(value.includes('HTML')||value.includes('CSS')){
        await option.click();
}
}

    await page.waitForTimeout(5000); // 5 seconds
})