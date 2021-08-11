const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    mode: 'layers',
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald,
        gray: colors.trueGray
      }
    },
  },
  variants: {
    extend: {},
  },
}
