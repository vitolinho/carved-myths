/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      base: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "1.75rem",
      "3xl": "2rem",
      "4xl": "2.25rem",
      "5xl": "5rem",
      "6xl": "8.75rem",
      "7xl": "12.5rem"
    },
    extend: {
      colors: {
        "white": "#FFFFFF",
        "silver": "#EAE6E6",
        "carbone": "#343434",
        "black": "#131313",
        "egg-shell": "#F8F8F8"
      }
    },
  },
  plugins: [],
}

