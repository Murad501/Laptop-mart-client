/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        marttheme: {

          primary: "#149777",

          neutral: "#212121",

          black: "#121212",

          warning: "#FFC800",

        },
      },
    ],
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
