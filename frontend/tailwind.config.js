/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'Consolas', 'ui-monospace', 'Menlo'],
        inter: ['Inter', 'Consolas', 'ui-monospace', 'Menlo'],
      },
      boxShadow: {
        first: '0px -3px 20px 1px rgba(76, 39, 174, 0.25) inset ',
      },
    },
  },
  plugins: [],
}
