import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://zar-blog.pages.dev',
  output: "server",
  adapter: cloudflare()
});