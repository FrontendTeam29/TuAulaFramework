module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: "#40C2D6",
        secondary: "#04DBFC",
        tertiary: "#DFE8F5"
      },
      gridTemplateColumns: {
        // Simple 16 column grid
       'rate': '4fr 3fr 1fr 1fr',
       'rolesgrid': '3fr 3fr 1fr 3fr',
       'notasgrid1': '5fr 1fr 1fr 1fr 1fr 1fr',
       'notasgrid2': '5fr 3fr 2fr',

        // Complex site-specific column configuration
       
      }
    },
  },
  variants: {
    padding: ['responsive', 'hover', 'focus', 'group-hover', 'active'],
  },
  plugins: [

  ],
}
