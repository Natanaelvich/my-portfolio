#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

async function main() {
  let sharp;
  try {
    sharp = require("sharp");
  } catch {
    console.error("Instale sharp: npm install --save-dev sharp");
    process.exit(1);
  }

  const publicDir = path.join(__dirname, "..", "public");
  const files = fs.readdirSync(publicDir).filter((f) => f.endsWith(".png"));

  const largeFiles = [];
  for (const file of files) {
    const filePath = path.join(publicDir, file);
    const stat = fs.statSync(filePath);
    if (stat.size > 200_000) {
      largeFiles.push(file);
    }
  }

  console.log(`Otimizando ${largeFiles.length} imagens PNG...`);

  for (const file of largeFiles) {
    const input = path.join(publicDir, file);
    const output = path.join(publicDir, file.replace(/\.png$/i, ".webp"));

    await sharp(input)
      .webp({ quality: 82, effort: 4 })
      .toFile(output);

    const before = fs.statSync(input).size;
    const after = fs.statSync(output).size;
    console.log(
      `  ${file} → ${path.basename(output)} (${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB)`
    );
  }

  console.log("Concluído.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
