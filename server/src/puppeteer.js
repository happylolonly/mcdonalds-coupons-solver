const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://mcdonalds.fast-insight.com/voc/by/ru", {
    waitUntil: "networkidle2"
  });
  await page.type("#receiptCode", "03uu-bkn0-qfp8");
  await page.click("button");

  // await page.screenshot({ path: "example.png" });
  // await browser.close();
})();
