/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Fraunces', "serif", "Georgia", "Times New Roman", "Cambria", "Palatino", "Baskerville", "sans-serif"],
      },
    }
  },
  plugins: [],
}