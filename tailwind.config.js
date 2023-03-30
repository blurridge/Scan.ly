/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'green-1':'#B0E759',
        'green-2':'#8DE37D',
        'green-3':'#8EE8BD'
      },
      fontFamily: {
        'title': ['Inter'],
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin")]
}