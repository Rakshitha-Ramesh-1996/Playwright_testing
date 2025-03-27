const{test,expect}=require('@playwright/test')

// only is used to run only one test
/*
    test.only('Test1', async()=>{
        console.log("Ths is my first test")  
    })
    */
    // skip is used to skip the test
    /*test.skip('Test2', async()=>{
        console.log("Ths is my second test")  
    })
    // fixme is used to mark the test as fixme
    test.fixme('Test3', async()=>{
        console.log("Ths is my third test")
    })
    */
    // fail is used to mark the test as fail
    /*test.fail('Test4', async()=>{
        console.log("Ths is my four test")
        expect(1).toBe(0)
    }) */
    // slow is used to mark the test as slow
    test('Test5', async({page})=>{
        test.slow()
        console.log("Ths is my five test")
        await page.goto('https://www.google.com')
    })