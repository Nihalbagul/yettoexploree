/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Correct path for JSX/TSX files
  ],
  theme: {
    extend: {
      fontFamily: {
        battambang: ['Battambang', 'sans-serif'], 
        montserrat: ['Montserrat', 'sans-serif'], 
        abhaya: ['Abhaya Libre', 'serif'], 
        milliard:['Milliard','sans-serif'],
      },
    },
  },
  plugins: [], // You can add plugins here if needed
};
