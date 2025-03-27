const{test,expect}=require('@playwright/test')

    test('Test1@sanity', async()=>{
        console.log("Ths is my first test")  
    })
    test('Test2@sanity', async()=>{
        console.log("Ths is my second test")  
    })
    test('Test3@reg', async()=>{
        console.log("Ths is my third test")
    })
    test('Test4@reg', async()=>{
        console.log("Ths is my four test")
    })
    test('Test5@sanity@reg', async()=>{
        console.log("Ths is my five test")
    })

    // to excute tag testcases
    // npx playwright test tests/Tags.spec.js --project chromium --headed --grep @sanity
    // to excute only sanity testcases
    // npx playwright test tests/Tags.spec.js --project chromium --headed --grep @sanity --grep-invert @reg