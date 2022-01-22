module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('https://cdn2.iconfinder.com/data/icons/rounded-set-1/512/Car-512.png')",
  
      },
      padding: { "fluid-video": "56.25%" }
    },
    fontFamily:{
      'roboto': ["'Roboto'", 'sans-serif'],
      'oswald': ["'Oswald'", 'sans-serif'],
      'alegreya':["'Alegreya'", 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}