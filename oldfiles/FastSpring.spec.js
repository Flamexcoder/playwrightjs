
//  const { test, expect } = require('@playwright/test');

// //  // Iframe of FastSpring and LP flow for windows product

// //WinRiser

//  test.describe('Group1', ()=>{
//   test('FastSpring and LP flow WinRiser', async ({page}) => {

// // add the current params for the lp flow

//   await page.goto('https://www.winriser.com/inw/install/win-riser/?');
    
//   await page.getByRole('link', { name: 'Upgrade to PRO' }).click();

//   console.log("Upgrade to PRO button is clicked");

//   await page.goto('https://www.winriser.com/purchase/win-riser/plan/?testmode=1');

//   await page.getByRole('link', { name: 'Add To Cart' }).click();

//   console.log("Add To Cart button is clicked")
  
//   await page.frameLocator('iframe[name="fsc-popup-frame"]').getByRole('button', { name: 'Continue Checkout' }).click();
  
//   await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Email').fill('vikrant@tafmail.com');
   
//   await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('First Name').fill('vikrant');
 
//   await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Last Name').fill('singh');

//   await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Card Number').fill('4242 4242 4242 4242');

//   await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('MM').fill('11');

//   await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('YY').fill('25');
 
//   await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('CVC').fill('*RABE');
 
//   await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Phone Number').fill('5464564654665');
 
//   console.log("All the details are filled")

//   await page.screenshot({path:'tests/Automation/tests/upload files'+Date.now()+'screenshot.png'})

// const CheckBox = page.locator("//input[@id='compliance-checkbox']");
// // condition for if the check box is present 
// if (await CheckBox.isVisible()) {
//   await CheckBox.check();
//   console.log("CheckBox is present")
// } else  {
//   console.log("CheckBox not present")
// }
// await page.frameLocator('iframe[name="fsc-popup-frame"]').locator("//button[@class='btn pay-button ng-binding ng-scope']").click();
//   await page.waitForURL();
  
//   await page.waitForTimeout(5000)

//    console.log("Success page is displayed")
//    });

// // BDU

//   test('FastSpring and LP flow BDU', async ({ page }) => {

  
//     await page.goto('https://store.bitdriverupdater.com/btdu/cplan/?nd=1&testmode=1');
  
//     await page.getByRole('link', { name: 'Buy Now' }).click();
  
//     console.log("Add To Cart button is clicked")
    
//     await page.frameLocator('iframe[name="fsc-popup-frame"]').getByRole('button', { name: 'Continue Checkout' }).click();
    
//     await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Email').fill('vikrant@tafmail.com');
     
//     await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('First Name').fill('vikrant');
   
//     await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Last Name').fill('singh');
  
//     await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Card Number').fill('4242 4242 4242 4242');
  
//     await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('MM').fill('11');
  
//     await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('YY').fill('25');
   
//     await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('CVC').fill('*RABE');
   
//     await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Phone Number').fill('5464564654665');
   
//     console.log("All the details are filled")
    
    

//   const CheckBox = page.locator("//input[@id='compliance-checkbox']");
//   // condition for if the check box is present 
//   if (await CheckBox.isVisible()) {
//     await CheckBox.check();
//     console.log("CheckBox is present")
//   } else  {
//     console.log("CheckBox not present")
//   }
//   await page.frameLocator('iframe[name="fsc-popup-frame"]').locator("//button[@class='btn pay-button ng-binding ng-scope']").click();
//     await page.waitForURL();
    
//     await page.waitForTimeout(5000)
  
//      console.log("Success page is displayed")

//      await page.screenshot({path:'tests/Automation/tests/upload files'+Date.now()+'screenshot.png'})
//   });

//   // BGB

//   test('FastSpring and LP flow BGB', async ({ page }) => {

    
//       await page.goto('https://www.bitgamebooster.com/purchase/bit-game-booster/plan/?nd=1&testmode=1');
    
//       await page.getByRole('link', { name: 'Buy Now' }).click();
    
//       console.log("Add To Cart button is clicked")
      
//       await page.frameLocator('iframe[name="fsc-popup-frame"]').getByRole('button', { name: 'Continue Checkout' }).click();
      
//       await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Email').fill('vikrant@tafmail.com');
       
//       await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('First Name').fill('vikrant');
     
//       await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Last Name').fill('singh');
    
//       await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Card Number').fill('4242 4242 4242 4242');
    
//       await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('MM').fill('11');
    
//       await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('YY').fill('25');
     
//       await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('CVC').fill('*RABE');
     
//       await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Phone Number').fill('5464564654665');
     
//       console.log("All the details are filled")
    
       
    
    
//     const CheckBox = page.locator("//input[@id='compliance-checkbox']");
//     // condition for if the check box is present 
//     if (await CheckBox.isVisible()) {
//       await CheckBox.check();
//       console.log("CheckBox is present")
//     } else  {
//       console.log("CheckBox not present")
//     }
//     await page.frameLocator('iframe[name="fsc-popup-frame"]').locator("//button[@class='btn pay-button ng-binding ng-scope']").click();
//       await page.waitForURL();
      
//       await page.waitForTimeout(5000)
    
//        console.log("Success page is displayed")

//        await page.screenshot({path:'tests/Automation/tests/upload files'+Date.now()+'screenshot.png'})
//     });

// // WinGar
//   test('FastSpring and LP flow WinGar', async ({ page }) => {

      
//         await page.goto('https://www.win-guardian.com/purchase/win-guardian/plan/?nd=1&testmode=1');
      
//         await page.getByRole('link', { name: 'Buy Now' }).click();
      
//         console.log("Add To Cart button is clicked")
        
//         await page.frameLocator('iframe[name="fsc-popup-frame"]').getByRole('button', { name: 'Continue Checkout' }).click();
        
//         await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Email').fill('vikrant@tafmail.com');
         
//         await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('First Name').fill('vikrant');
       
//         await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Last Name').fill('singh');
      
//         await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Card Number').fill('4242 4242 4242 4242');
      
//         await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('MM').fill('11');
      
//         await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('YY').fill('25');
       
//         await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('CVC').fill('*RABE');
       
//         await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Phone Number').fill('5464564654665');
       
//         console.log("All the details are filled")
      
      
//       const CheckBox = page.locator("//input[@id='compliance-checkbox']");
//       // condition for if the check box is present 
//       if (await CheckBox.isVisible()) {
//         await CheckBox.check();
//         console.log("CheckBox is present")
//       } else  {
//         console.log("CheckBox not present")
//       }
//       await page.frameLocator('iframe[name="fsc-popup-frame"]').locator("//button[@class='btn pay-button ng-binding ng-scope']").click();
//         await page.waitForURL();
        
//         await page.waitForTimeout(5000)
      
//          console.log("Success page is displayed")
//          await page.screenshot({path:'tests/Automation/tests/upload files'+Date.now()+'screenshot.png'})
//       });

// // BSAM
//   test('FastSpring and LP flow BSAM', async ({ page }) => {

        
//           await page.goto('https://www.bitsecurityservices.com/purchase/bit-safe-antimalware/plan/?nd=1&testmode=1');
        
//           await page.getByRole('link', { name: 'Buy Now' }).click();
        
//           console.log("Add To Cart button is clicked")
          
//           await page.frameLocator('iframe[name="fsc-popup-frame"]').getByRole('button', { name: 'Continue Checkout' }).click();
          
//           await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Email').fill('vikrant@tafmail.com');
           
//           await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('First Name').fill('vikrant');
         
//           await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Last Name').fill('singh');
        
//           await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Card Number').fill('4242 4242 4242 4242');
        
//           await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('MM').fill('11');
        
//           await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('YY').fill('25');
         
//           await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('CVC').fill('*RABE');
         
//           await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Phone Number').fill('5464564654665');
         
//           console.log("All the details are filled")
        
        
//         const CheckBox = page.locator("//input[@id='compliance-checkbox']");
//         // condition for if the check box is present 
//         if (await CheckBox.isVisible()) {
//           await CheckBox.check();
//           console.log("CheckBox is present")
//         } else  {
//           console.log("CheckBox not present")
//         }
//         await page.frameLocator('iframe[name="fsc-popup-frame"]').locator("//button[@class='btn pay-button ng-binding ng-scope']").click();
//           await page.waitForURL();
          
//           await page.waitForTimeout(5000)
        
//            console.log("Success page is displayed")

//            await page.screenshot({path:'tests/Automation/tests/upload files'+Date.now()+'screenshot.png'})
//         });

// // QPF
//   test('FastSpring and LP flow QPF', async ({ page }) => {

         
//             await page.goto('https://www.quickphotofinder.com/purchase/quick-photo-finder/plan/?nd=1&testmode=1');
//             await page.getByRole('link', { name: 'Buy Now' }).click();
//             await page.frameLocator('iframe[name="fsc-popup-frame"]').getByRole('button', { name: 'Continue Checkout' }).click();
            
//             await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Email').fill('vikrant@innoavanathinklabs.com');
            
            
//             await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('First Name').fill('vikrant');
            
//             await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Last Name').fill('singh');
            
//             await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Card Number').fill('4242 4242 4242 4242');
            
//             await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('MM').fill('11');
            
//             await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('YY').fill('25');
            
//             await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('CVC').fill('*8PT7');
            
//             await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Phone Number').fill('45645646556');
            
            
         
//             console.log("All the details are filled")
//             await page.screenshot({path:'tests/Automation/tests/upload files'+Date.now()+'screenshot.png'})
          
//           const CheckBox = page.locator("//input[@id='compliance-checkbox']");
//           // condition for if the check box is present 
//           if (await CheckBox.isVisible()) {
//             await CheckBox.check();
//             console.log("CheckBox is present")
//           } else  {
//             console.log("CheckBox not present")
//           }
//           await page.frameLocator('iframe[name="fsc-popup-frame"]').locator("//button[@class='btn pay-button ng-binding ng-scope']").click();
//             await page.waitForURL();
            
//             await page.waitForTimeout(5000)
          
//              console.log("Success page is displayed")
//              await page.screenshot({path:'tests/Automation/tests/upload files'+Date.now()+'screenshot.png'})
          
//             });

// //QDU 
//   test('FastSpring and LP flow QDU', async ({ page }) => {

         
//             await page.goto('https://www.quickdriverupdater.com/purchase/quick-driver-updater/cplan/?pid=1&nd=1&testmode=1');
//             await page.getByRole('link', { name: 'Buy Now' }).click();
//             await page.frameLocator('iframe[name="fsc-popup-frame"]').getByRole('button', { name: 'Continue Checkout' }).click();
            
//             await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Email').fill('vikrant@innoavanathinklabs.com');
            
            
//             await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('First Name').fill('vikrant');
            
//             await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Last Name').fill('singh');
            
//             await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Card Number').fill('4242 4242 4242 4242');
            
//             await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('MM').fill('11');
            
//             await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('YY').fill('25');
            
//             await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('CVC').fill('*8PT7');
            
//             await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Phone Number').fill('45645646556');
            
            
         
//             console.log("All the details are filled")

//             await page.screenshot({path:'tests/Automation/tests/upload files'+Date.now()+'screenshot.png'})
          
          
//           const CheckBox = page.locator("//input[@id='compliance-checkbox']");
//           // condition for if the check box is present 
//           if (await CheckBox.isVisible()) {
//             await CheckBox.check();
//             console.log("CheckBox is present")
//           } else  {
//             console.log("CheckBox not present")
//           }
//           await page.frameLocator('iframe[name="fsc-popup-frame"]').locator("//button[@class='btn pay-button ng-binding ng-scope']").click();
//             await page.waitForURL();
            
//             await page.waitForTimeout(5000)
          
//              console.log("Success page is displayed")
//           });
  
// // BGF

//   test('FastSpring and LP flow BGF', async ({ page }) => {

//           await page.goto('https://www.bitguardianfirewall.com/purchase/bit-guardian-firewall/plan/?nd=1&testmode=1');
//   await page.getByRole('link', { name: 'Buy Now' }).click();
  
//   await page.frameLocator('iframe[name="paddle_frame"]').getByTestId('authenticationEmailInput').fill('vikrant@innovanathinklabs.com');
  
//   await page.frameLocator('iframe[name="paddle_frame"]').getByTestId('postcodeInput').fill('302004');
  
//   await page.frameLocator('iframe[name="paddle_frame"]').getByTestId('combinedAuthenticationLocationFormSubmitButton').click();
  
//   await page.frameLocator('iframe[name="paddle_frame"]').getByTestId('cardNumberInput').fill('4242 4242 4242 4242');
  
//   await page.frameLocator('iframe[name="paddle_frame"]').getByTestId('cardholderNameInput').fill('vikrant singh');
  
//   await page.frameLocator('iframe[name="paddle_frame"]').getByTestId('expiryDateField').fill('11 / 25');
  
//   await page.frameLocator('iframe[name="paddle_frame"]').getByTestId('cardVerificationValueInput').fill('125');
  
//   const CheckBox = page.locator("//input[@id='compliance-checkbox']");
//   // condition for if the check box is present 
//   if (await CheckBox.isVisible()) {
//     await CheckBox.check();
//     console.log("CheckBox is present")
//   } else  {
//     console.log("CheckBox not present")
//   }
//   await page.frameLocator('iframe[name="paddle_frame"]').locator("//button[@data-testid='cardPaymentFormSubmitButton']").click();
//     await page.waitForURL();
    
//     await page.waitForTimeout(5000)
  
//      console.log("Success page is displayed")
  
//   await page.waitForURL()
//   await page.screenshot({path:'tests/Automation/tests/upload files'+Date.now()+'screenshot.png'})
  

// });

// //ADG

//    test('FastSpring and LP flow ADG', async ({ page }) => {

//   await page.goto('https://shop.bit-guardian.com/ad-guardian-plus/plan/?&testmode=1');
//   await page.getByRole('link', { name: 'Buy Now' }).click();
//   await page.frameLocator('iframe[name="fsc-popup-frame"]').getByRole('button', { name: 'Continue Checkout' }).click();
  
//   await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Email').fill('vikrant@innovanathinklabs.com');
  
  
//   await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('First Name').fill('vikrant');
  
//   await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Last Name').fill('singh');
  
//   await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Card Number').fill('4242 4242 4242 4242 ');
  
//   await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('MM').fill('11');
  
//   await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('YY').fill('25');
  
//   await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('CVC').fill('*RABE');
  
//   await page.frameLocator('iframe[name="fsc-popup-frame"]').getByPlaceholder('Phone Number').fill('4646546465465');
  
//   const CheckBox = page.locator("//input[@id='compliance-checkbox']");
//   // condition for if the check box is present 
//   if (await CheckBox.isVisible()) {
//     await CheckBox.check();
//     console.log("CheckBox is present")
//   } else  {
//     console.log("CheckBox not present")
//   }
//   await page.frameLocator('iframe[name="fsc-popup-frame"]').locator("//button[@class='btn pay-button ng-binding ng-scope']").click();
//     await page.waitForURL();
    
//     await page.waitForTimeout(5000)
  
//      console.log("Success page is displayed")
//      await page.screenshot({path:'tests/Automation/tests/upload files'+Date.now()+'screenshot.png'})
//   });
// })




          