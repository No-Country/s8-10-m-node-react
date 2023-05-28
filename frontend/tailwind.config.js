/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'Consolas', 'ui-monospace', 'Menlo'],
        inter: ['Inter', 'Consolas', 'ui-monospace', 'Menlo']
      }
    }
  },
  plugins: []
}
