import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
    },
    extend: {
      colors: {
        primary: {
          "500": "#248FF4",
        },
        light: {
          "900": "#FFFFFF",
          "850": "#F9F9F9",
          "800": "#F4F4F4",
          "750": "#E4E4E4",
          "700": "#D9D9D9",
          "600": "#BFBFBF",
          "500": "#ABABAB",
          "400": "#78838B",
          "300": "#374957",
          "200": "#202B34",
          "150": "#10171C",
          "100": "#0A0A0A",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
