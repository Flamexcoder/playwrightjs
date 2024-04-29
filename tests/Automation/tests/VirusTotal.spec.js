// const{test, expect} = require('playwright/test')

// //import {test, expect} from '@playwright/test'


// // test('Learning',async({page}) =>{

// //  await page.goto("https://www.winriser.com/purchase/win-riser/plan/?testmode=1")

// //  const cartbutton = await page.locator("//a[@tkey='Text13']")
// //  await cartbutton.click()

// // const alertSelector = '`.slidedown-button.secondary`';
// //     await page.waitForSelector(`.slidedown-button.secondary`);
// //     const alertElement = await page.$(`.slidedown-button.secondary`);
    
// //      if (`.slidedown-button.secondary`) {
// // // //         // You may need to click a "Close" button or perform another action to dismiss the alert
// // // //         // Replace the following line with the appropriate action based on the alert's behavior.
// //        await alertElement?.click();
// //      }


// // const nag = await page.locator("//div[@class=' text-center OuterBarModel show_desktop']/a/img[@alt='Talk-to-Astrologer']") 

// // await page.waitForSelector("//div[@class=' text-center OuterBarModel show_desktop']/a/img[@alt='Talk-to-Astrologer']") 

// // const closebutton = await page.locator('//button[@id="btnCloseOranum"]/span[@aria-hidden="true"]')

// // if (await nag.isVisible()){
   
// // await closebutton.click()

// // }else {
    
// // }

// // // nag close 


// page.on('dialog', async dialog => {
//      expect(dialog.type()).toContain('confirmation')

//      expect(dialog.message()).toContain("I am confirm")
// console.log(dialog.message())
// await dialog.accept()

// await dialog.dismiss()





//  })
// // await page.locator("//input[@onclick='alertbox();']").click()

// // await page.waitForLoadState()

// // const crossbutton = await page.frameLocator("//iframe[@id='fsc-popup-frame']").locator("//div[@id='title-wrapper-1']/div/button")
// //  await crossbutton.click();

// // const checkoutbutton = await page.frameLocator("//iframe[@id='fsc-popup-frame']").locator("//button[@class='btn btn-block pay-button ng-binding']")
// // await checkoutbutton.click();

// // await page.waitForLoadState()


// // await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Email').fill('vikrant@tafmail.com');
   
// //   await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('First Name').fill('vikrant');
 
// //    await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Last Name').fill('singh');

// //    await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Card Number').fill('4242 4242 4242 4242');

// //    await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('MM').fill('11');

// //    await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('YY').fill('25');
 
// //    await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('CVC').fill('*RABE');
 
// //    await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Phone Number').fill('5464564654665');

// //     const paybutton = await page.frameLocator('iframe[name="fsc-popup-frame"]').locator("//div[@class='pay-button-wrapper pay-button-full-width']")
// //  await paybutton.click()
// //  await page.waitForTimeout(1000)
// // await page.waitForLoadState()
// //  await page.waitForURL()

// //  const successpage = await page.url()
// // console.log("success page URL = " + successpage)
// // await page.waitForTimeout(5000)
// // })


// test.beforeAll(async()=>{
// console.log('beforehooks')
// })

// test.afterAll(async()=>{
//   console.log('afterhooks')
//   })

//   test.beforeEach(async()=>{
//     console.log('beforeEachhooks')
//     })

//     test.afterEach(async()=>{
//       console.log('aftereachhooks')
//       })

// test.describe.parallel('Group1', ()=>{

//   test('Test1', async ({ page })=>{

//     console.log('this is test 1')
      
//     })
    
    
//     test('Test2', async ({ page })=>{
    
//       console.log('this is test 2')
        
//       })
    
// })

//  test.describe.serial('Group2', ()=>{
  
//   test('Test3', async ({ page })=>{

//     console.log('this is test 3')
      
//     })

    
//   test('Test4', async ({ page })=>{

//     console.log('this is test 4')
      
//   })
  
// //   })


// // import { PricePage } from '../../Pages/PricePage'

// // test.only('Test4', async ({ page })=>{
// // const PP = new PricePage(page)
// // await PP.gotoCheckoutPage()

// })

