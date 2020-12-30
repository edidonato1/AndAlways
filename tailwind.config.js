module.exports = {
  purge: ['./src/components/**/*.{ts,tsx,js,jsx}', './src/pages/**/*.{ts,tsx,js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      'full': '370px',
    },
    boxShadow: {
      xl: "0 8px 15px 4px rgba(228, 189, 15, 0.4), inset 0 -13px 10px 10px rgba(255, 170, 0, 0.7)",
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
        blue: '#324A59',
      },
      width: {
        'button': '220px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
