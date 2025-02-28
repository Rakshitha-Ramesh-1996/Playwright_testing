import { test, expect } from '@playwright/test';

test('Locating multiple elements',async ({page})=>{

    await page.goto('https://www.demoblaze.com/')
    // const links=await page.$$('a') // to get all links
    // for(const link of links){
    //     const linkText=await link.textContent()
    //     console.log(linkText)
    // }
    await page.waitForSelector('//div[@id="tbodyid"]//h4/a')
   const products=await page.$$('//div[@id="tbodyid"]//h4/a') // to get all product names
   for(const product of products){
    const productname= await product.textContent()
    console.log(productname)
   }
   
      

    await page.close()
})