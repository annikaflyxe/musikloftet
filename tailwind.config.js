module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lato: "'Lato', serif",
      },

    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
