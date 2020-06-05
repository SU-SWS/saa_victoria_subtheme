// const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  // prefix: 'test-', // not working, but other settings like colors are working
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
      desktop: '1200px', // might need to change
    },
    spacing: {  // change these spacing values to use our decanter modular spacing values so we can use it the same
      sm: '10px',   // i think i'll have to rewrite these in scss to include screen sizes etc.
      md: '20px',  // i extend the classes that tailwind provides and use scss to apply the padding/margin with the modular-spacing mixin
      lg: '30px',
      xl: '40px',
    },
    colors: {  // adding colors at theme.colors level REPLACES all colors, rather than theme.extend.colors adds our colors to the existing tailwind colors
      black: '#2e2d29',
      white: '#fff',
      gray: {
        '100': '#edebe9', // coming soon - lightest driftwood
        '200': '#dad8d4', // coming soon - medium light driftwood
        '300': '#cac6bf', // coming soon - medium driftwood
        '400': '#d2d3d4', // coming soon - lightest cool grey
        '500': '#a6a7a9', // coming soon - medium light cool grey
        '600': '#7a7b7e', // coming soon - medium cool grey
        '700': '#4d4f53', // su-color-cool-grey
        '800': '#373637', // coming soon dark gray
        '900': '#2e2d29', // su-color-black
      },
      cardinal_red: '#8c1515', // su-color-cardinal-red
      dark_red: '#820000',  // su-color-dark-red
      bright_red: '#b1040e',  // su-color-bright-red
      cloud: '#dad7cb',   // su-color-cloud
      driftwood: '#b6b1a9',   // su-color-cloud
      stone: '#544948', // su-color-stone
      palo_alto: {
        default: '#544948',
        light: '#2d716f',
        dark: '#014240'
      },
      purple: {
        default: '#53284f',
        light: '#613863',
        dark: '#350d36'
      },
      lagunita: {
        default: '#007c92',
        light: '#009ab4',
        dark: '#006b81'
      },
      poppy: {
        default: '#e98300',
        light: '#f9a44a',
        dark: '#d48029'
      },
      blue: '#00548f',
      bright_blue: '#006cb8',
      vivid_red: '#ec0513',
      vivid_red_dark: '#ce0d0d',
      electric_purple: '#505EEC',
      electric_purple_dark: '#3c47b1',
      dandelion: '#007ace',
      wintergreen: '#de3618',
    }
  }
}
