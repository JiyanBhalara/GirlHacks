/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'skillissue': "url('/src/assets/images/BG-Skillissue.jpeg')" // Update the path according to where your image is stored
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
