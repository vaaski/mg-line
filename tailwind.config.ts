import { defineConfig } from "vite-plugin-windicss"
import defaultTheme from "windicss/defaultTheme"

const { sans, mono } = defaultTheme.fontFamily

export default defineConfig({
  darkMode: "class",
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      DEFAULT: ["ManropeVariable"],
      sans: ["ManropeVariable", ...sans],
      mono: ['"Roboto Mono"', ...mono],
    },
  },
})
