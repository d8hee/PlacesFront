/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Pacifico': ['Pacifico', 'cursive'],
        'Inter': ['Inter', 'sans-serif']
      },
      colors:{
        'offwhite': '#FAF9F6',
        'bloo': '#407ef7d9',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

