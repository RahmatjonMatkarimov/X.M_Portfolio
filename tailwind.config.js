/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#6366f1',
          dark: '#818cf8',
          glow: 'rgba(99, 102, 241, 0.2)',
          'glow-dark': 'rgba(129, 140, 248, 0.2)',
        },
      },
      backdropBlur: {
        glass: '12px',
      },
    },
  },
  plugins: [],
}
