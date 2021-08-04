import { resolve } from "path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

import WindiCSS from "vite-plugin-windicss"
import viteSvgIcons from "vite-plugin-svg-icons"

export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    viteSvgIcons({
      iconDirs: [resolve(process.cwd(), "src/assets/icons")],
      symbolId: "icon-[dir]-[name]",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      $: resolve(__dirname, "./types"),
    },
  },
})
