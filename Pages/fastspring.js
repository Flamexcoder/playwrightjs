exports.fastspring= class fastspring {

//ELements are present here
constructor(page){
   
  this.page=page;

  this.basewinriser    = "https://www.winriser.com/inw/install/win-riser/?"
  this.baseadg         = "https://shop.bit-guardian.com/ad-guardian-plus/plan/?"
  this.basebgf         = "https://www.bitguardianfirewall.com/purchase/bit-guardian-firewall/plan/?"
  this.basebitdu       = "https://store.bitdriverupdater.com/btdu/cplan/?"
  this.basebsam        = "https://www.bitsecurityservices.com/purchase/bit-safe-antimalware/plan/?"
  this.baseqdu         = "https://www.quickdriverupdater.com/purchase/quick-driver-updater/cplan/?"
  this.baseqpf         = "https://www.quickphotofinder.com/purchase/quick-photo-finder/plan/?"
  this.basewinguardian = "https://www.win-guardian.com/purchase/win-guardian/plan/?"
  this.basebgb         = "https://www.bitgamebooster.com/purchase/bit-game-booster/plan/?"
  this.param           = "&testmode=1"


  this.adgurl          = this.baseadg+this.param 
  this.bgburl          = this.basebgb+this.param
  this.bgfurl          = this.basebgf+this.param
  this.bitduurl        = this.basebitdu+this.param
  this.bsamurl         = this.basebsam+this.param
  this.qduurl          = this.baseqdu+this.param
  this.qpfurl          = this.baseqpf+this.param
  this.winguardianurl  = this.basewinguardian+this.param
  this.winriserurl     = this.basewinriser+this.param


  this.Email       = "vikrant@tafmail.com"
  this.firstname   = "Vikrant"
  this.lastname    = "Singh"
  this.cardnumber  = "4242424242424242"
  this.bitcvv      = "*RABE"
  this.dpsrocvv    = "*8PT7"
  this.mnt         = "11"
  this.yer         = "25"
  this.phonenumber = "65478965478"
  this.postcode    = "302004"
  this.expiry      = "11/25" 
  this.cvcbgf      = "123"
  this.fullname    = this.firstname+this.lastname





   this.buynow= page.getByRole('link', { name: 'Buy Now' })
 
   this.upgrade =page.getByRole('link', { name: 'Upgrade to PRO' })
 
   console.log("");
               
   this.addtocart =page.getByRole('link', { name: 'Add To Cart' })
 
   console.log("")
   
   
   // IFRAME LOCATORS  
   this.checkout   = page.frameLocator('iframe[name="fsc-popup-frame"]').getByRole('button', { name: 'Continue Checkout' })
   this.email      = page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Email')
   this.fname      = page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('First Name')
   this.lname      = page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Last Name')
   this.card       = page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Card Number')
   this.month      = page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('MM')
   this.year       = page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('YY')
   this.cvc        = page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('CVC')
   this.phone      = page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Phone Number')
   this.paybutton  = page.frameLocator('iframe[name="fsc-popup-frame"]').locator("//button[@class='btn pay-button ng-binding ng-scope']")
   

   //IFRAME LOCATOR FOR BGF
   this.emailbgf        =page.frameLocator('iframe[name="paddle_frame"]').getByTestId('authenticationEmailInput');
   this.postcodebgf     =page.frameLocator('iframe[name="paddle_frame"]').getByTestId('postcodeInput');
   this.submitbuttonbgf =page.frameLocator('iframe[name="paddle_frame"]').getByTestId('combinedAuthenticationLocationFormSubmitButton');
   this.cardbgf         =page.frameLocator('iframe[name="paddle_frame"]').getByTestId('cardNumberInput');
   this.cardnamebgf     =page.frameLocator('iframe[name="paddle_frame"]').getByTestId('cardholderNameInput');
   this.expirybgf       =page.frameLocator('iframe[name="paddle_frame"]').getByTestId('expiryDateField');
   this.cvvbgf          =page.frameLocator('iframe[name="paddle_frame"]').getByTestId('cardVerificationValueInput');
   this.paybuttonbgf    =page.frameLocator('iframe[name="paddle_frame"]').locator("//button[@data-testid='cardPaymentFormSubmitButton']");
   console.log("")
   this.screenshot      =page.screenshot({path:'tests/Automation/tests/fastspring/upload files'+Date.now()+'screenshot.png'})
   this.CheckBox        = page.locator("//input[@id='compliance-checkbox']");
  
   this.page.waitForURL();
   console.log("")    
}
// Methods to call

async buynowbutton(){
        await this.buynow.click()
}
async upgradebutton(){
        await this.upgrade.click()
}
async addtocartbutton(){     
        await this.addtocart.click()  
}
async checkoutbutton(){
        await this.checkout.click()
}
async takescreenshot(){
        await this.screenshot
}

// BGF IFRAME FILL IN DETAILS

async paymentdeatilsbgf(){
  await this.emailbgf.fill(this.Email) 

  await this.postcodebgf.fill(this.postcode)
          
  await this.submitbuttonbgf.click()
          
  await this.cardbgf.fill(this.cardnumber)
          
  await  this.cardnamebgf.fill(this.fullname)
          
  await this.expirybgf.fill(this.expiry) 
          
  await this.cvvbgf.fill(this.cvcbgf)
          
  await this.paybuttonbgf.click()

}
// all other prodcuts IFRAME FILL IN DETAILS
async bitfilldetails(){
   await this.email.fill(this.Email)      
  
   await this.fname.fill(this.firstname)
           
   await this.lname.fill(this.lastname)
           
   await this.card.fill(this.cardnumber)
           
   await  this.month.fill(this.mnt)
           
   await this.year.fill(this.yer) 
           
   await this.cvc.fill(this.bitcvv)
           
   await this.phone.fill(this.phonenumber)

}
async dpsrofilldetails (){
   await this.email.fill(this.Email)      
    
   await this.fname.fill(this.firstname)
           
   await this.lname.fill(this.lastname)
           
   await this.card.fill(this.cardnumber)
           
   await this.month.fill(this.mnt)
           
   await this.year.fill(this.yer) 
           
   await this.cvc.fill(this.dpsrocvv)
           
   await this.phone.fill(this.phonenumber)

} 
async checkbx(){
    // condition for if the check box is present 
    if (this.CheckBox.isVisible()) {
      this.CheckBox.check();
      console.log("")
    } else  {
      console.log("")
    }
    
    await this.paybutton.click();
}
async successpage (){
    this.page.waitForURL()
    this.takescreenshot()
}
async winriser(){ 
   await this.page.goto(this.winriserurl)
   this.buynowbutton()
   this.upgradebutton()
   this.addtocartbutton()
   this.checkoutbutton()
   this.takescreenshot()
   this.bitfilldetails()
   this.checkbx()
   this.successpage()
}
async bitdu(){ 
    await this.page.goto(this.bitduurl)
   this.buynowbutton()
   this.upgradebutton()
   this.addtocartbutton()
   this.checkoutbutton()
   this.takescreenshot()
   this.bitfilldetails()
   this.checkbx()
   this.successpage()
}
async bgb(){ 
   await this.page.goto(this.bgburl)
   this.buynowbutton()
   this.upgradebutton()
   this.addtocartbutton()
   this.checkoutbutton()
   this.takescreenshot()
   this.bitfilldetails()
   this.checkbx()
   this.successpage()
}
async bsam(){ 
   await this.page.goto(this.bsamurl)
   this.buynowbutton()
   this.upgradebutton()
   this.addtocartbutton()
   this.checkoutbutton()
   this.takescreenshot()
   this.bitfilldetails()
   this.checkbx()
   this.successpage()
}
async qdu(){ 
   await this.page.goto(this.qduurl)
   this.buynowbutton()
   this.upgradebutton()
   this.addtocartbutton()
   this.checkoutbutton()
   this.takescreenshot()
   this.dpsrofilldetails()
   this.checkbx()
   this.successpage()
}
async qpf(){ 
   await this.page.goto(this.qpfurl)
   this.buynowbutton()
   this.upgradebutton()
   this.addtocartbutton()
   this.checkoutbutton()
   this.takescreenshot()
   this.dpsrofilldetails()
   this.checkbx()
   this.successpage()
}
async adg(){ 
   await this.page.goto(this.adgurl)
   this.buynowbutton()
   this.upgradebutton()
   this.addtocartbutton()
   this.checkoutbutton()
   this.takescreenshot()
   this.bitfilldetails()
   this.checkbx()
   this.successpage()
}
async bgf(){ 
   await this.page.goto(this.bgfurl)
   this.buynowbutton()
   this.upgradebutton()
   this.addtocartbutton()
   this.checkoutbutton()
   this.takescreenshot()
   this.paymentdeatilsbgf()
   this.checkbx()
   this.successpage()
}
async winguardian(){ 
   await this.page.goto(this.winguardianurl)
   this.buynowbutton()
   this.upgradebutton()
   this.addtocartbutton()
   this.checkoutbutton()
   this.takescreenshot()
   this.bitfilldetails()
   this.checkbx()
   this.successpage()
}
} 
