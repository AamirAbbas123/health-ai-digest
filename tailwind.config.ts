import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0D7377",
          50: "#E6F5F5",
          100: "#CCE9EA",
          200: "#99D3D5",
          300: "#66BDC0",
          400: "#33A7AB",
          500: "#0D7377",
          600: "#0A5C5F",
          700: "#084547",
          800: "#052E2F",
          900: "#031718",
        },
        accent: {
          DEFAULT: "#84C318",
          50: "#F4FAE6",
          100: "#E8F5CC",
          200: "#D1EB99",
          300: "#BAE166",
          400: "#A3D733",
          500: "#84C318",
          600: "#6A9C13",
          700: "#4F750E",
          800: "#354E0A",
          900: "#1A2705",
        },
        surface: "#F4F6F8",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
