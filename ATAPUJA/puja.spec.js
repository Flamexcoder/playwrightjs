const {test ,expect} = require('@playwright/test')

var { pujatest } = require('../../../Pages/puja');

//var { windows } = require('../../../Pages/commonmethods.js');


test('pujatesting', async({page})=>{




const puja = new pujatest(page)

 await puja.navigation();
 await puja.opencategory();
 await puja.pujaselection();
 await puja.checkoutpage();
 
})


