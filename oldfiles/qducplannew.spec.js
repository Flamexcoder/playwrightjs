/*const {test, expect} = require('@playwright/test');

test.describe.configure({mode:'parallel'})
test('QDU price page 1pc',async ({page})=>{

    const baseurl = "https://www.quickdriverupdater.com/purchase/quick-driver-updater/cplannew/?"
    const params = "&testmode=1"
    const pageurl = baseurl+params

    //Details to fill 
    const mail = 'vikrant@tafmail.com'
    const firstname = 'Vikrant'
    const lastname = 'Singh'
    const card = '4242424242424242'
    const month = '11'
    const year = '25'
    const pin = '*8PT7'
    
    // radio buttons
    const radio1pc = await page.locator("//input[@pronm='p1']");
    const radio5pc = await page.locator("//input[@pronm='p2']");
    const radio10pc = await page.locator("//input[@pronm='p3']");
   
    
    //sale price 
    const s1pc = await page.locator("//span[@id='lblSaleMain1']");
    const s5pc = await page.locator("//span[@id='lblSaleMain5']");
    const s10pc = await page.locator("//span[@id='lblSaleMain10']");

    //actual  price 
    const m1pc = await page.locator("//span[@id='lblActualMain1']");
    const m5pc = await page.locator("//span[@id='lblActualMain5']");
    const m10pc = await page.locator("//span[@id='lblActualMain10']");
    
    // cross actual  price 
    const mcrs1 = await page.locator("//span[@id='lblActualCross1']");
    const mcrs2 = await page.locator("//span[@id='lblActualCross2']");
    //cross sale  price 
    const scrs1 = await page.locator("//span[@id='lblSaleCross2']");
    const scrs2 = await page.locator("//span[@id='lblSaleCross2']");

    //cart values 
    const payvalue = await page.locator("//span[@id='totalPayble']"); 
    const totalvalue = await page.locator("//span[@id='totalValue']"); 

    // IFRAME locators 
    const frame1 = await page.frameLocator('iframe[name="fsc-popup-frame"]')
    const email = await frame1.getByPlaceholder('Email')
    const fname = await frame1.getByPlaceholder('First Name')
    const lname = await frame1.getByPlaceholder('Last Name')
    const crd = await frame1.getByPlaceholder('Card Number')
    const mnth = await frame1.getByPlaceholder('MM')
    const yer = await frame1.getByPlaceholder('YY')
    const cvv = await frame1.getByPlaceholder('CVC')
    const paybutton = await frame1.locator("//button[@class='btn pay-button ng-binding ng-scope']")
   
    await page.goto(pageurl)
    
    await radio1pc.click()
    await page.waitForTimeout(3000)
    
    const pc1m = await m1pc.allTextContents();
    
    const pc1s = await s1pc.allTextContents();
    
   
    const cross1 = await mcrs1.allTextContents();
    const cross2 = await mcrs2.allTextContents();

    const pvalue = await payvalue.allTextContents();
    const tvalue = await totalvalue.allTextContents();  
    //const paid= await paybutton.allTextContents();

    
    await page.waitForTimeout(2000)
    
   console.log("Actual price 1pc :"+pc1m+" Sale price 1pc :"+pc1s+" Cross1 price :"+cross1+" Cross2 price :"+cross2+" Pay price :"+pvalue+"Total price :"+tvalue)
 

   
  await page.waitForTimeout(2000)

  await email.fill(mail)
    
  await fname.fill(firstname)
   
  await lname.fill(lastname)
    
  await crd.fill(card)
    
  await mnth.fill(month)
   
  await yer.fill(year)
    
  await cvv.fill(pin)
  await page.waitForTimeout(5000)
    
  await paybutton.click()

 

   
// await page.waitForNavigation(waituntill : 'load')
  const success=await page.url()
  console.log(success)

  await page.waitForTimeout(5000)
  await page.screenshot({path:'tests/Automation/tests/upload files'+Date.now()+'screenshot.png'})

 
 

   });



test('QDU price page 5pc',async ({page})=>{

    const baseurl = "https://www.quickdriverupdater.com/purchase/quick-driver-updater/cplannew/?"
    const params = "&testmode=1"
    const pageurl = baseurl+params

    //Details to fill 
    const mail = 'vikrant@tafmail.com'
    const firstname = 'Vikrant'
    const lastname = 'Singh'
    const card = '4242424242424242'
    const month = '11'
    const year = '25'
    const pin = '*8PT7'
    
    // radio buttons
    
    const radio5pc = await page.locator("//input[@pronm='p2']");
   
   
    
    //sale price 
   
    const s5pc = await page.locator("//span[@id='lblSaleMain5']");
   

    //actual  price 
   
    const m5pc = await page.locator("//span[@id='lblActualMain5']");
   
    
    // cross actual  price 
    const mcrs1 = await page.locator("//span[@id='lblActualCross1']");
    const mcrs2 = await page.locator("//span[@id='lblActualCross2']");
    //cross sale  price 
    const scrs1 = await page.locator("//span[@id='lblSaleCross2']");
    const scrs2 = await page.locator("//span[@id='lblSaleCross2']");

    //cart values 
    const payvalue = await page.locator("//span[@id='totalPayble']"); 
    const totalvalue = await page.locator("//span[@id='totalValue']"); 

    // IFRAME locators 
    const frame1 = await page.frameLocator('iframe[name="fsc-popup-frame"]')
    const email = await frame1.getByPlaceholder('Email')
    const fname = await frame1.getByPlaceholder('First Name')
    const lname = await frame1.getByPlaceholder('Last Name')
    const crd = await frame1.getByPlaceholder('Card Number')
    const mnth = await frame1.getByPlaceholder('MM')
    const yer = await frame1.getByPlaceholder('YY')
    const cvv = await frame1.getByPlaceholder('CVC')
    const paybutton = await frame1.locator("//button[@class='btn pay-button ng-binding ng-scope']")


    await page.goto(pageurl)
    
    await radio5pc.click()
    await page.waitForTimeout(5000)
    
    const pc5m = await m5pc.allTextContents();
    const pc5s = await s5pc.allTextContents();
     
    const cross1 = await mcrs1.allTextContents();
    const cross2 = await mcrs2.allTextContents();

    const pvalue = await payvalue.allTextContents();
    const tvalue = await totalvalue.allTextContents();  
    // const paid= await paybutton.allTextContents();
       

  console.log("Actual price 5pc :"+pc5m+" Sale price 5pc :"+pc5s+" Cross1 price :"+cross1+" Cross2 price :"+cross2+" Pay price :"+pvalue+" Total price :"+tvalue)


   
  await page.waitForTimeout(2000)
  await email.fill(mail)
    
  await fname.fill(firstname)
   
  await lname.fill(lastname)
    
  await crd.fill(card)
    
  await mnth.fill(month)
   
  await yer.fill(year)
    
  await cvv.fill(pin)
  await page.waitForTimeout(5000)
    
  await paybutton.click()

  

   
// await page.waitForNavigation(waituntill : 'load')
  const success=await page.url()
  console.log(success)

  await page.waitForTimeout(5000)
  await page.screenshot({path:'tests/Automation/tests/upload files'+Date.now()+'screenshot.png'})
   
  });


test('QDU price page 10pc',async ({page})=>{

    const baseurl = "https://www.quickdriverupdater.com/purchase/quick-driver-updater/cplannew/?"
    const params = "&testmode=1"
    const pageurl = baseurl+params

    //Details to fill 
    const mail = 'vikrant@tafmail.com'
    const firstname = 'Vikrant'
    const lastname = 'Singh'
    const card = '4242424242424242'
    const month = '11'
    const year = '25'
    const pin = '*8PT7'
    
    // radio buttons
    const radio10pc = await page.locator("//input[@pronm='p3']");
   
    
    //sale price 
    const s10pc = await page.locator("//span[@id='lblSaleMain10']");

    //actual  price 
    const m10pc = await page.locator("//span[@id='lblActualMain10']");
    
    // cross actual  price 
    const mcrs1 = await page.locator("//span[@id='lblActualCross1']");
    const mcrs2 = await page.locator("//span[@id='lblActualCross2']");
    //cross sale  price 
    const scrs1 = await page.locator("//span[@id='lblSaleCross2']");
    const scrs2 = await page.locator("//span[@id='lblSaleCross2']");

    //cart values 
    const payvalue = await page.locator("//span[@id='totalPayble']"); 
    const totalvalue = await page.locator("//span[@id='totalValue']"); 

    // IFRAME locators 
    const frame1 = await page.frameLocator('iframe[name="fsc-popup-frame"]')
    const email = await frame1.getByPlaceholder('Email')
    const fname = await frame1.getByPlaceholder('First Name')
    const lname = await frame1.getByPlaceholder('Last Name')
    const crd = await frame1.getByPlaceholder('Card Number')
    const mnth = await frame1.getByPlaceholder('MM')
    const yer = await frame1.getByPlaceholder('YY')
    const cvv = await frame1.getByPlaceholder('CVC')
    const paybutton = await frame1.locator("//button[@class='btn pay-button ng-binding ng-scope']")

    await page.goto(pageurl)
    
    await radio10pc.click()
    await page.waitForTimeout(3000)
    
    const pc10m = await m10pc.allTextContents();
    const pc10s = await s10pc.allTextContents();
    
    const cross1 = await mcrs1.allTextContents();
    const cross2 = await mcrs2.allTextContents();

    const pvalue = await payvalue.allTextContents();
    const tvalue = await totalvalue.allTextContents();  
    //const paid= await paybutton.allTextContents();

    
    await page.waitForTimeout(2000)
    
  
     console.log("Actual price 10pc :"+pc10m+" Sale price 10pc :"+pc10s+" Cross1 price :"+cross1+" Cross2 price :"+cross2+" Pay price :"+pvalue+" Total price :"+tvalue)

   
  await page.waitForTimeout(2000)
  await email.fill(mail)
    
  await fname.fill(firstname)
   
  await lname.fill(lastname)
    
  await crd.fill(card)
    
  await mnth.fill(month)
   
  await yer.fill(year)
    
  await cvv.fill(pin)
  await page.waitForTimeout(5000)
    
  await paybutton.click()

   
// await page.waitForNavigation(waituntill : 'load')
  const success=await page.url()
  console.log(success)

  await page.waitForTimeout(5000)
  await page.screenshot({path:'tests/Automation/tests/upload files'+Date.now()+'screenshot.png'})

 
   
  });
*/