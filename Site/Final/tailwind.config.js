import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: { sans: ["Poppins", "sans-serif"] },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-background": "url('/img/HeadingBackground.jpg')",
      },
      colors: {
        primaryHomePage: "#725C4B",
        primaryHomePageHover: "#4c3c37",
        secondaryHomePage: "#685B53",
        tertiaryHomePage: "#CFB6A5",
        textColorHomePage: "#404040",
        backgroundHomePage: "#CFB6A5",
        primarySystemPage: "#54A749",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            primary: {
              DEFAULT: "#BEF264",
              foreground: "#A74949",
            },
            secondary: {
              DEFAULT: "#54A749",
              foreground: "#FFF",
            },
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {}, // dark theme colors
        },
      },
    }),
  ],
};
