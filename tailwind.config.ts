import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./app/components/**/*.{ts,tsx}",
    "./app/sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#a855f7",
        dim: "#2a2a2a",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
        serif: ["var(--font-instrument)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
