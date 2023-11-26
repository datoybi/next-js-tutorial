/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "sans-serif"],
        sans: ["var(--font-exo2)", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
