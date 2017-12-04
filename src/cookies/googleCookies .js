
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://google.com');
    var c = await page.cookies();
    console.log(c); // outputs the cookie
    browser.close();
   })();

   