const {test,expect}=require('@playwright/test')
var {fastspring}=require('../../../Pages/fastspring')

test('Winriser',async()=>{
const lp=new fastspring(page)
await lp.winriser()
})
