<<<<<<< HEAD
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
=======
import path from 'path';
import { defineConfig } from 'astro/config';

import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import compress from 'astro-compress';
import type { AstroIntegration } from 'astro';

// Configuration for The Chocolate Future site
>>>>>>> 74b3d92 (Fix Astro config to work with GitHub Actions)

// Configuration for The Chocolate Future site (simple landing page)
export default defineConfig({
  output: 'static',
  base: '/',
  compress: true,

<<<<<<< HEAD
  build: {
    target: 'es2021',
  },

  integrations: [sitemap()],
=======
  output: 'static',

  integrations: [
    sitemap(),
  ],
>>>>>>> 74b3d92 (Fix Astro config to work with GitHub Actions)

  vite: {
    plugins: [tailwindcss()],
  },
});
