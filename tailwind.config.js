module.exports = {
  purge: ['./src/components/**/*.{ts,tsx,js,jsx}', './src/pages/**/*.{ts,tsx,js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'title': 'Nothing You Could Do',
    },
    minHeight: {
      'full': '370px',
      'mobile': '570px',
    },
    maxHeight: {
      'mobile': '700px',
    },
    boxShadow: {
      xl: '0 8px 15px 4px rgba(246, 210, 215, 0.4), inset 0 -5px 15px 10px rgba(24, 52, 62, 0.4)',
    },
    screens: {
      'xxs': '200px',
      'xs': '300px',
      'sm': '600px',
      'md': '800px',
      'lg': '1000px',
      'xl': '1300px',
    },
    extend: {
      colors: {
        peach: '#dbb49f',
        pink: '#F6D2D7',
        deepGreen: '#385B59',
      },
      width: {
        'button': '220px',
      },
      height: {
        'button': '50px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
