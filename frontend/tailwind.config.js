/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'phone': '400px',
        'tablet': '1100px',
        'laptop': '1280px',
        'desktop': '1580px',
      },
    },
    colors: {
      orange: "#F28853",
      red: "#C75922",
    },
  },
  plugins: [],
}
