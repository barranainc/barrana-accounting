import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://barranaaccounting.ai',
  compressHTML: true,
  integrations: [sitemap()],
});
