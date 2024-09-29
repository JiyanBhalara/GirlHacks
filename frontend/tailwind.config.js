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
        'dark-grey': '#C0C0C0',
        'Dark Slate': '#3B6978',
        'Deep Teal': '#204051',
        'Soft Teal': '#84A9AC',
        'Light Teal': '#E4E3E3'

      },
      backgroundImage: {
        'skillissue': "url('/src/assets/images/BG-Skillissue.png')",
        'gradient-to-b': 'linear-gradient(to bottom, #204051, #3B6978)',
        'gradient-to-r': 'linear-gradient(to right, #E4E3E3, #84A9AC)', // Update the path according to where your image is stored
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
