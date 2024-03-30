/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'primary': '#A7D2CB',
        'secondary': '#B1C0C0',
        'tersier': '#874C62',
        'bgColor': '#DCF2F1',
      },
    },
  },
  plugins: [],
};
