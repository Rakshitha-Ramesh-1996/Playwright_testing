const{test,expect}=require('@playwright/test')

test('Date picker test', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Click on the date picker
    // await page.fill('#datepicker','03/15/2024')

    // date picker 
    const year ="2024"
    const month = "March"
    const date = "20"
    
    await page.click('#datepicker') // opens the date picker

    while(true){
        const currentYear = await page.innerText('.ui-datepicker-year')
        const currentMonth = await page.innerText('.ui-datepicker-month')
        if(currentYear === year && currentMonth === month){
            break
        }
        await page.click('[title="Prev"]')
        // await page.click('[title="Next"]')
    }
    /*
    const dates=await page.$$('//a[@class="ui-state-default"]')
    for(const d of dates){
        const value = await d.innerText()
        if(value === date){
            await d.click()
            break
        }
    }
*/

// date selection -without loop
    const dateSelector = (`//a[@class="ui-state-default"][text()="${date}"]`)
    await page.click(dateSelector)

    await page.waitForTimeout(5000); // 5 seconds
})