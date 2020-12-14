module.exports = {
  purge: [],
  theme: {
    extend: {
      height: {
        '1/2': '50%',
        '3/4': '75%',
        '3/2': '150%',
        '6/5': '120%'
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem'
      },
      cursor: {
        'arrow-right': 'e-resize',
        'arrow-left': 'w-resize'
      },
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
