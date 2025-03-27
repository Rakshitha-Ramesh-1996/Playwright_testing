const{test,expect}=require('@playwright/test')

test.beforeAll(async()=>{
    console.log('This is before all test')
})
test.afterAll(async()=>{
    console.log('This is after all test')
})
test.beforeEach(async()=>{
    console.log('This is before each test')
})
test.afterEach(async()=>{
    console.log('This is after each test')
})

test.describe.skip('Group 1',()=>{
    test('Test1', async({page})=>{
        console.log("Ths is my first test")  
    })
    test('Test2', async({page})=>{
        console.log("Ths is my second test")  
    })
})

test.describe('Group 2',()=>{
    test('Test3', async({page})=>{
        console.log("Ths is my third test")
    })
    test('Test4', async({page})=>{
        console.log("Ths is my four test")
    })
})