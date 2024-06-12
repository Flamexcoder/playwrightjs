// // @ts-check
  const { test, expect,webkit, firefox, chromium} = require('@playwright/test');


//  test("samsung driver",async({page})=>{
   

//     // CATALOG PAGE LINK 
//         await page.goto('https://www.catalog.update.microsoft.com/Search.aspx?q=samsung');
        
    
//     // let currentPage = 1;
//     // const totalPages = 5; // Total number of pages

//     // while (currentPage <= totalPages) {
//     //   // Navigate to the webpage
//     //   await page.goto(`https://www.catalog.update.microsoft.com/Search.aspx?q=samsung=${currentPage}`);
//     // }
//     const downloadbutton = await page.locator("//input[@class='flatBlueButtonDownload focus-only']"); 
      
//     const elements = await page.$$("//input[@class='flatBlueButtonDownload focus-only']");


//    // const clickedElements = new Set();

//     // Click on each element one by one but only once
//     // for (const element of elements) {
//     //   const elementText = await element.innerText();
//     //   if (!clickedElements.has(elementText)) {
//     //     await element.click();
//     //     console.log(`Clicked on element: ${elementText}`);
//     //     clickedElements.add(elementText);
//     //   }
//     // }


//     for (const element of elements) {
//               await element.click();
//             //   console.log(`Clicked on element: ${downloadbutton}`);
          
//             }
//   //  console.log(`All elements on page ${currentPage} clicked.`);

//     // Click on the next page element
//     const nextPageButton = await page.$("//input[@name='ctl00$catalogBody$nextPageLinkButton']"); // Replace with your locator for the next page button
//     if (nextPageButton) {
//       await nextPageButton.click();
//       const downloadbutton = await page.locator("//input[@class='flatBlueButtonDownload focus-only']"); 
      
//       const elements = await page.$$("//input[@class='flatBlueButtonDownload focus-only']");
  
//       for (const element of elements) {
//         await element.click();
//       //   console.log(`Clicked on element: ${downloadbutton}`);
    
//       }
//       await page.waitForEvent
//       console.log('Clicked on next page button.');
//     } else {
//       console.log('No next page button found.');
//      // break; // Exit the loop if there is no next page button
//     }

//    // currentPage++;
//    await page.waitForTimeout(10000)
//   })
    
//       //DOWNLOAD BUTTON LIST LOCATOR
//         // const downloadbutton = await page.locator("//input[@class='flatBlueButtonDownload focus-only']"); 
      
//         // const elements = await page.$$("//input[@class='flatBlueButtonDownload focus-only']");
      
      
//         // CLICK DONWLOAD BUTTON ONE-BY-ONE
//         // for (const element of elements) {
//         //   await element.click();
//         //   console.log(`Clicked on element: ${downloadbutton}`);
      
//         // }
  
      
//     //         const page1 = await page.waitForEvent('popup');
//     //         console.log('New page opened.');
      
      
//     //         //DOWNLOAD LINK
//     //         const downloadlink =await page1.locator("//div/a[@class='contentTextItemSpacerNoBreakLink']")
      
      
//     //         const driverlink = await page1.$$("//div/a[@class='contentTextItemSpacerNoBreakLink']");
      
//     //         // DONWLOADING THE DRIVER ONE-BY-ONE
//     //         for (const element of elements) {
//     //             const elementText = await element.innerText();
//     //             if (!clickedElements.has(elementText)) {
//     //               await element.click();
//     //               console.log(`Clicked on element: ${elementText}`);
//     //               clickedElements.add(elementText);
//     //             }
//     //           }
      
//     //         await downloadlink.click()
      
//     //         console.log("download is done")
      
      
//     //    // WAIT FOR THE DOWNLOAD TO BE DONE 
        
      

        







// // //Empty script
// //  test.only("login",async({page})=>{
// //   await page.goto("");
// //   await page.locator("").click();
// //   await page.locator("").click();
// //   await page.locator("").click();
// //   await page.locator("").click();
// //   await page.locator("").fill("");
// //   await page.locator("").click();
// //   await page.locator("").fill("123");
// //   await page.locator("").click();
// //   await page.waitForResponse
  
// //  }) 

// //Empty script

  
// //   await page.locator("").click();
// //   await page.locator("").click();
// //   await page.locator("").click();
// //   await page.locator("").fill("");
// //   await page.locator("").click();
// //   await page.locator("").fill("123");
// //   await page.locator("").click();
  
  
// //})
 


test('example',async()=>{
  

   
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    const pujalinks = await page.locator("//a[@class='p-3 pb-0']")
    const pujalink = await page.$$("//a[@class='p-3 pb-0']")
  async function serial(element)
    {
        for (let i=0;i<element.length;i++)
          {
              console.log(`Element ${i + 1}: ${await element[i].allInnerTexts()}`);
          }
    }
    

    await page.viewportSize({width:1920,height:1080})
    await page.goto('https://otest.anytimeastro.com/puja/products/')

    const nextpage =await page.locator("//a[@aria-label='Next']")
    const pagelist = await page.locator("(//a[@class='p-3 pb-0']/div/p[@class='fw-bold mb-0 text-black'])")
   
    const pujalist = await page.$$("(//a[@class='p-3 pb-0']/div/p[@class='fw-bold mb-0 text-black'])")
    
    
    const page1list = await pagelist.allTextContents()//list of puja name 

  
    await page.waitForTimeout(2000)


    const herfs = await pujalinks.allInnerTexts()
    const herfsstr = await herfs.toLocaleString()
    const pujadetails = await herfsstr.replace('/\n\/',';')

    serial(pujadetails)
    // console.log("Page1 "+"Puja Details :"+pujadetails+"______________________________________________________________________________________________________________")
 

    await nextpage.click();

    
    
    //console.log("Page1 = "+page1list)

    const page2list =await pagelist.allTextContents()
   
    await page.waitForTimeout(2000)
    
    const herfs2 = await pujalinks.allInnerTexts()
    const herfsstr2 = await herfs2.toLocaleString()
    const pujadetails2 = await herfsstr2.replace('/\n\/',';')
    
    // console.log(pujadetails2)
    // console.log("Page2 "+"Puja Details :"+herfs2+"______________________________________________________________________________________________________________")

    await nextpage.click();
    
    //console.log("Page2 = "+page2list)


    const page3list =await pagelist.allTextContents()
    serial(pujalink)
    await page.waitForTimeout(2000)
    const herfs3 = await pujalinks.allInnerTexts()
    const herfsstr3 = await herfs3.toLocaleString()
    const pujadetails3 = await herfsstr3.replace('/\n\/',';')
    // console.log(pujadetails3)
    // console.log("Page3 "+"Puja Details :"+herfs3+"______________________________________________________________________________________________________________")

    
   // console.log("Page3 = "+page3list)

    // console.log("Page1 = "+page1list)
    // console.log("Page2 = "+page2list)
    // console.log("Page3 = "+page3list)

    
    

 
    



    // let i=list 
// for (i=0;i<50;i++){



// }




   

    

    

    // const list1=list[0]
    // console.log("list1="+list1)
    // const list2=list[1]
    // console.log("list2="+list2)
    // const list3=list[2]
    // console.log("list3="+list3)
    // const list4=list[3]
    // console.log("list4="+list4)
    // const list5=list[4]
    // console.log("list5="+list5)
    //console.log(list)
})



 