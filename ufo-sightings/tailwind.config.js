/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Define custom palette to reflect the cosmic aesthetic described.
        background: {
          DEFAULT: '#040d1a',
          light: '#071d2e',
        },
        primary: {
          DEFAULT: '#00b0ff',
          dark: '#007acc',
        },
        accent: {
          DEFAULT: '#ff4081',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};