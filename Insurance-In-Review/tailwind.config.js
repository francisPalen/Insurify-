/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {},
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      bubblegum: "#ff77e9",
      bermuda: "#78dcca",
      // Insurify colour scheme below
      "insurify-purple": "#5E17EB",
    },
    //custom font
    fontFamily: {
      body: ["Montserrat", "sans-serif"],
      footer: ["Jomhuria", "san-serif"],
      "insurify-roboto": ["roboto"],
    },
  },
  plugins: [require("daisyui")],
};
