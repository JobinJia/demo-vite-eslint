import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import eslintPlugin from "@nabla/vite-plugin-eslint";
import vuePlugin from "@nabla/vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vuePlugin({
    eslintOptions: {
      cache: false
    },
    shouldLint: (path) => /\/src\/.*\.(vue|[t]sx?)$/.test(path),
  })]
})
