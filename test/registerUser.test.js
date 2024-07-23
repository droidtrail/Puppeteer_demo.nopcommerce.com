const puppeteer = require('puppeteer');
const HomePage = require('../page/HomePage.js');
const Utils = require('../utils/Utils.js');

describe("Registrar", ()=>{
  it("Registrar novo usuário",async () => {
    jest.setTimeout(10000);
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({
      width: 1600,
      height: 1000,
      deviceScaleFactor: 1
  });
    const homePage = new HomePage(page);
    const utils = new Utils(page)
    const url = 'https://demo.nopcommerce.com/'
    
    await page.goto(url);
    await homePage.clickRegister();
    const textContent = await utils.getTextContent('div.title > strong');
    expect(textContent).toBe('Your Personal Details');
    await browser.close();
  })
})