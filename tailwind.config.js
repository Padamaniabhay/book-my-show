module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        Abhay:
        {
          50: '#fdfce0',
          100: '#f5f3b9',
          200: '#eeeb90',
          300: '#e7e265',
          400: '#e0da3b',
          500: '#c6c122',
          600: '#9a9618',
          700: '#6e6b0f',
          800: '#424005',
          900: '#171500',
        },
        navCol:      
        {
          50: '#333333',
          100: '#cfd2e2',
          200: '#b0b3cc',
          300: '#9095b8',
          400: '#7177a4',
          500: '#585d8c',
          600: '#44496d',
          700: '#2B3148',
          800: '#1d1f30',
          900: '#090914',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
