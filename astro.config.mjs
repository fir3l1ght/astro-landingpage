import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue()],
  site: 'https://fir3l1ght.github.io',
  base: '/astro-landingpage',
  build: {
    assets: 'assets'
  }
});