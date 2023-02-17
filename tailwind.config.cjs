/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        warming: ['var(--font-warming)'],
        sofia: ['var(--font-sofia)'],
      },
      boxShadow: {
        'sm': '0px 0px 6px 2px rgba(0, 0, 0, 0.02)',
        'md': '0px 4px 8px 2px rgba(0, 0, 0, 0.06)',
      },
      
    },
  },
  plugins: [],
};
