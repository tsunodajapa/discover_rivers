const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ]
  },
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    colors: {
      background: {
        primary: 'var(--bg-background-primary)',
        secondary: 'var(--bg-background-secondary)',
        ternary: 'var(--bg-background-ternary)',
      },

      copy: {
        primary: 'var(--text-color-primary)',
        secondary: 'var(--text-color-secondary)',
      },

      blue: {
        900: '#191970',
        800: '#000080',
        700: '#00008B',
        600: '#0000CD',
        500: '#0000FF'
      },

      gray: {
        900: '#1C1C1C',
        800: '#363636',
        700: '#4F4F4F',
        600: '#696969',
        500: '#808080',
        400: '#A9A9A9',
        300: '#C0C0C0',
        200: '#D3D3D3'
      },

      black: '#000',
      white: '#fff',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
}
