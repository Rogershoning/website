// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // De 'snufjes' (View Transitions) zijn nu standaard, 
  // dus we hebben geen experimental vlag meer nodig.
  integrations: [tailwind()],
});
