import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "node:url";

const resolve = (path: string) => {
  return fileURLToPath(new URL(path, import.meta.url));
};

const getStyleImports = (path: string[]) =>
  path.map((path) => `@import "@/assets/styles/${path}";`).join("");

const buildTimeStyles = ["buildtime.scss"];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: getStyleImports(buildTimeStyles),
      },
    },
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve("./src"),
      },
    ],
  },
});
