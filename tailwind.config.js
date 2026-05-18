/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        happiness: '#FDF0E6',
        sadness: '#B9A6CB',
        normal: '#FFFFAF',
        surprise: '#D3E4E2',
        anger: '#EFA794',
        disgust: '#7FC7C4',
      }
    },
  },
  plugins: [],
}