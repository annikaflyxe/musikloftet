module.exports = {
    darkMode: 'class',
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "'Montserrat', serif",
      },

    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
