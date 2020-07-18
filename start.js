const puppeteer = require('puppeteer');
(async () => {
    const date = new Date()
	const browser = await puppeteer.launch({headless:true,args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.setViewport({
        width: 7000,
        height: 7000,
        deviceScaleFactor: 1,
      })
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 2500)
      });
      let result = await promise;
      result
      await page.goto('https://map.kwadratowa.tv/#/-142/64/224/-3/Kwadratowa%20Masakra/normalrender', { waitUntil: 'networkidle0' });
      await page.click('#mcmap > div.leaflet-control-container > div.leaflet-top.leaflet-right > div:nth-child(4) > section > div.leaflet-control-layers-overlays > label:nth-child(1) > div > input'); 
      await page.screenshot({path: `image/sezon4/${date.getMonth()}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}.png`, clip: { x: 0, y: 0, width: 6700, height: 6700 }}  );
      await browser.close();
      console.log('success')
})();
