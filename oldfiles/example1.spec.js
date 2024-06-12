// // @ts-check
  const { test, expect,chromium} = require('@playwright/test');
  const readline= require('readline')
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
function askquestions(question){
    return new promise((resolve)=>{
        rl.question(question,(answer) => { 
            resolve(answer);
        })
        })
    }
test("samsung driver",async()=>{
const browser = await chromium.launch()
const context = await browser.newContext()
const page = await context.newPage()
const url = await askQuestion('Enter the URL you want to visit: ');
// Navigate to the provided URL
await page.goto(url);
})