import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pistachio: {
          50: "#FBFADA",
          100: "#E5D9B6",
          200: "#ADBC9F",
          300: "#A4BE7B",
          400: "#436850",
          500: "#5F8D4E",
          600: "#367c2b",
          700: "#2f6742",
          800: "#285430",
          900: "#0a5133",
        },
      },
    },
  },
  plugins: [],
};
export default config;
