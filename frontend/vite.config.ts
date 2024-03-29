import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath} from 'node:url';

const resolve = (path: string) => {
  return fileURLToPath(new URL(path, import.meta.url));
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve('./src')
      }
    ]
  }
})
