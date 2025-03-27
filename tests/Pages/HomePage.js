exports.HomePage = class HomePage{

    constructor(page){
        this.page = page
        this.listOfProducts='//*[@id="tbodyid"]/div/div/div/h4/a'
        this.addToCart='//a[normalize-space()="Add to cart"]'
        this.cart='#cartur'
    }

    async addProductToCart(productName){
        const ProductsList=await this.page.$$(this.listOfProducts)
        for(const product of ProductsList){
            const name=await product.innerText()
            if(name===productName){
                await product.click()
                break
            }
        }
        await this.page.click(this.addToCart)

        // handling alert dialog // optional as in playwright alert dialog is handled by default
           await this.page.on('dialog', async dialog => {
               expect(dialog.message()).toBe('Product added.')
               await dialog.accept();
           })
    }

    async goToCart(){
        await this.page.click(this.cart)
        await this.page.waitForTimeout(2000); // 2 seconds
    }
}