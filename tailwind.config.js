/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      White: 'hsl(0, 0%, 100%)',
      Gray: 'hsl(0, 0%, 50%)',
      Black: 'hsl(0, 0%, 7%)',
      Yellow: 'hsl(47, 88%, 63%)',
    },
    fontFamily: {
      figtree: ["Figtree", "sans-serif"],
    },
  },
  plugins: [],
}
