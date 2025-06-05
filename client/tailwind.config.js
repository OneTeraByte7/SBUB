/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Enable Tailwind in all src/ files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D1B2A", // Dark Blue
        accent: "#E63946",  // Red
      },
      fontFamily: {
        sans: ['"Cunia"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
