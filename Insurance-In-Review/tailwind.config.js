/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "grid-pattern": "url('/Grid Background')",
      },
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
      "insurify-grey": "#2B4148",
      "insurify-dark": "#1D1F22",
      "insurify-button-active": "#DBDBDB",
      "insurify-login-background": "#EDEDED",
      "insurify-grey-2": "#848484",
      "insurify-input": "#3A3A3A",
      "insurify-footer-banner": "#B99AF7",
    },
    // Custom font below
    fontFamily: {
      body: ["Montserrat", "sans-serif"],
      footer: ["Jomhuria", "san-serif"],
      "insurify-roboto": ["roboto"],
      "insurify-patua": ["patua"],
      "insurify-inter": ["inter"],
    },
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        xl: "1200px",
        "2xl": "1200px",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
  daisyui: {
    themes: ["light", "dark", "black"],
  },
};
