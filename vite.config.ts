import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// Plugins =>
import tsconfigPaths from 'vite-tsconfig-paths';
import { VitePWA } from 'vite-plugin-pwa';

// Manifest.json =>
import manifest from './manifest.json';

export default defineConfig({
  plugins: [
    preact(),
    tsconfigPaths(),
    VitePWA({
      manifest,
      includeAssets: ['/icons/preact.svg', '/icons/vite.svg'],
      devOptions: {
        enabled: true
      },
      workbox: {
        globPatterns: ['./index.html', '**/*.{js,ts,css,html}', '**/*.{svg,png,jpg,gif}']
      }
    })
  ],
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
});
