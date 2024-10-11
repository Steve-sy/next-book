import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  // theme: {
  //   extend: {
  //     colors: {
  //       wawa: "#FFFFFF",
  //       soso: "#000000",
  //     },
  //   },
  // },
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sad: "#000000", // Add your custom color here for Tailwind
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            secondary: {
              DEFAULT: "#111111",
              foreground: "#ffffff",
            },
          },
        },
        dark: {
          colors: {
            happy: "#000000",
          },
        },
      },
    }),
  ],
};
