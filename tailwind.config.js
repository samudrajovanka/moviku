const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      zinc: colors.zinc,
      purple: colors.purple,
      yellow: colors.yellow,
      amber: colors.amber,
      pink: colors.pink,
      red: colors.red,
      green: {
        50: '#ecfaed',
        100: '#c3f0c8',
        200: '#a5e8ae',
        300: '#7cde88',
        400: '#63d871',
        500: '#3cce4e',
        600: '#37bb47',
        700: '#2b9237',
        800: '#21712b',
        900: '#195721'
      }
    }
  },
  plugins: []
};
