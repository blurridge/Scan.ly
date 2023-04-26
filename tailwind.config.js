/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'green-1':'#6ee7b7',
        'green-2':'#10b981',
        'green-3':'#047857'
      },
      fontFamily: {
        'title': ['Inter'],
      },
      screens: {
        '2xl': '1440px',
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")]
}