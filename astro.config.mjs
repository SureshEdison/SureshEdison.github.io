import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://SureshEdison.github.io',
  base: '/my-repo',
  integrations: [tailwind()]
});