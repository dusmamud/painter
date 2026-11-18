import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://painter-static.pages.dev',
  // Cloudflare Pages enforces a trailing slash on directory builds (308
  // otherwise); keep config + canonicals + sitemap + internal links aligned.
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
