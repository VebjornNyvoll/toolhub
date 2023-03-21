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
      keyframes: {
        'moving-line': {
            from: {
                transform: 'translateY(50%)',
                opacity: '0',
            },
            to: {
              transform: 'translateY(0%)',
                opacity: '1',
            },
        },
        'hovering-up-and-down': {
            '0%, 100%': {
                transform: 'translateY(0%)',
            },
            '50%': {
                transform: 'translateY(-5%)',
            },
        }
    },
    animation: {
        'from-bottom': 'moving-line ease .6s forwards',
        'hovering-slow': 'hovering-up-and-down ease-in-out 10s infinite',
        'hovering-medium': 'hovering-up-and-down ease-in-out 8s infinite',
        'hovering-fast': 'hovering-up-and-down ease-in-out 6s infinite',
    },
    },
  },
  plugins: [],
};
