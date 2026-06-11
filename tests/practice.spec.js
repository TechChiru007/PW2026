import {test,expect} from '@playwright/test';
test.describe('Test Suite',()=>{
   test('TC-1',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const title = await page.title();
    console.log(title);
    expect(page).toHaveTitle(title);
   });
   test('TC-2',async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const title = await page.title();
    console.log(title);
    //await expect(page).toHaveTitle("t");
    const blinklink = page.locator("a[href*='documents-request']");
    const [newPage]=await Promise.all([
        context.waitForEvent('page'),
        blinklink.click()
    ]);
    const ntitle=await newPage.title();
    console.log(ntitle);
   })
})