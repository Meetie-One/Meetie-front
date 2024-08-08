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
        primary: {
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
        },
        info: {
          50: "var(--info-50)",
          100: "var(--info-100)",
          150: "var(--info-150)",
          200: "var(--info-200)",
          300: "rgb(from var(--info-300) r g b / <alpha-value>)",
          400: "var(--info-400)",
          500: "var(--info-500)",
          600: "rgb(from var(--info-600) r g b / <alpha-value>)",
        },
        gray: {
          100: "var(--gray-100)",
          200: "var(--gray-200)",
          300: "var(--gray-300)",
          400: "rgb(from var(--gray-400) r g b / <alpha-value>)",
          500: "var(--gray-500)",
          600: "var(--gray-600)",
        },
        white: "var(--white)",
        black: "var(--black)",
      },
    },
    fontSize: {
      "bold-24": ["24px", { lineHeight: "140%", fontWeight: 700 }],
      "bold-20": ["20px", { lineHeight: "140%", fontWeight: 700 }],
      "bold-18": ["18px", { lineHeight: "140%", fontWeight: 700 }],
      "bold-16": ["16px", { lineHeight: "140%", fontWeight: 700 }],
      "bold-14": ["14px", { lineHeight: "140%", fontWeight: 700 }],
      "semibold-24": ["24px", { lineHeight: "140%", fontWeight: 600 }],
      "semibold-20": ["20px", { lineHeight: "140%", fontWeight: 600 }],
      "semibold-18": ["18px", { lineHeight: "140%", fontWeight: 600 }],
      "semibold-16": ["16px", { lineHeight: "140%", fontWeight: 600 }],
      "semibold-14": ["14px", { lineHeight: "140%", fontWeight: 600 }],
      "semibold-12": ["12px", { lineHeight: "140%", fontWeight: 600 }],
      "medium-16": ["16px", { lineHeight: "140%", fontWeight: 500 }],
      "medium-14": ["14px", { lineHeight: "140%", fontWeight: 500 }],
      "medium-12": ["12px", { lineHeight: "140%", fontWeight: 500 }],
      "medium-10": ["10px", { lineHeight: "140%", fontWeight: 500 }],
      "regular-16": ["16px", { lineHeight: "140%", fontWeight: 400 }],
      "regular-14": ["14px", { lineHeight: "140%", fontWeight: 400 }],
      "regular-12": ["12px", { lineHeight: "140%", fontWeight: 400 }],
      "regular-10": ["10px", { lineHeight: "140%", fontWeight: 400 }],
    },
  },
  plugins: [],
};
export default config;
