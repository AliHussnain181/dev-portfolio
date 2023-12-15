/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        Space: ['Space Grotesk', 'sans-serif'],
        Mono: ['Montserrat', 'sans-serif']
      }
      
    },
  },
  plugins: [],
}
