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
      colors: {
        orange: "#F28853",
        red: "#C75922",
        'gray-custom': '#5F5F5F',
        'system-blue': '#007bff',
        'error-red': '#ff0000',
      },
      fontWeight: {
        'bold-700': '700',
      },
      fontSize: {
        '30px': '30px',
      },
      lineHeight: {
        '45px': '45px',
      },
      width: {
        '749px': '749px',
      },
    },
  },
  plugins: [],
}
