const path = require('path');

export default {
  head: {
    title: 'discover_rivers',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: ['~/assets/scss/tailwind.scss'],

  srcDir: 'src/',

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
  ],

  modules: ['nuxt-purgecss'],

  build: {
    extractCSS: true,
    postcss: {
      plugins: { tailwindcss: path.resolve(__dirname, './tailwind.config.js') }
    }
  },

  purgeCSS: { mode: 'postcss' },

  env: {
    baseUrl: process.env.BASE_URL || 'https://api.nuxtjs.dev'
  }
}
