/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        garamond: ['Garamond', 'serif'],
        fira: ['Fira Sans', 'san-serif']
      },
      colors: {
        //dark mode
        'dark-background': '#091B2F',
        'dark-title': '#D76955',
        'dark-link': '#52544D',
        'dark-normal': '#F9D0C8',
        'dark-icon': '#D76955',
        'dark-boxes': '#D78782',
        'dark-hover': '#52544D',

        //light mode
        'background': '#FFFFFF',
        'title': '#cc0000',
        'link': '#cc0000',
        'normal': '#000000',
        'icon': '#cc0000',
        'boxes': '#000000',
        'hover': '#e2e8f0'
      }
    },
  },
  plugins: [],
}