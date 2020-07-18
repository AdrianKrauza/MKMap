const puppeteer = require('puppeteer');
(async () => {
    const date = new Date()
	const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.setViewport({
        width: 3500,
        height: 3500,
        deviceScaleFactor: 1,
      })
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 2500)
      });
      let result = await promise;
      result
      // await page.goto('https://map.kwadratowa.tv/#/-2415/64/-1661/-1/Kwadratowa%20Masakra/normalrender', { waitUntil: 'networkidle0' });
      await page.goto('https://map.kwadratowa.tv/#/-570/64/24/-1/Kwadratowa%20Masakra/normalrender', { waitUntil: 'networkidle0' });
      await page.click('#mcmap > div.leaflet-control-container > div.leaflet-top.leaflet-right > div:nth-child(4) > section > div.leaflet-control-layers-overlays > label:nth-child(1) > div > input'); 
      await page.screenshot({path: `image/green/${date.getMonth()}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}.png`, clip: { x: 0, y: 90, width: 3250, height: 3250 }}  );
      await browser.close();
      console.log('green success')
})();
