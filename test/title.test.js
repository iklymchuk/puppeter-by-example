const puppeteer = require('puppeteer');

var browser, page;
var url = 'https://prontotools.io'

beforeEach (async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
  })

afterEach (() => {
    browser.close()
  })

describe('Open ProntoTools Website', () => {

    test('Title == Pronto Tools', async () => {
        await page.goto(url);
        const title = await page.title();
        expect(title).toBe("Pronto Tools");
    });
    
    test("Center == Tools for Your Growing Business", async () => {
        await page.goto(url);
        const center = await page.$eval('h2.font-34.uppercase > strong', e => e.innerHTML);
        expect(center).toBe("Tools for Your Growing Business");
    });
})