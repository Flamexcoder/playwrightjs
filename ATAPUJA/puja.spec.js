const {test ,expect} = require('@playwright/test')

var { pujatest } = require('../../../Pages/pujaelements.js');

var { windows } = require('../../../Pages/commonmethods.js');


test('pujatesting', async({page})=>{
const window = new windows(page)
await window.maxwindow();

const puja = new pujatest(page)

    await puja.navigation();
    await puja.opencategory();
    await puja.pujaselection();
    await puja.checkoutpage();
 
})


