/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#df4832",
        grey: "#868383",
        "light-grey": "#F6F3F4",
        "denim-blue": "#E9EEF6",
        "skin-light": "#e9c8b3",
        "soft-orange": "#e9c8b3",
        "gulf-blue": "#062152",
        "elegant-navy": "#4a536b",
      },
    },
  },
  
  plugins: [require("daisyui")],
};
