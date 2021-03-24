module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      'xs': ['10px', '12px'],
      'sm': ['12px', '16px'],
      'base': ['18px', '24px'],
      'lg': ['24px', '32px'],
      'xl': ['36px', '42px'],
      '2xl': ['48px', '56px'],
      '3xl': ['60px', '72px'],
      '4xl': ['72px', '90px']
    },
    colors: {
      transparent: 'transparent',
      blue: {
        DEFAULT: '#0281B7',
        light: '#CADBE1',
        lightest: '#DDE5E8',
        hover: '#005b82',
        dark: '#66798B'
      },
      black: '#000000',
      white: '#FFFFFF',
      gray: '#66798B',
      transparentGray: 'rgba(68, 74, 76, 0.5)' 
    },
    fontFamily: {
      'sans': '"Alte Haas Grotesk", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue"',
      'serif': '"Optima LT Std", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
    },
    extend: {
      height: {
        '1/2': '50%',
        '3/4': '75%',
        '3/2': '150%',
        '6/5': '120%'
      },
      cursor: {
        'arrow-right': 'e-resize',
        'arrow-left': 'w-resize'
      },
      margin: {
       '1/12': '8.333333%',
      },
      transitionProperty: {
        'height': 'height',
      }
    },
  },
  variants: {
    visibility: ['responsive', 'hover'],
  },
  corePlugins: {
    container: false
  },
  plugins: [
  ]
}
