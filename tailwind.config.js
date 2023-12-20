/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.jsx",
    "./src/**/*.jsx",
    "./src/**/**/*.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
        sans: "'Open Sans', sans-serif"
      },
      screens:{
        'xs' : '450px'
      }
    },
  },
  plugins: [],
  darkMode: "class"
}

