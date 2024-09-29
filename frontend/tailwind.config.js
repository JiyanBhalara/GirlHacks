/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-grey': '#eaecef',
        'mid-grey': '#D3D3D3',
        'dark-grey': '#C0C0C0'
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
