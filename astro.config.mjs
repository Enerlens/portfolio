import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://melvynraymond.com',
  integrations: [tailwind()],
  build: {
    format: 'file',
  },
});
