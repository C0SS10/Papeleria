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
          50: '#b7efc5ff',
          100: '#92e6a7ff',
          200: '#6ede8aff',
          300: '#4ad66dff',
          400: '#2dc653ff',
          500: '#25a244ff',
          600: '#208b3aff',
          700: '#1a7431ff',
          800: '#155d27ff',
          900: '#10451dff',
        },
      },
    },
  },
  plugins: [],
};
export default config;
