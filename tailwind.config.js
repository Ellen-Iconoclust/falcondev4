/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00f2ff',
        'neon-pink': '#ff007a',
      },
      fontFamily: {
        'sync': ['Syncopate', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 10px #00f2ff' },
          '100%': { textShadow: '0 0 20px #00f2ff, 0 0 30px #00f2ff' },
        }
      }
    },
  },
  plugins: [],
}
