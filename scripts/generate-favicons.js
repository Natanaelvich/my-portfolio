#!/usr/bin/env node
/**
 * Gera favicons a partir de public/profile-photo.jpeg (mesma foto do header).
 * Uso: npm run generate:favicons
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.join(__dirname, "..");
const SOURCE = path.join(ROOT, "public", "profile-photo.jpeg");
const PUBLIC = path.join(ROOT, "public");
const APP = path.join(ROOT, "app");

const OUTPUTS = [
  { file: "favicon-16x16.png", size: 16 },
  { file: "favicon-32x32.png", size: 32 },
  { file: "apple-touch-icon.png", size: 180 },
  { file: "android-chrome-192x192.png", size: 192 },
  { file: "android-chrome-512x512.png", size: 512 },
];

async function writeIcon(outputPath, size) {
  await sharp(SOURCE)
    .resize(size, size, { fit: "cover", position: "centre" })
    .png({ compressionLevel: 9 })
    .toFile(outputPath);
}

async function writeFaviconIco(outputPath) {
  const sizes = [16, 32, 48];
  const pngBuffers = await Promise.all(
    sizes.map((size) =>
      sharp(SOURCE)
        .resize(size, size, { fit: "cover", position: "centre" })
        .png()
        .toBuffer(),
    ),
  );

  const images = pngBuffers.map((buffer, index) => ({
    width: sizes[index],
    height: sizes[index],
    buffer,
  }));

  const icoBuffer = encodeIco(images);
  fs.writeFileSync(outputPath, icoBuffer);
}

function encodeIco(images) {
  const count = images.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const offset = headerSize + dirEntrySize * count;

  let dataOffset = offset;
  const parts = [];

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);
  parts.push(header);

  const entries = [];
  const payloads = [];

  for (const image of images) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(image.width === 256 ? 0 : image.width, 0);
    entry.writeUInt8(image.height === 256 ? 0 : image.height, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(image.buffer.length, 8);
    entry.writeUInt32LE(dataOffset, 12);
    entries.push(entry);
    payloads.push(image.buffer);
    dataOffset += image.buffer.length;
  }

  return Buffer.concat([...parts, ...entries, ...payloads]);
}

async function main() {
  if (!fs.existsSync(SOURCE)) {
    throw new Error(`Foto de perfil não encontrada: ${SOURCE}`);
  }

  for (const { file, size } of OUTPUTS) {
    const outputPath = path.join(PUBLIC, file);
    await writeIcon(outputPath, size);
    console.log(`✓ ${file} (${size}x${size})`);
  }

  await writeFaviconIco(path.join(PUBLIC, "favicon.ico"));
  console.log("✓ favicon.ico");

  await writeIcon(path.join(APP, "icon.png"), 32);
  await writeIcon(path.join(APP, "apple-icon.png"), 180);
  console.log("✓ app/icon.png e app/apple-icon.png");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
