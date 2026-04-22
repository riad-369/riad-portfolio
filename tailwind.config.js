/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: "#0a0a0f",
        light: "#fafafa",
        primary: "#6366f1",
        primaryDark: "#818cf8",
        accent: "#10b981",
        muted: "#64748b",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.35) 2px,#fafafa 5px,#fafafa 100px)",
        circularDark:
          "repeating-radial-gradient(rgba(255,255,255,0.4) 2px,#0a0a0f 8px,#0a0a0f 100px)",
        circularLightLg:
          "repeating-radial-gradient(rgba(0,0,0,0.35) 2px,#fafafa 5px,#fafafa 80px)",
        circularDarkLg:
          "repeating-radial-gradient(rgba(255,255,255,0.4) 2px,#0a0a0f 8px,#0a0a0f 80px)",
        circularLightMd:
          "repeating-radial-gradient(rgba(0,0,0,0.35) 2px,#fafafa 5px,#fafafa 60px)",
        circularDarkMd:
          "repeating-radial-gradient(rgba(255,255,255,0.4) 2px,#0a0a0f 6px,#0a0a0f 60px)",
        circularLightSm:
          "repeating-radial-gradient(rgba(0,0,0,0.35) 2px,#fafafa 5px,#fafafa 40px)",
        circularDarkSm:
          "repeating-radial-gradient(rgba(255,255,255,0.4) 2px,#0a0a0f 4px,#0a0a0f 40px)",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "479px" },
    },
  },
  plugins: [],
}
