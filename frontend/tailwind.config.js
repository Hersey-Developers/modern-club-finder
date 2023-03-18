/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'phone': '549px',
        'tablet': '700px',
        'laptop': '1275px',
        'desktop': '1600px',
      },
    },
    colors: {
      orange: "#F28853",
      red: "#C75922",
    },
  },
  plugins: [],
}
