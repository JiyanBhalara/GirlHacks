/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-teal': '#b2d8d8',
        'mid-teal': '#66b2b2',
        'dark-teal': '#008080'
      },
      backgroundImage: {
        'skillissue': "url('/src/assets/images/BG-Skillissue.png')" // Update the path according to where your image is stored
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
