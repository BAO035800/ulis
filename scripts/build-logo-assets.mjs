import sharp from "sharp";
import path from "node:path";
import fs from "node:fs/promises";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC = path.join(ROOT, "public/logo.jpeg");

// Source: 1408×768. Logo mark is roughly centered, ~600×600 area around (725, 384).
const CROP = { left: 420, top: 80, width: 620, height: 620 };

async function run() {
  const buf = await fs.readFile(SRC);

  // Header / footer asset — 256x256 square
  await sharp(buf)
    .extract(CROP)
    .resize(256, 256, { fit: "contain", background: "#ffffff" })
    .png({ quality: 92 })
    .toFile(path.join(ROOT, "public/logo-square.png"));

  // App icon for Next App Router (auto-becomes favicon)
  await sharp(buf)
    .extract(CROP)
    .resize(512, 512, { fit: "contain", background: "#ffffff" })
    .png({ quality: 92 })
    .toFile(path.join(ROOT, "app/icon.png"));

  // Apple touch icon
  await sharp(buf)
    .extract(CROP)
    .resize(180, 180, { fit: "contain", background: "#ffffff" })
    .png({ quality: 92 })
    .toFile(path.join(ROOT, "app/apple-icon.png"));

  console.log("✓ logo assets built");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
