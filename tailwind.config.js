/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'banner' : 'linear-gradient(360deg, rgba(0, 0, 0, 0.90) 31.45%, rgba(0, 0, 0, 0.40) 82.5%),url(/banner.jpg)'
      }
    },
  },
  plugins: [],
}

