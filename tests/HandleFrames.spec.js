const{test,expect}=require('@playwright/test')

test('Handle frames test', async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    
    // Total frames
    const allframes = await page.frames()
    console.log('Total frames:', allframes.length)

    // approach 1: using name and URL of the frame
    // const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    // await frame1.fill('[name="mytext1"]','Raksha')

    // approach 2: using frame locator
    const inputbox=await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
    await inputbox.fill('Raksha')

    await page.waitForTimeout(5000); // 5 seconds
})