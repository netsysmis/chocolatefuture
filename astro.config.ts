import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Configuration for The Chocolate Future site (simple landing page)
export default defineConfig({
  output: 'static',
  base: '/',
  compress: true,

  build: {
    target: 'es2021',
  },

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
