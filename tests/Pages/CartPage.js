exports.CartPage =
class CartPage{

    constructor(page){
        this.page = page
        this.listOfProducts='//*[@id="tbodyid"]/tr/td[2]'
    }

    async checkProductInCart(productName){
        const ProductsList=await this.page.$$(this.listOfProducts)
        for(const product of ProductsList){
            const name=await product.innerText()
            console.log(name)
            if(name===productName){
                return true
            }
        }
        return false
    }
    
}