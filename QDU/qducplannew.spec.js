const {test, expect} = require('@playwright/test');
var { qduelements } = require('../../../Pages/qdu')
// test.describe.configure({mode:'parallel'})
test('QDU price page 1pc',async ({page})=>{

   const qdu= new qduelements(page)

   await qdu.onepc()
   await qdu.fivepc()
   await qdu.tenpc()

  });
