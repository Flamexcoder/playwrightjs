const {test,expect} = require('@playwright/test')

test('puja',async({page})=>{

await page.setViewportSize({width:550,height:915})
   
//Deatils to Fill In
const fname           = "Vikrant";
const lname           = "Singh";
const mail            = "vikrant@innovanathinklabs.com";
const number          = "7414076128";
const adrss           = "D 41, SN Tower, Shanti Path, Rajapark";
const cty             = "Jaipur"
const state           = "Rajasthan"
const zipcode         = "302004";
const selectOption1   = 'India';
const selectOption2   = 'Canada';
const selectOption3   = 'United States';
const upiid           = "abc@ybl"
const crdnumber       = "4242424242424242"
const crdexpiry       = "1127"
const crdname         = "Vikrant singh"
const crdcvv          = "123"

const pageurl         = "https://otest.anytimeastro.com/puja/";
const familypuja      = "https://otest.anytimeastro.com/puja/Category/family-puja/";
const screenshotpath  = `path:'tests/Automation/tests/upload files'+Date.now()+'screenshot.png'`
const randomclick     =  page.locator("//div[@class='product-detail bg-white py-4']");
const homeicon        =  page.locator("//a[@class='d-inline-block']")
const navdrpdown      =  page.locator("//div[@class='d-flex align-items-center header-call-chat-btn w-50 justify-content-end']/button");
const epujabutton     =  page.locator("(//div[@class='w-100']/div/div/div/a)[1]")
const categoryname    =  page.locator("(//div[@class='h-100 d-flex justify-content-between flex-column'])[1]")
const pujaname        =  page.locator("//p[@class='fw-bold mb-0 text-black']")

// addtocartbutton with index 
const addtocartbutton    =  page.locator("(//div[@class='addcartbtn btn bg-darkyellow rounded-pill py-2 px-4 fw-bold mt-2 d-inline-block btnhovercls'])[1]")
const chooseoptionbutton =  page.locator("//div[@class='chooseoption btn bg-darkyellow rounded-pill py-2 px-4 fw-bold mt-2 d-inline-block btnhovercls']")
const laghupuja          =  page.locator("//a[@class='btn border-red rounded-3 py-2 px-4 mt-3 me-3 bg-light-pink fw-bold']")
const mahapuja           =  page.locator("//a[@class='btn border-red rounded-3 py-2 px-4 mt-3 me-3 ']")

//puja add to cart button 
const pujaaddtocartbutton =  page.locator("//a[@id='addcart']")
const bookpujabutton      =  page.locator("//a[@id='bookNow']")

// breadcrumbs index wise 1= product ; 2= category ; 3= pujaname;
const homebutton          =  page.locator("//img[@class='font-12']")
const productbreadcrumbs  =  page.locator("(//span[@class='breadcrumbs'])[1]")
const categorybreadcrumbs =  page.locator("(//span[@class='breadcrumbs'])[2]")
const pujabreadcrumbs     =  page.locator("(//span[@class='breadcrumbs'])[3]")
const checkoutbutton      =  page.locator("//a[@class='btn bg-gold rounded-pill py-3 px-5 w-100 fw-bold my-2']")


// give index for multiple items in cart
const deleteitembutton =  page.locator("//a[@style='cursor: pointer;']")
const cartclosebutton  =  page.locator("//button[@data-bs-dismiss='offcanvas']")


//checkout page elements
const firstname   =  page.locator("//input[@id='fname']")
const lastname    =  page.locator("//input[@id='lname']")
const countrycode =  page.locator("//div[@class='iti__selected-country-primary']") //button
const CCsearch    =  page.locator("//input[@placeholder='Search']") //search bar

// select the value from Dropdown by using the cc code

const phnnumber =  page.locator("//input[@id='phone']");
const email     =  page.locator("//input[@id='Email']")

//shipping section
const shippingcheckbox  =  page.locator("//input[@id='deliveryaddress']")
const countrydrpdown    =  page.locator("//select[@id='CountrySelect']")
const shippingaddress   =  page.locator("//input[@id='address']")
const city              =  page.locator("//input[@id='city']")
const province          =  page.locator("//input[@id='province']")
const postalcode        =  page.locator("//input[@id='postalcode']")
const paynowbutton      =  page.locator("//button[@id='paynow']")
const countryname       =  page.locator("//span[@class='iti__country-name']")


//IFRAME Loctors 

const frame1            =      page.frameLocator('(//iframe[@class="razorpay-checkout-frame"])[2]')
const upibutton         =      page.frame1.locator("//button[@method='upi']")
const upiradiobutton    =      page.frame1.locator("//label[@for='id_OEG1tm3BhW74rh']")
const upienter          =      page.frame1.locator("//input[@id='vpa-upi']")
const cardbutton        =      page.frame1.locator("//button[@method='card']")
const cardnumber        =      page.frame1.locator("//input[@id='card_number'] ")
const cardexpiry        =      page.frame1.locator("//input[@id='card_expiry'] ")
const cardname          =      page.frame1.locator("//input[@id='card_name'] ")
const cardcvv           =      page.frame1.locator("//input[@id='card_cvv'] ")
const netbankingbutton  =      page.frame1.locator("//button[@method='netbanking']")
const emibutton         =      page.frame1.locator("//button[@method='emi']")
const razorpaybutton    =      page.frame1.locator("//button[@id='redesign-v15-cta']") 
const razorpaycartprice =      page.frame1.locator("//span[@class='price-label svelte-1milfy7']")
const viewaccount       =      page.frame1.locator("//button[@id='cta-view-details']")


// Success page elements 

const successprice         =    page.locator("//h1[@class='success-color fw-bold font-24']")
const orderid              =    page.locator("//div[@class='thanku-inner-left text-center p-3']/p")
const customername         =    page.locator("//span[@class='font-14']/b")
const customeraddress      =    page.locator("(//ul[@class='p-0 m-0']/li//p)[1]")
const customerphone        =    page.locator("(//ul[@class='p-0 m-0']/li//p/b)[1]")
const customerphonenumber  =    page.locator("(//ul[@class='p-0 m-0']/li//p/span)[1]")
const customeremail        =    page.locator("(//ul[@class='p-0 m-0']/li//p)[2]")
const customeremailid      =    page.locator("(//ul[@class='p-0 m-0']/li//p/span)[2]")
  

await page.goto(pageurl)
await page.waitForTimeout(2000)



})




