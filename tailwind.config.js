/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif'],
      Fraunces: ['Fraunces', 'serif'],
    },
    extend: {
      colors: {
        primary: '#f2ebe3',
        secondary: '#3c8067',
        accent: '#fff',
        'text-tittle': '#1c232b',
        'text-paragraph': '#6c7289',
      },
    },
  },
  plugins: [],
};
