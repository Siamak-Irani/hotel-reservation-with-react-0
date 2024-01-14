/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xsm: "576px",
      xlg: "992px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primaryColor: "var(--primaryColor)",
        mainWhite: "var(--mainWhite)",
        offWhite: "var(--offWhite)",
        mainBlack: "var(--mainBlack)",
        mainGrey: "var(--mainGrey)",
        darkGrey: "var(--darkGrey)",
      },
      transitionProperty: {
        mainTransition: "all",
      },
      transitionDuration: {
        mainTransition: "0.3s",
      },
      transitionTimingFunction: {
        mainTransition: "linear",
      },
      letterSpacing: {
        mainSpacing: "var(--mainSpacing)",
      },
      boxShadow: {
        lightShadow: "var(--lightShadow)",
        darkShadow: "var(--darkShadow)",
      },
      maxWidth: {
        "1170px": "1170px",
      },
      width: {
        "95vw": "95vw",
        "90vw": "90vw",
        "80vw": "80vw",
      },
      minHeight: {
        "calc(100vh-66px)": "calc(100vh - 66px)",
      },
      gridTemplateColumns: {
        "repeat(auto-fit, minmax(330px, 1fr))":
          "repeat(auto-fit, minmax(330px, 1fr))",
      },
    },
  },
  plugins: [],
};
