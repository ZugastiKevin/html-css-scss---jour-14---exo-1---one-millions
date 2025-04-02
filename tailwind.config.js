/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}","*.html"],
  theme: {
    extend: {
      colors: {
        newwine: '#d9534f',
        newred: '#e74c3c',
        newredfooter: '#f74c3c',
        newblack: '#222222',
        newgrey: '#f5f5f5',
      },
      fontFamily: {
        arvo: ['Arvo Regular'],
      }
    },
  },
  plugins: [],
}

