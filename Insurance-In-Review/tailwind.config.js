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
    },
    // Custom font below
    fontFamily: {
      body: ["Montserrat", "sans-serif"],
      footer: ["Jomhuria", "san-serif"],
      "insurify-roboto": ["roboto"],
      "insurify-patua": ["patua"],
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#570df8",
          "primary-focus": "#4506cb",
          "primary-content": "#ffffff",
          secondary: "#f000b8",
          "secondary-focus": "#bd0091",
          "secondary-content": "#ffffff",
          accent: "#37cdbe",
          "accent-focus": "#2aa79b",
          "accent-content": "#ffffff",
          neutral: "#3d4451",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#d1d5db",
          "base-content": "#1f2937",
          info: "#2094f3",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
    ],
  },
};
