import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      // Optimize and convert images to WebP
      webp: {
        quality: 80,
      },
      // Also optimize PNG
      png: {
        quality: 80,
      },
      // Also optimize JPEG
      jpeg: {
        quality: 80,
      },
      // Also optimize JPG
      jpg: {
        quality: 80,
      },
    }),
  ],
});
