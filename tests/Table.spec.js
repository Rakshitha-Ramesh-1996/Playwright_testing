const{test,expect}=require('@playwright/test')

test('Table test', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    
    const table = await page.locator('#productTable')

    // total num of rows and columns
    const rows = await table.locator('//tbody//tr');
    const columns = await table.locator('//thead//tr//th');
    console.log('Total rows: ', await rows.count());
    console.log('Total columns: ', await columns.count());

   // select checkbox for product 4
//    const machedRow=rows.filter({
//     has: await page.locator('td'),
//     hasText: 'Smartwatch'
//    })
//    machedRow.locator('input[type="checkbox"]').check();

// select multiple checkboxes by reusable function
    // await selectProduct(rows,page,'Smartwatch');
    // await selectProduct(rows,page,'Laptop');
    // await selectProduct(rows,page,'Wireless Earbuds');

    // print all product deatils using loop
    // for(let i=0;i<=await rows.count();i++){
    //    const row= rows.nth(i).locator('td');
    //     for(let j=0;j<await row.count()-1;j++){
    //         console.log(await row.nth(j).textContent());
    //     }
        
    // }

    // read data from all the pages in the table
    const pages=await page.locator('.pagination li a')
    console.log("Number of pages: ",await pages.count());
    for(let p=0;p< await pages.count();p++){
        if(p>0){
            await pages.nth(p).click();
            await page.waitForTimeout(2000);
        }
        for(let i=0;i<=await rows.count();i++){
            const row= rows.nth(i).locator('td');
             for(let j=0;j<await row.count()-1;j++){
                 console.log(await row.nth(j).textContent());
             }
             
         }
    }
    

    await page.waitForTimeout(5000); // 5 seconds
})

async function selectProduct(rows,page,name)
{
    const machedRow=rows.filter({
        has: page.locator('td'),
        hasText: name
       })
       await machedRow.locator('input[type="checkbox"]').check();
}