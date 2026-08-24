#!/usr/bin/env node
/**
 * Gera natan-cv.pdf a partir da página /curriculo via Playwright.
 * Uso: npm run generate:cv (com servidor em localhost:3000 ou via webServer)
 */
const { chromium } = require("@playwright/test");
const fs = require("fs");
const path = require("path");

async function main() {
  const baseUrl =
    process.env.CV_BASE_URL ||
    `http://localhost:${process.env.PLAYWRIGHT_PORT || "3099"}`;
  const outputPath = path.join(__dirname, "..", "public", "natan-cv.pdf");

  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(`${baseUrl}/curriculo`, { waitUntil: "networkidle" });
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: outputPath,
    format: "A4",
    printBackground: true,
    margin: { top: "12mm", right: "12mm", bottom: "12mm", left: "12mm" },
  });

  await browser.close();

  const size = fs.statSync(outputPath).size;
  console.log(`PDF gerado: ${outputPath} (${(size / 1024).toFixed(0)} KB)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
