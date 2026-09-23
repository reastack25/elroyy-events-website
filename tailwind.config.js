/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { navy: "#011627", burgundy: "#8F0013", canvas: "#FDFFFC" },
      fontFamily: { sans: ["var(--font-inter)"], display: ["var(--font-poppins)"], stat: ["var(--font-manrope)"] },
      boxShadow: { soft: "0 18px 50px rgba(1, 22, 39, 0.08)" },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
