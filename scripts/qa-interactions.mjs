// Interaction QA: drives the calculator, visualizer, booking calendar,
// sliders, menus and filters in a headless browser and reports pass/fail.
// Usage: node scripts/qa-interactions.mjs
import { chromium } from 'playwright-core';
import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'node:fs';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const TYPES = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.svg': 'image/svg+xml', '.woff2': 'font/woff2',
  '.xml': 'application/xml', '.txt': 'text/plain',
};
const server = http.createServer(async (req, res) => {
  try {
    let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    if (p.endsWith('/')) p += 'index.html';
    const data = await readFile(path.join(dist, p));
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] ?? 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end('not found');
  }
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const base = `http://127.0.0.1:${server.address().port}`;
const shells = globSync(`${process.env.HOME}/.cache/ms-playwright/chromium_headless_shell-*/chrome-headless-shell-linux64/chrome-headless-shell`);
const browser = await chromium.launch({ executablePath: shells[0], args: ['--no-sandbox'] });

let pass = 0;
let fail = 0;
const check = (name, ok, extra = '') => {
  if (ok) { pass++; console.log(`  PASS ${name}`); }
  else { fail++; console.log(`  FAIL ${name} ${extra}`); }
};

const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', (e) => errors.push(String(e)));

// Quote calculator
console.log('quote calculator');
await page.goto(base + '/quote/', { waitUntil: 'networkidle' });
const out0 = await page.locator('[data-q-output]').innerText();
check('default estimate renders', /\$\d/.test(out0), out0);
await page.locator('[data-q-type="exterior"]').click();
const out1 = await page.locator('[data-q-output]').innerText();
check('exterior changes estimate', out1 !== out0 && /\$\d/.test(out1), out1);
check('sqft field visible', await page.locator('[data-q-field="exterior"]').isVisible());
await page.locator('[data-q-type="commercial"]').click();
check('commercial shows custom quote', (await page.locator('[data-q-output]').innerText()) === 'Custom quote');
await page.locator('[data-q-type="interior"]').click();
await page.locator('[data-q-quality="1.5"]').click();
const out2 = await page.locator('[data-q-output]').innerText();
check('best quality raises estimate', out2 !== out0, `${out0} -> ${out2}`);
await page.locator('[data-q-extra="120"]').check();
const out3 = await page.locator('[data-q-output]').innerText();
check('extra raises estimate', out3 !== out2, `${out2} -> ${out3}`);
const hidden = await page.locator('[data-q-hidden]').inputValue();
check('hidden estimate summary updates', hidden.includes('Ballpark') && hidden.includes('Best'), hidden);

// Color visualizer
console.log('color visualizer');
await page.goto(base + '/colors/', { waitUntil: 'networkidle' });
await page.locator('[data-viz-swatch="#1F3A5F"]').click();
check('swatch updates label', (await page.locator('[data-viz-label]').innerText()).includes('Deep Navy'));
await page.locator('[data-viz-room-btn="1"]').click();
check('bedroom room shows', await page.locator('[data-viz-room="1"]').isVisible());
await page.locator('[data-viz-intensity]').fill('70');
check('intensity updates tint opacity', (await page.locator('[data-viz-tint]').evaluate((el) => el.style.opacity)) === '0.7');

// Booking calendar
console.log('booking calendar');
await page.goto(base + '/book/', { waitUntil: 'networkidle' });
const dayCount = await page.locator('[data-book-days] button').count();
check('12 bookable days render', dayCount === 12, `got ${dayCount}`);
await page.locator('[data-book-days] button').nth(1).click();
const slotCount = await page.locator('[data-book-slots] button').count();
check('8 slots render', slotCount === 8, `got ${slotCount}`);
check('date input filled', (await page.locator('[data-book-date-input]').inputValue()).length > 3);
await page.locator('[data-book-slots] button:not([disabled])').first().click();
check('time input filled', (await page.locator('[data-book-time-input]').inputValue()).length > 3);

// Home: sliders + menus
console.log('home interactions');
await page.goto(base + '/', { waitUntil: 'networkidle' });
await page.waitForTimeout(1200);
check('testimonial dots render', (await page.locator('[data-ts-dots] button').count()) >= 2);
const before = await page.locator('[data-ts-track]').evaluate((el) => el.scrollLeft);
await page.locator('[data-ts-next]').click();
await page.waitForTimeout(700);
const after = await page.locator('[data-ts-track]').evaluate((el) => el.scrollLeft);
check('testimonial next scrolls', after > before, `${before} -> ${after}`);
const clip0 = await page.locator('[data-ba-before]').evaluate((el) => el.style.clipPath);
await page.locator('[data-ba-range]').evaluate((el) => {
  el.value = '80';
  el.dispatchEvent(new Event('input', { bubbles: true }));
});
const clip1 = await page.locator('[data-ba-before]').evaluate((el) => el.style.clipPath);
check('before/after slider moves clip', clip0 !== clip1, `${clip0} -> ${clip1}`);
check('hero title split into lines', (await page.locator('[data-hero-title] > div').count()) >= 1);
await page.locator('#more-btn').click();
await page.waitForTimeout(300);
check('more dropdown opens', await page.locator('#more-panel').isVisible());
await page.keyboard.press('Escape');
await page.waitForTimeout(300);
check('escape closes dropdown', !(await page.locator('#more-panel').isVisible()));
await page.locator('#ann-dismiss').click();
check('announcement dismisses', (await page.locator('#ann-bar').count()) === 0);

// FAQ + filter
console.log('faq + filter');
await page.goto(base + '/faq/', { waitUntil: 'networkidle' });
await page.locator('[data-faq-btn]').nth(1).click();
check('faq panel opens', await page.locator('[data-faq-panel]').nth(1).evaluate((el) => el.classList.contains('grid-rows-[1fr]')));
await page.goto(base + '/projects/', { waitUntil: 'networkidle' });
await page.locator('[data-filter-btn="Exterior"]').click();
const visibleCards = await page.locator('[data-category]:not(.hidden)').count();
check('filter shows only exterior', visibleCards === 1, `got ${visibleCards}`);

// Mobile: menu + sticky CTA
console.log('mobile');
const mob = await browser.newPage({ viewport: { width: 390, height: 844 } });
mob.on('pageerror', (e) => errors.push('mobile: ' + String(e)));
await mob.goto(base + '/', { waitUntil: 'networkidle' });
await mob.locator('#menu-btn').click();
check('mobile menu opens', await mob.locator('#mobile-menu').isVisible());
await mob.locator('#mobile-menu a[href="/quote/"]').first().click();
check('mobile menu navigates to quote', mob.url().includes('/quote/'));
await mob.goto(base + '/', { waitUntil: 'networkidle' });
check('sticky CTA visible on mobile', await mob.locator('#sticky-cta').isVisible());
await mob.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await mob.waitForTimeout(600);
check('sticky CTA hides near footer', await mob.locator('#sticky-cta').evaluate((el) => el.classList.contains('translate-y-full')));
check('no console/page errors anywhere', errors.length === 0, errors.slice(0, 3).join(' | '));

await browser.close();
server.close();
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
