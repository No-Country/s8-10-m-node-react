/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'Consolas', 'ui-monospace', 'Menlo'],
        inter: ['Inter', 'Consolas', 'ui-monospace', 'Menlo'],
      },
      gridTemplateColumns: {
        'movementsTable': 'auto 1fr auto auto',
        'servicesTables': 'repeat( auto-fit, minmax(160px, 1fr) )'
      },
      keyframes: {
        'slide-in-desktop': {
          '0%': {
            transform: 'translate(-50%, 100vh)',
          },
          '100%': {
            transform: 'translateY(-50%, -50%)',
          },
        },
        'slide-in-phone': {
          '0%': {
            bottom: '-100vh',
          },
          '100%': {
            bottom: '-16px',
          },
        },
      },
      animation: {
        'slide-in-desktop': 'slide-in-desktop 0.8s ease-in-out',
        'slide-in-phone': 'slide-in-phone 0.8s ease-in-out',
      },
      boxShadow: {
        first: '0px -3px 20px 1px rgba(76, 39, 174, 0.25) inset ',
      },
      colors: {
        customColor: '#482e8a',
        primary: '#4C27AE',
        tableHeadColor: 'rgba(76, 39, 174,0.3)',
        tableRowColor: 'rgba(76, 39, 174,0.15)'
      },
    },
  },
  plugins: [],
}
