/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Optional: tweak the brand if you want
        // brand: { DEFAULT: "#4f46e5" }
      },
    },
  },
  plugins: [],
};
