import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://tutorial-astro-1031.vercel.app/",
  integrations: [preact()]
});