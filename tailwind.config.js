module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg"],
  theme: {
    extend: {
      container: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
      colors: {
        primary: {
          50: "#f5f6f0",
          100: "#eaead7",
          200: "#d6d4b2",
          300: "#beba86",
          400: "#aba364",
          500: "#9c9156",
          600: "#8f804e",
          700: "#6c5c3c",
          800: "#5c4e37",
          900: "#504433",
          950: "#2d251b",
        },
      },
      fontFamily: {
        serif: ["Quattrocento", "serif"],
        sans: ["Open Sans", "sans-serif"],
        symbol: '"Bodoni Ornaments ITC TT"',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
