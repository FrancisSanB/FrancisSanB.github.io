/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        garamond: ['Garamond', 'serif'],
        fira: ['Fira Sans', 'san-serif']
      },
      colors: {
        'retro-black': '#423f3f',
        'retro-blue': '#336b8b',
        'retro-green': '#83984d',
        'retro-yellow': '#f0b51f',
        'retro-orange': '#ea700b',
        'red': '#cc0000',
        'teal': '#469597',
        'light-teal': '#5BA199',
        'gray': '#BBC6C8',
        'white': '#E5E3E4',
        'sand': '#DDBEAA',
        'navy': '#091B2F',
        'pink': '#F9D0C8',

        //dark mode
        'dark-background': '#091B2F',
        'dark-title': '#D76955',
        'dark-link': '#52544D',
        'dark-normal': '#F9D0C8',
        'dark-icon': '#D76955',
        'dark-boxes': '#D78782',

        //light mode
        'background': '#FFFFFF',
        'title': '#cc0000',
        'link': '#cc0000',
        'normal': '#000000',
        'icon': '#cc0000',
        'boxes': '#000000',
      }
    },
  },
  plugins: [],
}