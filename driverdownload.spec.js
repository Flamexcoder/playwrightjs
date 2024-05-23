//  const { test, expect} = require('@playwright/test');

// test.describe.parallel('Download Driver', ()=>{

// test("samsung driver",async({page})=>{
   

// // CATALOG PAGE LINK 
//     await page.goto('https://www.catalog.update.microsoft.com/Search.aspx?q=samsung');
    



//   //DOWNLOAD BUTTON LIST LOCATOR
//     const downloadbutton = await page.locator("//input[@class='flatBlueButtonDownload focus-only']"); 
  
//     const elements = await page.$$("//input[@class='flatBlueButtonDownload focus-only']");
  
  
//     // CLICK DONWLOAD BUTTON ONE-BY-ONE
//     for (const element of elements) {
//       await element.click();
//     //   console.log(`Clicked on element: ${downloadbutton}`);
  
//     }






//     // THIS WAS USED FOR IF ELSE CONDITION WHERE THE USER DID NOT KNOW THAT WHAT LIST IS OPENING 

//         // const Mseries = await page.locator("//input[@id='f4f0248e-2ac8-45f3-bc70-8d6c90006b94']")

//     // const Cseries =await page.locator("//input[@id='d2005564-9fa0-4c38-8e36-f693b2494a46']")
    
//     // if (await Mseries.isVisible()) {
//     //       await Mseries.click();
//     //       console.log("Mseries is present")
//     //     } else if (await Cseries.isVisible()) {
//     //       await Cseries.click()
//     //       console.log("Cseries is present")
//     //     }
  
       
  
        
//     // THIS IS USED FOR THE NEW DOWNLOAD PAGE WHICH OPENS BUT FOUND A ALTERNATE 

//         // Perform actions on the new page
//         //const page1 = await page.waitForEvent('popup')
//         // const page1Promise = page.waitForEvent('popup');
//         // const page1 = await page1Promise;
//         // const downloadCseries = await page1.locator("//div/a[@title='20953021_698e2f9bced8a3cd88189479293ec2fdd67d88e0.cab']")




  
//         const page1 = await page.waitForEvent('popup');
//         console.log('New page opened.');
  
  
//         //DOWNLOAD LINK
//         const downloadlink = 
//         await page1.locator("//div/a[@class='contentTextItemSpacerNoBreakLink']")
  
  
//         const driverlink = await page.$$("//div/a[@class='contentTextItemSpacerNoBreakLink']");
  
//         // DONWLOADING THE DRIVER ONE-BY-ONE
//         for (const element of elements) {
//           await element.click();
//         //   console.log(`Clicked on element: ${downloadlink}`);
  
//         }
  
//         await downloadlink.click()
  
//         console.log("download is done")
  
  
//    // WAIT FOR THE DOWNLOAD TO BE DONE 
//     await page.waitForTimeout(10000)
  
        
  
  
  
//   // THIS WAS USED FOR IF ELSE CONDITION WHERE THE SPECIFC DRIVER IS DOWNLOADED

//   // NO USE OF THIS (IF ELSE CONDITION DIDN'T WORK )


//         // const downloadMseries = await page1.locator("//a[@title='20953147_8dc1a2b5b6d1d125ad3bac9a951d1170dab692ce.cab']")
//       //   const downloadPromise = page1.waitForEvent('download');
//        // await page1.getByRole('link', { name: '20953147_8dc1a2b5b6d1d125ad3bac9a951d1170dab692ce.cab' }).click();
//       //   const download = await downloadPromise;
  
  
//         // if (await downloadMseries.isVisible()) {
//         //   await downloadMseries.click();
//         //   console.log("downloadMseries is present")
//         // } else if (await downloadCseries.isVisible()) {
//         //   await downloadCseries.click()
//         //   console.log("downloadCseries is present")
//         // }
//     }) 


// test("Acer driver",async({page})=>{
   

//         // CATALOG PAGE LINK 
//             await page.goto('https://www.catalog.update.microsoft.com/Search.aspx?q=acer');
            
        
        
        
//           //DOWNLOAD BUTTON LIST LOCATOR
//             const downloadbutton = await page.locator("//input[@class='flatBlueButtonDownload focus-only']"); 
          
//             const elements = await page.$$("//input[@class='flatBlueButtonDownload focus-only']");
          
          
//             // CLICK DONWLOAD BUTTON ONE-BY-ONE
//             for (const element of elements) {
//               await element.click();
//             //   console.log(`Clicked on element: ${downloadbutton}`);
          
//             }
        
        
        
        
        
        
//             // THIS WAS USED FOR IF ELSE CONDITION WHERE THE USER DID NOT KNOW THAT WHAT LIST IS OPENING 
        
//                 // const Mseries = await page.locator("//input[@id='f4f0248e-2ac8-45f3-bc70-8d6c90006b94']")
        
//             // const Cseries =await page.locator("//input[@id='d2005564-9fa0-4c38-8e36-f693b2494a46']")
            
//             // if (await Mseries.isVisible()) {
//             //       await Mseries.click();
//             //       console.log("Mseries is present")
//             //     } else if (await Cseries.isVisible()) {
//             //       await Cseries.click()
//             //       console.log("Cseries is present")
//             //     }
          
               
          
                
//             // THIS IS USED FOR THE NEW DOWNLOAD PAGE WHICH OPENS BUT FOUND A ALTERNATE 
        
//                 // Perform actions on the new page
//                 //const page1 = await page.waitForEvent('popup')
//                 // const page1Promise = page.waitForEvent('popup');
//                 // const page1 = await page1Promise;
//                 // const downloadCseries = await page1.locator("//div/a[@title='20953021_698e2f9bced8a3cd88189479293ec2fdd67d88e0.cab']")
        
        
        
        
          
//                 const page1 = await page.waitForEvent('popup');
//                 console.log('New page opened.');
          
          
//                 //DOWNLOAD LINK
//                 const downloadlink = 
//                 await page1.locator("//div/a[@class='contentTextItemSpacerNoBreakLink']")
          
          
//                 const driverlink = await page.$$("//div/a[@class='contentTextItemSpacerNoBreakLink']");
          
//                 // DONWLOADING THE DRIVER ONE-BY-ONE
//                 for (const element of elements) {
//                   await element.click();
//                 //   console.log(`Clicked on element: ${downloadlink}`);
          
//                 }
          
//                 await downloadlink.click()
          
//                 console.log("download is done")
          
          
//            // WAIT FOR THE DOWNLOAD TO BE DONE 
//             await page.waitForTimeout(10000)
          
                
          
          
          
//           // THIS WAS USED FOR IF ELSE CONDITION WHERE THE SPECIFC DRIVER IS DOWNLOADED
        
//           // NO USE OF THIS (IF ELSE CONDITION DIDN'T WORK )
        
        
//                 // const downloadMseries = await page1.locator("//a[@title='20953147_8dc1a2b5b6d1d125ad3bac9a951d1170dab692ce.cab']")
//               //   const downloadPromise = page1.waitForEvent('download');
//                // await page1.getByRole('link', { name: '20953147_8dc1a2b5b6d1d125ad3bac9a951d1170dab692ce.cab' }).click();
//               //   const download = await downloadPromise;
          
          
//                 // if (await downloadMseries.isVisible()) {
//                 //   await downloadMseries.click();
//                 //   console.log("downloadMseries is present")
//                 // } else if (await downloadCseries.isVisible()) {
//                 //   await downloadCseries.click()
//                 //   console.log("downloadCseries is present")
//                 // }
//             }) 




//  })