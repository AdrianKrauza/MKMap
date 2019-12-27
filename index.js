const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.setViewport({
        width: 10000,
        height: 10000,
        deviceScaleFactor: 1,
      })
	await page.goto('https://map.kwadratowa.tv/#/-24/64/-151/-1/Kwadratowa%20Masakra/normalrender', { waitUntil: 'networkidle0' });
    await page.screenshot({path: 'buddy-screenshot.png'});
    console.log('ok')
	await browser.close();
})();
