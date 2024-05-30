exports.windows= class windows {

    
    async maximize (){
        
        const browser= await firefox.launch()
        const context = await browser.newcontext({headless:false})
        const page = await context.newpage()

        await page.setViewportSize({ width: 1920, height: 1080 });
}



}