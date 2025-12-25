  const { test, expect, chromium } = require('@playwright/test');
//Mpanchang Ask Guru ji test case 

//  test.only("Ask Guru Ji",async({page})=>{
//     await page.goto('https://test.mpanchang.com/');

//       // Wait for the subscription alert to appear (adjust the selector as needed)
//       const alertSelector = '`.slidedown-button.secondary`';
//       await page.waitForSelector(`.slidedown-button.secondary`);
  
//       // Find and interact with the alert element to close it
//       const alertElement = await page.$(`.slidedown-button.secondary`);
  
//       if (`.slidedown-button.secondary`) {
//         // You may need to click a "Close" button or perform another action to dismiss the alert
//         // Replace the following line with the appropriate action based on the alert's behavior.
//         await alertElement?.click();
//       }
//         // Ask an astrologer drop-down element
//         await page.locator("//a[@class='win_click mobilenone pl-2 mobilenone']").click();
//         // ask an astrologer tab element 
//        await page.waitForURL('https://test.mpanchang.com/astrotalk/');
//        await page.locator("(//p[@class='planet_subtxt'])[4]").click();
//        // Ask an astrologer page url
//        await page.waitForURL('https://test.mpanchang.com/astrotalk/ask-a-question/')

//       // Close web-nag
//        //  const nagSelector = '`button.close`';
//       //  await page.waitForSelector(`button.close`); 
//       //  const timeout = 5000; // 100 seconds in milliseconds

//       //  try {
//       //    await page.waitForSelector(`button.close`, { timeout });
   
//       //    // If the nag appears, close it (replace with your code to close it)
//       //    const nagElement = await page.$(nagSelector);
//       //    await nagElement?.click(); // Replace with the appropriate action to close the nag
//       //  } catch (error) {
//       //    // If the nag doesn't appear within the timeout, continue with the next step
//       //    console.log('Nag did not appear within the timeout.');
//       //  }
   
//       //  // Once the nag element appears, you can close it (e.g., by clicking)
//       //  const nagElement = await page.$(`button.close`);
//       // await nagElement?.click(); // Replace with the appropriate action 
 
// // Name Field 
//     await page.locator("//input[@id='Name']").click();
//     await page.locator("//input[@id='Name']").fill("vikrant singh");
// // Email Field 
//     await page.locator("//input[@id='Email']").click();
//     await page.locator("//input[@id='Email']").fill("vikrant@innovanthinklabs.com");
// // Date Of Birth Drop-down
//    //Month    
//     await page.locator("//select[@id='Month']").selectOption('January');
//     //Day
//     await page.locator("//select[@id='Day']").selectOption('5');
//    //Year   
//     await page.locator("//select[@id='Year']").selectOption('2000');
// // Time of Birth 
//    //Hour   
//     await page.locator("//select[@id='Hour']").selectOption('07');
//    //Minute   
//     await page.locator("//select[@id='Minute']").selectOption('15');
//    //AM/PM
//     await page.locator("//select[@id='TimePeriod']").selectOption('PM');

//     // Location drop-down while searching keywords
//     await page.locator("//input[@id='City']").click();
//     await page.waitForSelector
//     await page.locator("//input[@id='City']").fill("jai");
//     await page.waitForSelector

//     // this code is used for the drop-down in whom you 1st have to fill the deatils and then select the options 
//     const desiredOption = await page.$('Jaipur,Rajasthan,India'); // Replace with the actual option selector
//     await desiredOption?.click();
// //Gender Drop-down
//     await page.locator("//select[@id='Gender']").selectOption('Male');
// //Marital status drop-down    
//     await page.locator("//select[@id='MaritalStatus']").selectOption('Single');
   
//     //Country Code Drop-down selection
//     await page.locator("//div[@class='iti-arrow']").click();
//     const desiredOptionCD = await page.$('//li[@data-dial-code="91"]'); // Replace with the actual option selector
//     await desiredOptionCD?.click();
//     // Phone number field 
//     await page.locator("//input[@id='PhoneNo']").click();
//     await page.locator("//input[@id='PhoneNo']").fill("6000000000");
//     // Question field   
//     await page.locator("//textarea[@id='Question']").click();
//     await page.locator("//textarea[@id='Question']").fill("free astrology question and answer online");
//     // Ask 299 button
//     await page.locator("//input[@value='Ask Now INR 299']").click();
    
    

    
      // Close slide down alert and web-nag
    //  test.only("Ask Guru Ji",async({page})=> {
    //   await page.goto('https://test.mpanchang.com');
    //    // Wait for the nag element to appear (adjust the selector as needed)
    //    const nagSelector = '`button.close`';
    //    await page.waitForSelector(`button.close`);
      
    //   // Wait for the subscription alert to appear (adjust the selector as needed)
    //   const alertSelector = '`.slidedown-button.secondary`';
    //   await page.waitForSelector(`.slidedown-button.secondary`);
  
    //   // Find and interact with the alert element to close it
    //   const alertElement = await page.$(`.slidedown-button.secondary`);
  
    //   if (`.slidedown-button.secondary`) {
    //     // You may need to click a "Close" button or perform another action to dismiss the alert
    //     // Replace the following line with the appropriate action based on the alert's behavior.
    //     await alertElement?.click();
    //   }
    //   // Once the nag element appears, you can close it (e.g., by clicking)
    //   const nagElement = await page.$(`button.close`);
    //   await nagElement?.click(); // Replace with the appropriate action
  
    //   // Continue with the rest of your automation after closing the nag
  
    // })
      // this code is used for the drop-down in whom you 1st have to fill the deatils and then select the options 
     // const desiredOption = await page.$('Jaipur,Rajasthan,India'); // Replace with the actual option selector
    // await desiredOption?.click();


    // Janman Kundli offer flow 

//    test.only("Ask Guru Ji",async({page})=>{
              
              await page.goto('https://test.mpanchang.com/');
        
              // Wait for the subscription alert to appear (adjust the selector as needed)
              const alertSelector = '`.slidedown-button.secondary`';
              await page.waitForSelector(`.slidedown-button.secondary`);
          
              // Find and interact with the alert element to close it
              const alertElement = await page.$(`.slidedown-button.secondary`);
          
              if (`.slidedown-button.secondary`) {
                // You may need to click a "Close" button or perform another action to dismiss the alert
                // Replace the following line with the appropriate action based on the alert's behavior.
                await alertElement?.click();
              }
              await page.locator("(//a[@class='win_click mobilenone pl-2'])[4]").click();
              await page.waitForURL('https://test.mpanchang.com/astrology/')
              await page.locator("(//div[@class='col-lg-4 col-md-4 col-sm-4 col-xs-12  panel_bottom click_hover'])[2]").click();
              await page.waitForURL('https://test.mpanchang.com/astrology/kundali/janam-kundali/')  
// Name Field 
              await page.locator("//input[@id='Name']").click();
              await page.locator("//input[@id='Name']").fill("vikrant singh");
// Email Field 
              await page.locator("//input[@id='Email']").click();
              await page.locator("//input[@id='Email']").fill("vikrant@innovanthinklabs.com");
// Date Of Birth Drop-down
   //Month    
              await page.locator("//select[@id='Month']").selectOption('January');
    //Day
              await page.locator("//select[@id='Day']").selectOption('5');
   //Year   
              await page.locator("//select[@id='Year']").selectOption('2000');
// Time of Birth 
   //Hour   
              await page.locator("//select[@id='Hour']").selectOption('07');
   //Minute   
              await page.locator("//select[@id='Minute']").selectOption('15');
   //AM/PM
              await page.locator("//select[@id='TimePeriod']").selectOption('PM');

    // Location drop-down while searching keywords
              await page.locator("//input[@id='City']").click();          
              await page.locator("//input[@id='City']").clear();
              await page.locator("//input[@id='City']").click();
              await page.waitForSelector
              await page.locator("//input[@id='City']").fill("jai");
              await page.waitForSelector

    // this code is used for the drop-down in whom you 1st have to fill the deatils and then select the options 
              const desiredOption = await page.$('Jaipur,Rajasthan,India'); // Replace with the actual option selector
              await desiredOption?.click();

              await page.locator("//button[@class='btn m-1 bg-pink color-white pull-right mt-2 col-xs-12 col-sm-4 m-1']").click();

              await page.waitForURL('https://test.mpanchang.com/astrology/kundali/kundali-report/');
              await page.locator("//a[@id='ancGetKundali']").click();

              await page.waitForURL('https://test.mpanchang.com/kundali-report/download/?offer=1&l=topbanner');

              await page.locator("//input[@id='Name']").click();
              await page.locator("//input[@id='Name']").fill("vikrant singh");

              await page.locator("//input[@id='Email']").click();
              await page.locator("//input[@id='Email']").fill("vikrant@innovanthinklabs.com");

              await page.locator("//select[@id='Country']").selectOption('India');

              await page.locator(" //input[@id='PhoneNumber']").click();
              await page.locator(" //input[@id='PhoneNumber']").fill("1234567890");

              await page.locator("//input[@id='IsAskQuestionOfferAccepted']").click();

              await page.locator("(//input[@value='Place Order @ INR 299'])[1]").click();

              
              
           })
            



//test{ CC Avenue test frame 


test('test', async ({ page }) => {
  
  await page.goto('https://www.mpanchang.com/astrotalk/ask-a-question/');
  
  await page.getByRole('button', { name: 'Later' }).click();
  
  
  await page.getByLabel('*Name').fill('vikrant ');
  
  await page.getByLabel('*Email').fill('vikrant@innovanathinklabs.com');
  
  await page.getByLabel('*Birth Date:').selectOption('1');
  
  await page.locator('#Day').selectOption('5');
  
  
  await page.locator('#Year').selectOption('2000');
  
  await page.locator('#Hour').selectOption('7');
  
  await page.locator('#Minute').selectOption('15');
  
  await page.locator('#TimePeriod').selectOption('1');
  
  const desiredOption = await page.$('Narnaul,Haryana,India'); 
  await desiredOption?.click();
  
  await page.getByPlaceholder('Phone Number').fill('9123456789');
  
  await page.locator('#cmdConcerns').selectOption('Education');
  
  await page.getByText('Will I be able to go abroad for studies?').click();
  
  await page.getByRole('button', { name: 'Ask Now INR 299' }).click();
 
  // doesnt work
  await page.waitForURL()

  await page.waitForEvent

  // cc avenue page locators

   await page.locator('#creditCardNumber').fill('42424242424242');
  
   await page.locator('#expiryMonthCreditCard').selectOption('01');
  
   await page.locator('#expiryYearCreditCard').selectOption('2029');
  
   await page.locator('#CVVNumberCreditCard').fill('123');
  
   await page.getByRole('link', { name: 'Make Payment' }).click();
 });





