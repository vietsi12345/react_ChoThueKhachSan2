/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    ".public/index.html"
  ],
  theme: {
    extend: {
      width: {
        '1020': '1020px'
      },
      backgroundColor: {
        primary: '#F5F5F5'
      },

    },
  },
  plugins: [],
}

