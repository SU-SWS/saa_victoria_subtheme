module.exports = {
  theme: {
    boxShadow: {
      'flat': 'none',
      sm: '0px 1px 2px rgba(0, 0, 0, 0.25)',
      default: '5px 5px 20px rgba(0, 0, 0, 0.1)',
      md: '0px 10px 20px rgba(0, 0, 0, 0.15), 0px 6px 6px rgba(0, 0, 0, 0.2)',
      lg: '0px 14px 28px rgba(0, 0, 0, 0.2), 0px 5px 10px rgba(0, 0, 0, 0.22)',
      xl: '0px 19px 38px rgba(0, 0, 0, 0.25), 0px 5px 12px rgba(0, 0, 0, 0.18)',
    },
    fontFamily: {
      display: ['Calluna', 'serif'],
      body: ['Proxima Nova', 'sans-serif'],
    },
    screens: {
      tablet: '768px',
      desktop: '1024px', // might need to change
    },
    colors: {
      primary: {
        100: '#ebf8ff',  // need to figure out how this is used and which color it should be, could one of these be grayscales?
        300: '#90cdf4',
        500: '#4299e1',
        700: '#2b6cb0',
        900: '#2a4365',
      },
      secondary: {
        100: '#fffff0',
        300: '#faf089',
        500: '#ecc94b',
        700: '#b7791f',
        900: '#744210',
      },
    },
    extend: {
      boxShadow: {
        huge: '0 30px 60px -15px rgba(0, 0, 0, .25)'
      }
    }
  }
}
