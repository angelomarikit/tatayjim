import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve("public/assets/tatay-jim");
const derived = path.join(root, "derived");
fs.mkdirSync(derived, { recursive: true });

const copies = [
  ["855449982_122154005529077573_4000979981115785026_n.jpg", "brand-logo.jpg"],
  ["856916056_122093268255528436_6030579312930544088_n.jpg", "herbal-liniment.jpg"],
  ["856852101_122093273511528436_1565702018176222890_n.jpg", "magnesium-therapy-oil.jpg"],
  ["858013413_122093271123528436_4827092704498500916_n.jpg", "bio-cleanser-alkaline-drops.jpg"],
  ["858242554_122093275065528436_4304958992678988710_n.jpg", "herbal-liniment-reseller.jpg"],
  ["831570263_1098951625880563_1383281222192263783_n.jpg", "membership-business-poster.jpg"],
];

for (const [src, dest] of copies) {
  fs.copyFileSync(path.join(root, src), path.join(root, dest));
}

async function extractRegion(file, dest, box) {
  const abs = path.join(root, file);
  const meta = await sharp(abs).metadata();
  const fullW = meta.width ?? 1;
  const fullH = meta.height ?? 1;
  const left = Math.round(fullW * box.x);
  const top = Math.round(fullH * box.y);
  const width = Math.round(fullW * box.w);
  const height = Math.round(fullH * box.h);
  await sharp(abs)
    .extract({ left, top, width, height })
    .webp({ quality: 82 })
    .toFile(path.join(derived, dest));
  console.log(`${dest} ${width}x${height}`);
}

await sharp(path.join(root, "brand-logo.jpg"))
  .resize(960)
  .webp({ quality: 86 })
  .toFile(path.join(derived, "brand-logo.webp"));

await extractRegion("herbal-liniment.jpg", "liniment.webp", { x: 0, y: 0, w: 0.47, h: 1 });
await extractRegion("magnesium-therapy-oil.jpg", "magnesium.webp", { x: 0, y: 0, w: 0.45, h: 1 });
await extractRegion("bio-cleanser-alkaline-drops.jpg", "biocleanser.webp", { x: 0, y: 0, w: 0.5, h: 0.74 });
await extractRegion("herbal-liniment.jpg", "hero.webp", { x: 0, y: 0, w: 0.48, h: 0.94 });
await extractRegion("bio-cleanser-alkaline-drops.jpg", "ingredients.webp", { x: 0, y: 0, w: 0.52, h: 0.72 });
await extractRegion("magnesium-therapy-oil.jpg", "howto.webp", { x: 0, y: 0.04, w: 0.5, h: 0.92 });
