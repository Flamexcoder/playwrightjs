const { test, expect} = require('@playwright/test');

test.describe.configure({ mode: 'parallel' })


test("puja",async({page})=>{
  //Deatils to Fill In
const fname = "Vikrant";
const lname = "Singh";
const mail = "vikrant@innovanathinklabs.com";
const number = "7414076128";
const adrss = "D 41, SN Tower, Shanti Path, Rajapark";
const cty= "Jaipur"
const state = "Rajasthan"
const zipcode = "302004";
const selectOption1='India';
const selectOption2='Canada';
const selectOption3='United States';


const screenshotpath= `path:'tests/Automation/tests/upload files'+Date.now()+'screenshot.png'`

const randomclick = await page.locator("//div[@class='product-detail bg-white py-4']");

const pageurl= "https://otest.anytimeastro.com/pujastore/";

const familypuja = "https://otest.anytimeastro.com/pujastore/Category/family-puja/";

const homeicon = await page.locator("//a[@class='d-inline-block']")

const navdrpdown = await page.locator("//div[@class='d-flex align-items-center header-call-chat-btn w-50 justify-content-end']/button");

const epujabutton = await page.locator("(//div[@class='w-100']/div/div/div/a)[1]")

const categoryname = await page.locator("(//div[@class='h-100 d-flex justify-content-between flex-column'])[1]")

const pujaname= await page.locator("//p[@class='fw-bold mb-0 text-black']")

// addtocartbutton with index 
const addtocartbutton = await page.locator("(//div[@class='addcartbtn btn bg-darkyellow rounded-pill py-2 px-4 fw-bold mt-2 d-inline-block btnhovercls'])[1]")
const chooseoptionbutton = await page.locator("//div[@class='chooseoption btn bg-darkyellow rounded-pill py-2 px-4 fw-bold mt-2 d-inline-block btnhovercls']")
const laghupuja = await page.locator("//a[@class='btn border-red rounded-3 py-2 px-4 mt-3 me-3 bg-light-pink fw-bold']")
const mahapuja = await page.locator("//a[@class='btn border-red rounded-3 py-2 px-4 mt-3 me-3 ']")

//puja add to cart button 
const pujaaddtocartbutton = await page.locator("//a[@id='addcart']")
const bookpujabutton = await page.locator("//a[@id='bookNow']")

// breadcrumbs index wise 1= product ; 2= category ; 3= pujaname;
const homebutton = await page.locator("//img[@class='font-12']")
const productbreadcrumbs = await page.locator("(//span[@class='breadcrumbs'])[1]")
const categorybreadcrumbs = await page.locator("(//span[@class='breadcrumbs'])[2]")
const pujabreadcrumbs = await page.locator("(//span[@class='breadcrumbs'])[3]")


const checkoutbutton= await page.locator("//a[@class='btn bg-gold rounded-pill py-3 px-5 w-100 fw-bold my-2']")


// give index for multiple items in cart
const deleteitembutton = await page.locator("//a[@style='cursor: pointer;']")




//checkout page elements
const firstname= await page.locator("//input[@id='fname']")
const lastname= await page.locator("//input[@id='lname']")
const countrycode = await page.locator("//div[@class='iti__selected-country-primary']") //button
const CCsearch = await page.locator("//input[@placeholder='Search']") //search bar

// select the value from Dropdown by using the cc code
const country = await page.locator("//li[@data-dial-code='91']")
const phnnumber = await page.locator("//input[@id='phone']");
const email= await page.locator("//input[@id='Email']")

//shipping section
const shippingcheckbox = await page.locator("//input[@id='deliveryaddress']")
const countrydrpdown = await page.locator("//select[@id='CountrySelect']")
const shippingaddress= await page.locator("//input[@id='address']")
const city= await page.locator("//input[@id='city']")
const province= await page.locator("//input[@id='province']")
const postalcode= await page.locator("//input[@id='postalcode']")

const paynowbutton = await page.locator("//button[@id='paynow']")
 

await page.goto(pageurl)

await navdrpdown.click();

await epujabutton.click();

await categoryname.click();

/*
async function addtocart(addtocartbutton){
await addtocartbutton.click()
await checkoutbutton.click();
await laghupuja.click();
await pujaaddtocartbutton.click();
}
*/

if(addtocartbutton.isVisible ) {
    await addtocartbutton.click();
    await page.waitForTimeout(2000)

  //checkout page
    await checkoutbutton.click();
    await page.waitForEvent(page);
    await firstname.fill(fname);
    await lastname.fill(lname);
    await countrycode.click();
    await CCsearch.click();
    await CCsearch.fill("India");
    await country.click();
    await phnnumber.fill(number);
    await email.fill(mail);
  
  if (shippingcheckbox.isChecked){
      await countrydrpdown.selectOption(selectOption1);
      await shippingaddress.fill(adrss);
      await city.fill(cty);
      await province.fill(state);
      await postalcode.fill(zipcode);
  }
  else {
      await shippingcheckbox.check();
      await countrydrpdown.selectOption(selectOption1);
      await shippingaddress.fill(adrss);
      await city.fill(cty);
      await province.fill(state);
      await postalcode.fill(zipcode);
      await paynowbutton.click();
  }


}
 else  if (chooseoptionbutton.isVisible){
    await chooseoptionbutton.click();
    await page.waitForEvent(page);
    await laghupuja.click();
    await pujaaddtocartbutton.click();
    await randomclick.click();
    await mahapuja.click();
    await page.waitForEvent(page);
    await pujaaddtocartbutton.click();
  //checkoutpage
    await checkoutbutton.click();
    await page.waitForEvent(page);
    await firstname.fill(fname);
    await lastname.fill(lname);
    await countrycode.click();
    await CCsearch.click();
    await CCsearch.fill("india");
    await country.click();
    await phnnumber.fill(number);
    await email.fill(mail);
  
  if (shippingcheckbox.isChecked){
    await countrydrpdown.selectOption('India');
    await shippingaddress.fill(adrss);
    await city.fill(cty);
    await province.fill(state);
    await postalcode.fill(zipcode);
  }
  else {
    await shippingcheckbox.check();
    await countrydrpdown.selectOption('India');
    await shippingaddress.fill(adrss);
    await city.fill(cty);
    await province.fill(state);
    await postalcode.fill(zipcode);
    await paynowbutton.click();
  }
  



}
else {
   await homebutton.click()
   console.log("You are a fool, Go Home")
 
}



//  await page.screenshot({path: screenshotpath})




  await page.waitForTimeout(5000)
 
})


