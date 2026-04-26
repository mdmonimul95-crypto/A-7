/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./context/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        keenkeeper: {
          primary: "#2d6a4f",
          "primary-content": "#ffffff",
          secondary: "#52b788",
          "secondary-content": "#ffffff",
          accent: "#b7e4c7",
          neutral: "#1b4332",
          "neutral-content": "#d8f3dc",
          "base-100": "#f8faf8",
          "base-200": "#eef3ee",
          "base-300": "#dce8dc",
          "base-content": "#1a2e1a",
          info: "#4cc9f0",
          success: "#52b788",
          warning: "#f4a261",
          error: "#e63946",
        },
      },
    ],
  },
};
