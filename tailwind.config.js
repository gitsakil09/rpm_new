module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.40rem",
        "2xl": "1.5rem",
        "3xl": "1.75rem",
        "4xl": "2.25rem",
        "5xl": "3.5rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    colors: {
      gray: {
        100: "#F3F3F3",
        200: "#CCCCCC",
        DEFAULT: "#999999",
      },
      black: {
        500: "#334457",
        600: "#364658",
        DEFAULT: "#000000",
      },
      white: {
        DEFAULT: "#ffffff",
      },
      sky: {
        300: "#5888B5",
        DEFAULT: "#00ACF3",
        blue: "#54ACDA",
        dark: "#364658",
        light: "#C1D6ED",
      },
      blue: {
        DEFAULT: "#7d38ba",
        dark: "#365F86",
        light: "#CDE4F4",
      },
      orange: {
        DEFAULT: "#FFAD62",
      },
      pink: {
        DEFAULT: "#E8737E",
      },
      green: {
        DEFAULT: "#5ACD3D",
      },
    },
    fontFamily: {
      sans: ["ubuntu, Verdana, Arial, sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
