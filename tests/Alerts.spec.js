const{test,expect}=require('@playwright/test')

test.skip('Alerts with ok test', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

   
    // Enabling alert handling
    await page.on('dialog', async dialog => { 
        await expect (dialog.type()).toContain('alert');
        await expect (dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    });
    await page.click('#alertBtn')
   
    await page.waitForTimeout(5000); // 5 seconds
})

test.skip('Confrimation alert test', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

   
    // Enabling alert handling
    await page.on('dialog', async dialog => { 
        await expect (dialog.type()).toContain('confirm');
        await expect (dialog.message()).toContain('Press a button!');
        await dialog.accept();
        // await dialog.dismiss(); // To dismiss the alert
    });
    await page.click('#confirmBtn')

    const display=await page.locator('#demo').textContent();
    console.log(display);
    await expect(display).toContain('You pressed OK!');
   
    await page.waitForTimeout(5000); // 5 seconds
})

test('Prompt alert test', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

   
    // Enabling alert handling
    await page.on('dialog', async dialog => { 
        await expect (dialog.type()).toContain('prompt');
        await expect (dialog.message()).toContain('Please enter your name:');
        await expect (dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('Raksha');
        // await dialog.dismiss(); // To dismiss the alert
    });
    await page.click('#promptBtn')

    const display=await page.locator('#demo').textContent();
    console.log(display);
    await expect(display).toContain('Hello Raksha! How are you today?');
   
    await page.waitForTimeout(5000); // 5 seconds
})