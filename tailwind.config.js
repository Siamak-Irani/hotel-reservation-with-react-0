/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
      },
    },
  },
  plugins: [],
};
