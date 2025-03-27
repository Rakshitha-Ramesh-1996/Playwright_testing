const{test,expect}=require('@playwright/test')

test('Screenshot', async({page})=>{
    await page.goto('https://www.demoblaze.com/') 
    await page.screenshot({path:'tests/Screenshots/'+Date.now()+'HomePage.png'})
})
test('Full page Screenshot', async({page})=>{
    await page.goto('https://www.demoblaze.com/') 
    await page.waitForTimeout(5000)
    await page.screenshot({path:'tests/Screenshots/'+Date.now()+'Fullpage.png',fullPage:true})
})
test.only('Elements Screenshot', async({page})=>{
    await page.goto('https://www.demoblaze.com/') 
    await page.waitForSelector('//*[@id="tbodyid"]/div[3]/div')
    await page.locator('//*[@id="tbodyid"]/div[3]/div').screenshot({path:'tests/Screenshots/'+Date.now()+'Nexcus.png'})
})