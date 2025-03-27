const{test,expect}=require('@playwright/test')

let page;

test.beforeEach(async({browser})=>{
    page=await browser.newPage()
    await page.goto('https://www.demoblaze.com/')
    //Login
     await page.click('#login2')
     await page.fill('#loginusername','admin')
     await page.fill('#loginpassword','admin')
     await page.click('//button[normalize-space()="Log in"]')
})

test.afterEach(async()=>{
 //Logout
 await page.click('#logout2')
 await page.waitForTimeout(5000); // 5 seconds
})

test('Home Page Test', async()=>{
   //Home Page
    await page.waitForTimeout(2000); // 2 seconds
    const listOfProducts=await page.$$('.hrefch')
    console.log("List of products",listOfProducts.length);
    expect(listOfProducts.length).toBe(9)
})

test('Add Product to cart Test', async()=>{
   
    // Add Product to cart
    await page.click('//a[normalize-space()="Samsung galaxy s6"]')
    await page.click('//a[normalize-space()="Add to cart"]')

    // handling alert dialog // optional as in playwright alert dialog is handled by default
    page.on('dialog', async dialog => {
        expect(dialog.message()).toBe('Product added.')
        await dialog.accept();
    })

    await page.click('#cartur')
    await page.waitForTimeout(2000); // 2 seconds
    await expect(await page.innerText('//tbody//tr//td[2]')).toBe('Samsung galaxy s6')

})