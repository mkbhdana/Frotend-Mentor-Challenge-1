module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      colors: {
        'soft-magenta': 'hsl(300, 69%, 71%)',
        'violet': 'hsl(257, 40%, 49%)',
      },
      screens: {
        'desktop': {'min': '1440px', 'max': '1535px'},
      // => @media (min-width: 1440px and max-width: 1535px) { ... }
      },
      backgroundImage: {
        'bg-desktop': "url('/images/bg-desktop.svg')",
        'bg-mobile': "url('/images/bg-mobile.svg')",
      },
    },
  },
  plugins: [],
}
