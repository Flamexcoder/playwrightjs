const {test,expect, request} = require('@playwright/test')
test('API Testing', async({request})=>{
    const baseurl = "http://test.protivana.com/Home/CourierAvailability"

    const endpoint ="?delivery_postcode=690520&weight=1"

    const apiurl  = baseurl+endpoint
    
    const getapi = await request.get(apiurl)

     
    console.log(await getapi.json())
    
    expect(getapi.status()).toBe(200)
    var response =await getapi.json()
    var estdhours= response.etd_hours
    var delay = response.suppression_dates.delivery_delay_days
    console.log("Delayed days of delivery : "+delay)

    const delayverify =expect(delay).toBe('1')
    




})