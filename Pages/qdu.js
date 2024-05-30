exports.qduelements = class qduelements{
    // page=Page;
    constructor(page){
      
        this.page=page;
        this.baseurl = "https://www.quickdriverupdater.com/purchase/quick-driver-updater/cplannew/?"
        this.params = "&testmode=1"
        this.pageurl = this.baseurl+this.params
    
        //Details to fill 
        this.mail = 'vikrant@tafmail.com'
        this.firstname = 'Vikrant'
        this.lastname = 'Singh'
        this.card = '4242424242424242'
        this.month = '11'
        this.year = '25'
        this.pin = '*8PT7'
        
        // radio buttons
        this.radio1pc = page.locator("//input[@pronm='p1']");
        this.radio5pc = page.locator("//input[@pronm='p2']");
        this.radio10pc = page.locator("//input[@pronm='p3']");
       
        
        //sale price 
        this.s1pc = page.locator("//span[@id='lblSaleMain1']");
        this.s5pc = page.locator("//span[@id='lblSaleMain5']");
        this.s10pc = page.locator("//span[@id='lblSaleMain10']");
    
        //actual  price 
        this.m1pc = page.locator("//span[@id='lblActualMain1']");
        this.m5pc = page.locator("//span[@id='lblActualMain5']");
        this.m10pc = page.locator("//span[@id='lblActualMain10']");
        
        // cross actual  price 
        this.mcrs1 =  page.locator("//span[@id='lblActualCross1']");
        this.mcrs2 =  page.locator("//span[@id='lblActualCross2']");
        //cross sale  price 
        this.scrs1 =  page.locator("//span[@id='lblSaleCross2']");
        this.scrs2 =  page.locator("//span[@id='lblSaleCross2']");
    
        //cart values 
        this.payvalue =  page.locator("//span[@id='totalPayble']"); 
        this.totalvalue = page.locator("//span[@id='totalValue']"); 
    
        // IFRAME locators 
        this.frame1 =  page.frameLocator('iframe[name="fsc-popup-frame"]')
        this.email =   this.frame1.getByPlaceholder('Email')
        this.fname =   this.frame1.getByPlaceholder('First Name')
        this.lname =   this.frame1.getByPlaceholder('Last Name')
        this.crd =     this.frame1.getByPlaceholder('Card Number')
        this.mnth =    this.frame1.getByPlaceholder('MM')
        this.yer =     this.frame1.getByPlaceholder('YY')
        this.cvv =     this.frame1.getByPlaceholder('CVC')
        this.paybutton =  this.frame1.locator("//button[@class='btn pay-button ng-binding ng-scope']")

        // this.pc1m =  this.m1pc.allTextContents();
    
        // this.pc1s =  this.s1pc.allTextContents();
        
       
        // this.cross1 =  this.mcrs1.allTextContents();
        // this.cross2 =  this.mcrs2.allTextContents();
    
        // this.pvalue =  this.payvalue.allTextContents();
        // this.tvalue =  this.totalvalue.allTextContents();  
        //this.paid= await paybutton.allTextContents();
    }


async onepctext(){
    await this.radio1pc.click()
    // await this.page.waitForTimeout(3000)  
    
    this.pc1m =  await this.m1pc.allTextContents();

    this.pc1s =  await this.s1pc.allTextContents();
    
   
    this.cross1 = await  this.mcrs1.allTextContents();
    this.cross2 = await  this.mcrs2.allTextContents();

    this.pvalue = await  this.payvalue.allTextContents();
    this.tvalue = await  this.totalvalue.allTextContents(); 

    // await this.page.waitForTimeout(2000)

console.log("Actual price 1pc :"+this.pc1m+" Sale price 1pc :"+this.pc1s+" Cross1 price :"+this.cross1+" Cross2 price :"+this.cross2+" Pay price :"+this.pvalue+" Total price :"+this.tvalue)
}

async fivepctext(){
    await this.radio5pc.click()
    // await this.page.waitForTimeout(5000)
    
   this.pc5m =   await this.m5pc.allTextContents();
   this.pc5s =   await this.s5pc.allTextContents();
  
   this.cross1 = await this.mcrs1.allTextContents();
   this.cross2 = await this.mcrs2.allTextContents();

   this.pvalue = await this.payvalue.allTextContents();
   this.tvalue = await this.totalvalue.allTextContents();  
    // const paid= await paybutton.allTextContents();
       

  console.log("Actual price 5pc :"+this.pc5m+" Sale price 5pc :"+this.pc5s+" Cross1 price :"+this.cross1+" Cross2 price :"+this.cross2+" Pay price :"+this.pvalue+" Total price :"+this.tvalue)


}

async tenpctext(){
    await this.radio10pc.click()
    // await this.page.waitForTimeout(3000)
    
    this.pc10m = await this.m10pc.allTextContents();
    this.pc10s = await this.s10pc.allTextContents();
  
    this.cross1 = await this.mcrs1.allTextContents();
    this.cross2 = await this.mcrs2.allTextContents();

    this.pvalue = await this.payvalue.allTextContents();
    this.tvalue = await this.totalvalue.allTextContents();  
    //const paid= await paybutton.allTextContents();

    
    // await this.page.waitForTimeout(2000)
    
  
     console.log("Actual price 10pc :"+this.pc10m+" Sale price 10pc :"+this.pc10s+" Cross1 price :"+this.cross1+" Cross2 price :"+this.cross2+" Pay price :"+this.pvalue+" Total price :"+this.tvalue)
}

async iframefill(){
//   await this.page.waitForTimeout(2000)

  await this.email.fill(this.mail)
    
  await this.fname.fill(this.firstname)
   
  await this.lname.fill(this.lastname)
    
  await this.crd.fill(this.card)
    
  await this.mnth.fill(this.month)
   
  await this.yer.fill(this.year)
    
  await this.cvv.fill(this.pin)
//   await this.page.waitForTimeout(5000)
    
  await this.paybutton.click()
}

async screenshot(){
    
  await this.page.screenshot({path:'tests/Automation/tests/upload files'+Date.now()+'screenshot.png'})
}


async onepc(){
        await this.page.goto(this.pageurl)
    
       this.onepctext()
      // this.iframefill() 
       //this.screenshot()
  
   
// await page.waitForNavigation(waituntill : 'load')
// this.success=await this.page.url()
//   console.log(this.success)

  

 
}
async fivepc(){
        await this.page.goto(this.pageurl)
    
    this.fivepctext()
   // this.iframefill()
   // this.screenshot()
}
async tenpc(){
        await this.page.goto(this.pageurl)
    
    this.tenpctext()
   // this.iframefill()
    //this.screenshot()
}

}
    
