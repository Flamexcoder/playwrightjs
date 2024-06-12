const {test,expect}=require('@playwright/test')
var {fastspring}=require('../../../Pages/fastspring')
const readline = require('readline')
const { resolve } = require('path')




test('Winriser',async()=>{
const lp=new fastspring(page)
await lp.winriser()
})
