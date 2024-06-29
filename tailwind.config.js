/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        garamond: ['Garamond', 'serif']
      },
      colors: {
        'retro-black': '#423f3f',
        'retro-blue': '#336b8b',
        'retro-green': '#83984d',
        'retro-yellow': '#f0b51f',
        'retro-orange': '#ea700b',
        'red': '#cc0000'
      }
    },
  },
  plugins: [],
}