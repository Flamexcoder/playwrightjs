

exports.pujatest= class pujatest {
	page=Page;
        constructor(page) {
            this.page= page;
        
        
    
//Deatils to Fill In
 this.fname = "Vikrant";
 this.lname = "Singh";
 this.mail = "vikrant@innovanathinklabs.com";
 this.number = "7414076128";
 this.adrss = "D 41, SN Tower, Shanti Path, Rajapark";
 this.cty= "Jaipur"
 this.state = "Rajasthan"
 this.zipcode = "302004";
 this.selectOption1='India';
 this.selectOption2='Canada';
 this.selectOption3='United States';
 this.upiid = "abc@ybl"
 this.crdnumber = "4242424242424242"
 this.crdexpiry = "1127"
 this.crdname= "Vikrant singh"
 this.crdcvv= "123"

 this.pageurl= "https://otest.anytimeastro.com/pujastore/";

 this.familypuja = "https://otest.anytimeastro.com/pujastore/Category/family-puja/";

 this.screenshotpath= `path:'tests/Automation/tests/upload files'+Date.now()+'screenshot.png'`

 this.randomclick =    page.locator("//div[@class='product-detail bg-white py-4']");

 this.homeicon =       page.locator("//a[@class='d-inline-block']")

 this.navdrpdown =     page.locator("//div[@class='d-flex align-items-center header-call-chat-btn w-50 justify-content-end']/button");

 this.epujabutton =    page.locator("(//div[@class='w-100']/div/div/div/a)[1]")

 this.categoryname =  page.locator("(//div[@class='h-100 d-flex justify-content-between flex-column'])[1]")

 this.pujaname=        page.locator("//p[@class='fw-bold mb-0 text-black']")

// addtocartbutton with index 
 this.addtocartbutton =  page.locator("(//div[@class='addcartbtn btn bg-darkyellow rounded-pill py-2 px-4 fw-bold mt-2 d-inline-block btnhovercls'])[1]")
 this.chooseoptionbutton =  page.locator("//div[@class='chooseoption btn bg-darkyellow rounded-pill py-2 px-4 fw-bold mt-2 d-inline-block btnhovercls']")
 this.laghupuja =  page.locator("//a[@class='btn border-red rounded-3 py-2 px-4 mt-3 me-3 bg-light-pink fw-bold']")
 this.mahapuja =  page.locator("//a[@class='btn border-red rounded-3 py-2 px-4 mt-3 me-3 ']")

//puja add to cart button 
 this.pujaaddtocartbutton =  page.locator("//a[@id='addcart']")
 this.bookpujabutton =  page.locator("//a[@id='bookNow']")

// breadcrumbs index wise 1= product ; 2= category ; 3= pujaname;
 this.homebutton =  page.locator("//img[@class='font-12']")
 this.productbreadcrumbs =  page.locator("(//span[@class='breadcrumbs'])[1]")
 this.categorybreadcrumbs =  page.locator("(//span[@class='breadcrumbs'])[2]")
 this.pujabreadcrumbs =  page.locator("(//span[@class='breadcrumbs'])[3]")


 this.checkoutbutton=  page.locator("//a[@class='btn bg-gold rounded-pill py-3 px-5 w-100 fw-bold my-2']")


// give index for multiple items in cart
 this.deleteitembutton =  page.locator("//a[@style='cursor: pointer;']")
 this.cartclosebutton =  page.locator("//button[@data-bs-dismiss='offcanvas']")




//checkout page elements
 this.firstname=  page.locator("//input[@id='fname']")
 this.lastname=  page.locator("//input[@id='lname']")
 this.countrycode =  page.locator("//div[@class='iti__selected-country-primary']") //button
 this.CCsearch =  page.locator("//input[@placeholder='Search']") //search bar

// select the value from Dropdown by using the cc code

 this.phnnumber =  page.locator("//input[@id='phone']");
 this.email=  page.locator("//input[@id='Email']")

//shipping section
 this.shippingcheckbox =  page.locator("//input[@id='deliveryaddress']")
 this.countrydrpdown =  page.locator("//select[@id='CountrySelect']")
 this.shippingaddress=  page.locator("//input[@id='address']")
 this.city=  page.locator("//input[@id='city']")
 this.province=  page.locator("//input[@id='province']")
 this.postalcode=  page.locator("//input[@id='postalcode']")

 this.paynowbutton =  page.locator("//button[@id='paynow']")

 this.countryname =  page.locator("//span[@class='iti__country-name']")


/*//IFRAME Loctors 

 this.frame1=  page.frameLocator('(//iframe[@class="razorpay-checkout-frame"])[2]')
 this.upibutton =  page.frame1.locator("//button[@method='upi']")
 this.upiradiobutton =  page.frame1.locator("//label[@for='id_OEG1tm3BhW74rh']")
 this.upienter =  page.frame1.locator("//input[@id='vpa-upi']")
 this.cardbutton =  page.frame1.locator("//button[@method='card']")
 this.cardnumber =  page.frame1.locator("//input[@id='card_number'] ")
 this.cardexpiry =  page.frame1.locator("//input[@id='card_expiry'] ")
 this.cardname =  page.frame1.locator("//input[@id='card_name'] ")
 this.cardcvv =  page.frame1.locator("//input[@id='card_cvv'] ")
 this.netbankingbutton =  page.frame1.locator("//button[@method='netbanking']")
 this.emibutton =  page.frame1.locator("//button[@method='emi']")
 this.razorpaybutton =  page.frame1.locator("//button[@id='redesign-v15-cta']") 
 this.razorpaycartprice =  page.frame1.locator("//span[@class='price-label svelte-1milfy7']")
 this.viewaccount =  page.frame1.locator("//button[@id='cta-view-details']")*/


// Success page elements 

 this.successprice =  page.locator("//h1[@class='success-color fw-bold font-24']")
 this.orderid =  page.locator("//div[@class='thanku-inner-left text-center p-3']/p")
 this.customername =  page.locator("//span[@class='font-14']/b")
 this.customeraddress =  page.locator("(//ul[@class='p-0 m-0']/li//p)[1]")
 this.customerphone =  page.locator("(//ul[@class='p-0 m-0']/li//p/b)[1]")
 this.customerphonenumber =  page.locator("(//ul[@class='p-0 m-0']/li//p/span)[1]")
 this.customeremail =  page.locator("(//ul[@class='p-0 m-0']/li//p)[2]")
 this.customeremailid =  page.locator("(//ul[@class='p-0 m-0']/li//p/span)[2]")
        
        }   
  async navigation (){
  await this.page.goto(this.pageurl)
};
async opencategory  (){
await   this.navdrpdown.click()

await   this.epujabutton.click();

await this.categoryname.click();
};

 async pujaselection (){

if(  this.addtocartbutton.isVisible() ) {
    await   this.addtocartbutton.click();
    await   this.page.waitForTimeout(2000)

  //checkout page
  if (  this.checkoutbutton.isVisible()){
    await   this.chooseoptionbutton.click();
    // await page.waitForEvent(page);
    await   this.laghupuja.click();
    await  this.pujaaddtocartbutton.click();
    await   this.cartclosebutton.click();
    await   this.mahapuja.click();
    // await page.waitForEvent(page);
    await   this.pujaaddtocartbuttons.click();
  }}}
   async checkoutpage () {
    //checkoutpage
    await   this.checkoutbutton.click();
    // await page.waitForEvent(page);
    await   this.firstname.fill(this.fname);
    await   this.lastname.fill(this.lname);
    await   this.countrycode.click();
    await   this.CCsearch.click();
    
    await this.pageCCsearch.type("india");
    await   this.page.waitForTimeout(2000)
    

     this.countrysearch = await this.countryname.allInnerTexts()
     this.searchitems =this.countrysearch[1]
     console.log(this.searchitems)

    // const country = await page.getByText('India');
      this.country = this.page.locator("//li[@data-dial-code='91']")

    await   this.country.click()
    await   this.phnnumber.fill(this.number);
    await   this.email.fill(this.mail);
  
  if (!this.shippingcheckbox.isChecked()){
    await   this.shippingcheckbox.check();
    await   this.countrydrpdown.selectOption('India');
    await   this.shippingaddress.fill(this.adrss);
    await   this.city.fill(this.cty);
    await   this.province.fill(this.state);
    await   this.postalcode.fill(this.zipcode);
  }
  else {
    await   this.shippingcheckbox.check();
    await   this.countrydrpdown.selectOption('India');
    await   this.shippingaddress.fill(this.adrss);
    await   this.city.fill(this.cty);
    await   this.province.fill(this.state);
    await   this.postalcode.fill(this.zipcode);


  
 
}

}


//  async iframeactions  (){
// await   this.cardbutton.click()
// await   this.cardnumber.type(this.crdnumber)
// await   this.cardname.type( this.crdname)
// await   this.cardexpiry.type(this.crdexpiry)
// await   this.cardcvv.type(this.crdcvv)
// await   this.razorpaybutton.click()

// // await razorpaybutton.click()


// //  await page.screenshot({path: screenshotpath})




//   await   this.page.waitForTimeout(5000)
   
// }
}





























