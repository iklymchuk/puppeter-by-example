const puppeteer = require('puppeteer');

(async () => {
 const browser = await puppeteer.launch({headless: false});
 const page = await browser.newPage();
 await page.goto('https://google.com');
 const html = await page.$eval('#hplogo', e => e.children[0].innerHTML = '<img src="https://media-mediatemple.netdna-ssl.com/wp-content/themes/smashing-magazine/assets/images/logo.svg">');

 await page.waitFor(5000);    
 
await page.screenshot({path : "jack.png"}); //capture the screenshot


 browser.close();
})();