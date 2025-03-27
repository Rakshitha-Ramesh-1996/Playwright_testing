exports.LoginPage = 
class LoginPage {

    constructor(page) {
        this.page = page;
        this.loginLink="#login2"
        this.usernameField="#loginusername"
        this.passwordField="#loginpassword"
        this.loginButton='//button[normalize-space()="Log in"]'
    }
    async gotoLoginPage() {
        await this.page.goto('https://www.demoblaze.com/index.html')
    }
    async login(username, password) {
        await this.page.click(this.loginLink)
        await this.page.fill(this.usernameField, username)
        await this.page.fill(this.passwordField, password)
        await this.page.click(this.loginButton)
        await this.page.waitForTimeout(2000);
    } 
}