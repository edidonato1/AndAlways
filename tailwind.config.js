module.exports = {
  purge: ['./src/components/**/*.{ts,tsx,js,jsx}', './src/pages/**/*.{ts,tsx,js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'title': 'Princess Sofia',
      'title2': 'Nothing You Could Do',
    },
    minHeight: {
      'full': '370px',
    },
    boxShadow: {
      xl: '0 8px 15px 4px rgba(246, 210, 215, 0.4), inset 0 -5px 15px 10px rgba(24, 52, 62, 0.4)',
    },
    screens: {
      'xs': '300px',
      'sm': '600px',
      'md': '800px',
      'lg': '1000px',
      'xl': '1300px',
    },
    extend: {
      colors: {
        blue: '#d9fcfb',
        peach: '#dbb49f',
        lightPeach: '#FFD6B6',
        pink: '#F6D2D7',
        h1: '#F6D2D7',
        darkBlue: '#324A59',
        deepGreen: '#385B59',
      },
      width: {
        'button': '220px',
      },
      minHeight: {
        'mobile': '500px',
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
