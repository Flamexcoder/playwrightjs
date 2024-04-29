exports.PricePage = 
class PricePage {
    constructor({page}) {
        this.page = page;
        this.paybutton = '//a[@tkey="Text13"]'

    }

    async gotoCheckoutPage(){
        await this.page.goto("https://www.winriser.com/purchase/win-riser/plan/?nd=1&testmode=1")
    }

    async Addtocartbutton(){
        await this.page.locator(this.paybutton).click()
    }
}