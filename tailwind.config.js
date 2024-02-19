/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
        backgroundImage: {
            'main':
                "linear-gradient(to right bottom, rgba(112,93,80,.8) 0, rgba(112,93,80,.9)), url('./assets/image/mainImage.jpeg')",
        }
    },
      fontFamily: {
          'noto': ['Noto Sans', "sans-serif"],
          'han': ['Black Han Sans', "sans-serif"]
      },
  },
  plugins: [],
}

