module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      
      'mobileS': {'min': '300px', 'max': '319px'},
      'mobileM': {'min': '320px', 'max': '374px'},
      'mobileL': {'min': '375px', 'max': '424px'},
      'tabs': {'min': '425px', 'max': '639px'},
      'sm': {'min': '640px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
     
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer"
  ],
}
