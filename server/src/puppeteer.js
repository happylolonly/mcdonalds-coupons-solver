const puppeteer = require("puppeteer");

export async function processCoupon(coupon) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("https://mcdonalds.fast-insight.com/voc/by/ru", {
    waitUntil: "networkidle2"
  });
  // await page.type("#receiptCode", "03uu-bkn0-qfp8");
  // await page.click("button");

  const name = `coupon-${coupon}.png`;
  await page.screenshot({ path: `static/${name}` });
  await browser.close();

  return name;
}
