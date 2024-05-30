module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightGreen: '#ccffcc', // Define your light green color here
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
};
