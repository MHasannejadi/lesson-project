// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vazir: ["vazir", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui" ,'@tailwindcss/line-clamp')]
};
