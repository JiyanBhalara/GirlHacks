/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('../public/skillissue.png')",
      },
      brightness: {
        '50': '.5', // 50% brightness
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
