/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '475px',
      ...require('tailwindcss/defaultTheme').screens,
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
