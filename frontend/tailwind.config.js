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
        'lisbon-blue': '#0f172a',
        'lisbon-tile': '#0047AB',
        'lisbon-sand': '#FDF5E6',
        'limnia-gold': '#D4AF37',
      },
      fontFamily: {
        heading: ['"Outfit"', '"Inter"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        'editorial': '0.15em',
        'wide-max': '0.3em',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}

