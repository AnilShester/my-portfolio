/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000300',
        secondary: '#444',
        accent: '#ee5f37',
      },
      fontFamily: {
        signature: ['Great Vibes'],
      },
    },
  },
  plugins: [],
}
