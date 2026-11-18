// Generate responsive variants for every master image in public/images.
// Photos (JPG masters): WebP + JPG at 480/800/1200/1600 (capped at the
// master width). Transparent cutouts (RGBA PNG masters): WebP + PNG at
// per-file widths. Avatars: 96/160 square WebP + JPG. OG: 1200x630 JPG.
// Variants are committed to git; the deploy build does not re-run this.
// Usage: node scripts/convert-images.mjs
import sharp from 'sharp';
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images');
const PHOTO_WIDTHS = [480, 800, 1200, 1600];
const CUTOUT_WIDTHS = {
  'hero-painter-cut': [480, 720, 841],
  'chair-scene-cut': [480, 800, 1200],
  'splash-flat-cut': [640, 1000, 1400, 1720],
};
const AVATARS = ['avatar-1', 'avatar-2', 'avatar-3', 'avatar-4', 'avatar-5'];
const SKIP = new Set(['hero-painter.png', 'chair-scene.png', 'splash-flat.png', 'og.jpg']);

const files = (await readdir(dir)).filter(
  (f) => /\.(jpe?g|png|webp)$/i.test(f) && !SKIP.has(f) && !/-\d{2,}\.(webp|jpg|jpeg|png)$/.test(f),
);
let made = 0;

for (const file of files) {
  const full = path.join(dir, file);
  const { name, ext } = path.parse(file);
  const meta = await sharp(full).metadata();
  const natural = meta.width ?? 0;
  if (AVATARS.includes(name)) {
    for (const w of [96, 160]) {
      for (const [fmt, opts] of [['webp', { quality: 80 }], ['jpeg', { quality: 82, mozjpeg: true }]]) {
        await sharp(full).resize(w, w, { fit: 'cover' })[fmt](opts).toFile(path.join(dir, `${name}-${w}.${fmt === 'jpeg' ? 'jpg' : fmt}`));
        made++;
      }
    }
    continue;
  }
  if (name === 'og-wide') {
    await sharp(full).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(dir, 'og.jpg'));
    made++;
    continue;
  }
  const cutout = CUTOUT_WIDTHS[name];
  const widths = (cutout ?? PHOTO_WIDTHS).filter((w) => w <= natural);
  if (!widths.includes(natural) && natural > 0 && natural <= 1600) widths.push(natural);
  for (const w of [...new Set(widths)].sort((a, b) => a - b)) {
    await sharp(full).resize(w).webp({ quality: 78 }).toFile(path.join(dir, `${name}-${w}.webp`));
    made++;
    if (cutout) {
      await sharp(full).resize(w).png({ compressionLevel: 9 }).toFile(path.join(dir, `${name}-${w}.png`));
    } else {
      await sharp(full).resize(w).jpeg({ quality: 80, mozjpeg: true }).toFile(path.join(dir, `${name}-${w}.jpg`));
    }
    made++;
  }
}
console.log(`done: ${made} variants from ${files.length} masters`);
