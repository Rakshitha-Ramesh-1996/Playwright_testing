const{test,expect}=require('@playwright/test');
// import {test, expect} from '@playwright/test'
import { LoginPage } from './Pages/LoginPage';
import { HomePage }  from './Pages/HomePage';
import { CartPage } from './Pages/CartPage';

test('Login to add products to cart', async({page})=>{
    
    // Login
    const login=new LoginPage(page)
    await login.gotoLoginPage()
    await login.login('admin','admin')

    // Home Page
    const home = new HomePage(page)
    await home.addProductToCart('Nexus 6')
    await home.goToCart()

    // Add Product to cart
    const cart=new CartPage(page)
    const result=await cart.checkProductInCart("Nexus 6")
    expect(await result).toBe(true)
})