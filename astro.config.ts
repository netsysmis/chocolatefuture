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

export default defineConfig({
  output: 'static',

  output: 'static',

  integrations: [
    sitemap(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
