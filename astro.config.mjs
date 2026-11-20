import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://painter-static.pages.dev',
  // Cloudflare Pages enforces a trailing slash on directory builds (308
  // otherwise); keep config + canonicals + sitemap + internal links aligned.
  trailingSlash: 'always',
  // The search page is noindex (it is a tool, not content) — keep it out
  // of the sitemap too; @astrojs/sitemap does not exclude noindex pages
  // on its own.
  integrations: [sitemap({ filter: (page) => !page.endsWith('/search/') })],
  vite: { plugins: [tailwindcss()] },
});
