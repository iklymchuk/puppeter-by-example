const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});
     const page = await browser.newPage();

    await page.goto('https://www.smashingmagazine.com/');

    await page.setViewport({width: 1000, height: 500})  
    
    await page.waitFor(1000);    

    const html = await page.$eval('.header__head', e => [e.offsetWidth,e.offsetHeight,e.offsetTop,e.offsetLeft] );
    await page.screenshot({path : "clip.png", clip : {x : html[2],y : html[3] , width : html[0] , height : html[1]}});

   browser.close();
})();