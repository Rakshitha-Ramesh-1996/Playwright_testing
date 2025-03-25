const{test,expect}=require('@playwright/test')

test.skip('Mouse Hover Action test', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Mouse hover action
    const pointMe = await page.locator('.dropbtn')
    const mobile = await page.locator('//a[normalize-space()="Mobiles"]')
    await pointMe.hover()
    await page.waitForTimeout(2000); // 2 seconds
    await mobile.click()
    await page.waitForTimeout(5000); // 5 seconds
})

test.skip('Right click Action test', async({page})=>{
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

    // Right click action
    const rightClickMe = await page.locator('//span[normalize-space()="right click me"]')
    await rightClickMe.click({button:'right'})
    await page.waitForTimeout(2000); // 2 seconds
    const copy = await page.locator('//span[normalize-space()="Copy"]')
    await copy.click()
    await page.waitForTimeout(5000); // 5 seconds
})

test.skip('Double click Action test', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    // Double click action
    const doubleClickMe = await page.locator('//button[normalize-space()="Copy Text"]')
    await doubleClickMe.dblclick()
    await page.waitForTimeout(5000); // 5 seconds
})

test.skip('Drag and drop Action test', async({page})=>{
    await page.goto('https://demo.aspnetawesome.com/')

    // Drag and drop action - approch 1
    const friut = await page.locator('//div[@data-k="227"]')
    const dropZone = await page.locator('//div[@data-ogroup="Fruits" and @data-k="1"]')
    await friut.dragTo(dropZone)

    
    
    // Drag and drop action - approch 2
    await page.waitForTimeout(5000);
    await friut.hover()
    await page.mouse.down()

    await dropZone.hover()
    await page.mouse.up()

    await page.waitForTimeout(5000); // 5 seconds
})

test('Keyboard Action test', async({page})=>{
    await page.goto('https://gotranscript.com/text-compare')
    // Keyboard action
    await page.locator('[name="text1"]').fill("Welcome to automation testing")
    await page.keyboard.press('Meta+KeyA') // Select all text
    await page.keyboard.press('Meta+C') // Copy text
    await page.keyboard.down('Tab') // Move to next input field
    await page.keyboard.up('Tab')
    // await page.locator('[name="text2"]').click()
    await page.keyboard.press('Meta+V') // Paste text

    await page.waitForTimeout(5000); // 5 seconds
})