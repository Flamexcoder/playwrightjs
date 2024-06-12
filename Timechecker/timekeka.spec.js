const {test,expect, chromium}= require('@playwright/test')

test ('kekatime',async()=>{

const browser= await chromium.launch()
const context = await browser.newContext()
const page = await context.newPage()

await page.setViewportSize({width :1800,height: 1050})



    const kekaurl= "https://innovanathinklabs.keka.com/#/home/dashboard"
    const email= await page.locator("//input[@placeholder='Email']")
    const password= await page.locator("//input[@placeholder='Passowrd']")
    const captcha =await page.locator("//input[@placeholder='Captcha']")
    const capcthaimg= await page.locator("//img[@id='imgCaptcha']")



    
    await page.goto(kekaurl)


    const link = await capcthaimg.allInnerTexts()
    // const imglink = await link.toLocaleString()

    console.log(link)


    // if (capcthaimg.isVisible()) {
    //     // Use evaluateHandle to run JavaScript code in the context of the browser page
    //    // const srcHandle = await capcthaimg.evaluateHandle((capcthaimg) => capcthaimg.src);

    //     const imgSrc = await page.$eval('img', capcthaimg => capcthaimg.src); 

        
    
    //     // Extract the src attribute value
    //     // const src = await srcHandle.jsonValue();
    
    //     // Print the src attribute value
    //     console.log("link"+imgSrc);
    
    //     // Release the handle
    //     //await srcHandle.dispose();
    //   } else {
    //     console.log('Element not found.');
    //   }


 await page.waitForTimeout(5000)


})