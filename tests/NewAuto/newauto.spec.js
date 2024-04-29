//@ts-check
const { test, expect} = require('@playwright/test');
//import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {

    await page.goto('https://www.quickdriverupdater.com/purchase/quick-driver-updater/cplan/?pid=1&nd=1&testmode=1');
    

});
