/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#004D98", // Bleu FIFA
        secondary: "#A50044", // Rouge FIFA
      },
    },
  },
  plugins: [],
};
