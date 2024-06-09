import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      color: {
        black: {
          DEFAULT: "#000",
        },
        grey: {
          DEFAULT: "#6b7280",
          200: "#E0E0E0",
          300: "#ABABAB",
          400: "#808080",
          500: "#666666",
          600: "#5C5C5C",
          700: "404040",
        },
        blue: {
          DEFAULT: "#1d4ed8",
          300: "#98D0FF",
          600: "#003857",
          700: "#3d5466",
        },
        yellow: {
          DEFAULT: "#fde047",
          300: "#FFF5DF",
          600: "#FFB307",
          700: "#665b42",
        },
        green: {
          DEFAULT: "#84cc16",
          300: "#CAFEC5",
          400: "#08DD1D",
          500: "#00FF1A",
          700: "#51664f",
        },
        pink: {
          DEFAULT: "#fca5a5",
          300: "#FEC5D6",
          700: "#664F56",
        },
        violet: {
          DEFAULT: "#7c3aed",
          400: "#C5CEFE",
          700: "#4F5266",
        },
      },
    },
  },
  plugins: [],
}
export default config
