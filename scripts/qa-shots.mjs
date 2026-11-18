// Visual QA: serves dist/ on localhost, screenshots every route at
// mobile/tablet/desktop widths, and reports horizontal overflow +
// console errors. Usage: node scripts/qa-shots.mjs
import { chromium } from 'playwright-core';
import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'node:fs';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const outDir = path.join(root, 'qa', 'shots');
const { mkdirSync } = await import('node:fs');
mkdirSync(outDir, { recursive: true });

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
    const file = path.join(dist, p);
    const data = await readFile(file);
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] ?? 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end('not found');
  }
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const port = server.address().port;
const base = `http://127.0.0.1:${port}`;

const shells = globSync(`${process.env.HOME}/.cache/ms-playwright/chromium_headless_shell-*/chrome-headless-shell-linux64/chrome-headless-shell`);
if (!shells.length) throw new Error('no chromium headless shell found');
const browser = await chromium.launch({ executablePath: shells[0], args: ['--no-sandbox'] });

const routes = ['/', '/services/', '/services/interior-painting/', '/about/', '/projects/', '/pricing/', '/contact/'];
const widths = [390, 768, 1024, 1440];
const problems = [];

for (const route of routes) {
  for (const width of widths) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    const errors = [];
    page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
    page.on('pageerror', (e) => errors.push(String(e)));
    await page.goto(base + route, { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    const slug = route === '/' ? 'home' : route.replaceAll('/', '_').replace(/^_|_$/g, '');
    await page.screenshot({ path: path.join(outDir, `${slug}-${width}.png`), fullPage: true });
    if (overflow > 0) problems.push(`${route} @${width}: horizontal overflow ${overflow}px`);
    if (errors.length) problems.push(`${route} @${width}: console errors: ${errors.join(' | ').slice(0, 300)}`);
    await page.close();
  }
  console.log('done', route);
}
await browser.close();
server.close();
console.log(problems.length ? `\nPROBLEMS:\n${problems.join('\n')}` : '\nNo overflow or console errors.');
