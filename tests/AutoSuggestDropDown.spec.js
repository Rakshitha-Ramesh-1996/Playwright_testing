const{test,expect}=require('@playwright/test')

test('Auto suggest dropdown test', async({page})=>{
    await page.goto('https://www.redbus.in/')

    await page.fill('//input[@id="src"]','Delhi')
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

    const autoSuggestList=await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")
    for(let option of autoSuggestList){
        const value=await option.textContent();
        // console.log(value);
        if(value.includes('Badarpur')){
            await option.click();
            break;
        }
    }

    await page.waitForTimeout(5000); // 5 seconds
})