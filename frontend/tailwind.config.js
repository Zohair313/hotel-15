/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lisbon-yellow': '#FFD700',
        'tejo-blue': '#1E3A8A',
        'lisbon-blue': '#1E3A8A', 
        'lisbon-tile': '#0047AB',
        'lisbon-sand': '#FDF5E6',
      },
      fontFamily: {
        heading: ['"Cabinet Grotesk"', 'sans-serif'],
        body: ['Satoshi', 'sans-serif'],
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
