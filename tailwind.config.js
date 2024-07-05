/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        // "custom-outer": "0 0 16px 0 #7000ff",
        "custom-inner": "inset 0 0 2px 0 #7000ff",
        "custom-outer": ".5px .5px 15px 4px #7000ff",
      },
      textShadow: {
        glow: ".5px .5px 15px rgb(247, 60, 60)",
      },
      backgroundImage: (theme) => ({
        "custom-gradient":
          "linear-gradient(180deg, #011629 0%, #5B00CE 100%), linear-gradient(180deg, rgba(112, 0, 255, 0.15) 0%, rgba(112, 0, 255, 0.15) 100%)",
      }),
      colors: {
        primaryDark: "#010F1D",
        primaryMedium: "#5B00CE",
        primaryLight: "#7000FF",
        accentDark: "#010F1D",
        // accentMedium: "#FF7F50",
        // accentLight: "#FFD700",
        secondaryGray: "#9B82BA",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
}