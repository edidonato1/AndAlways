module.exports = {
  purge: ['./src/components/**/*.{ts,tsx,js,jsx}', './src/pages/**/*.{ts,tsx,js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '300px',
      'sm': '600px',
      'md': '800px',
      'lg': '1000px',
      'xl': '1300px',
    },
    extend: {
      colors: {
        blue: '#324A59',
      },
      width: {
        'button': '240px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
