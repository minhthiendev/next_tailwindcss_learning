const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "login-background": "url('/images/loginBackground.jpg')",
      },
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
        10000: "10000ms",
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out  ",
        // bigAndSmall: "bigAndSmall 2s linear ",
        bigAndSmall: "bigAndSmall 3s ease-in 1",
        scaleX: "scaleX 300ms ease-in  1",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        bigAndSmall: {
          "0%": {
            transform: "scale(0.2)",
          },
          "33%": {
            transform: "scale(0.4)",
          },
          "50%": {
            transform: "scale(0.6)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        scaleX: {
          "0%": { transform: "translate(-100%,0)" },
        },
      },
    },
    screens: {
      xs: "400px",
      // => @media (min-width: 400px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {
    extend: {
      backgroundImage: ["hover", "focus"],
    },
  },
  plugins: [],
};
