import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // test: {
  //   /* for example, use global to avoid globals imports (describe, test, expect): */
  //   // globals: true,
  // },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    minify: 'esbuild',
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.js'),
      name: 'device-type',
      fileName: (format) => `my-lib.${format}.js`,
    },
    rollupOptions: {
      input: path.resolve(__dirname, 'src/components/index.js'),
      output: {
        globals: {
          js: 'JS',
        },
      },
    },
  },
});