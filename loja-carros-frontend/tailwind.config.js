/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1a202c',       // Preto suave
        blueAccent: '#3498db', // Azul suave
        grayLight: '#f7fafc',  // Cinza claro
      },
    },
  },
  plugins: [],
};
