/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    },
    screens: {
      '2xs': "280px",
      xs: '430px',
      xsm:'480px',
      sm: '720px',
      md: '980px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1444px'
    }
  },
  plugins: [],
}