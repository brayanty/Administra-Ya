/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      margin: {
        '0-auto': '0 auto',
      },
      fontFamily:{
        poppins: ['poppins','sans-serif']
      }
    },
  },
  plugins: [],
}

