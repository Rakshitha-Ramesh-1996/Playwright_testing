const{test,expect}=require('@playwright/test')

test('Handle inner frames test', async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    
   const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
   await frame3.fill('[name="mytext3"]','Raksha')

   // nested frame
   const childFrame=await frame3.childFrames();
    // console.log('Total child frames:', childFrames.length)
   await childFrame[0].locator('//*[@id="i9"]/div[3]/div').click()

    await page.waitForTimeout(5000); // 5 seconds
})