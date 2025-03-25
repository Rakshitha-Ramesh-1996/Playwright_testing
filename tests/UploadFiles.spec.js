const{test,expect}=require('@playwright/test')

test('Uploading single file', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('#singleFileInput').setInputFiles('tests/UploadFiles/test1.pdf')

   await page.click('//button[@type="submit" and normalize-space()="Upload Single File"]')

    await page.waitForTimeout(5000); // 5 seconds
})
test.only('Uploading multiple files', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('#multipleFilesInput').setInputFiles(['tests/UploadFiles/test1.pdf','tests/UploadFiles/test2.pdf'])

    await page.click('//button[@type="submit" and normalize-space()="Upload Multiple Files"]')
    await page.waitForTimeout(2000); 
    const text=await page.locator('#multipleFilesStatus').textContent()// 5 seconds
    console.log("text is: ",text)
    expect(text).toContain('test2.pdf')

    await page.waitForTimeout(5000); // 5 seconds
})