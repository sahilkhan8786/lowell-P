/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs':'325px'
      },
      colors: {
        "flag-red": '#be0b31',
        "flag-blue": '#002768',
        "flag-blue-light": "#0027689e",
        "flag-red-light": "#be0b318f",
      }
    }
  },
  plugins: [],
};
