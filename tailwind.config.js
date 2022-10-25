/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebasNue: ["Bebas Neue", "cursive"],
      },
      colors: {
        primaryColor: "#E50914",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
