// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  // modules: ['@nuxtjs/strapi'],
  // strapi: {
  //   url: process.env.STRAPI_URL || 'http://localhost:1337',
  //   prefix: '/api',
  //   version: 'v4',
  //   cookie: {},
  //   cookieName: 'strapi_jwt'
  // },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'Личный сайт Федянова Степана – Фронтенд-разработчик',
      link: [
        {rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-touch-icon.png'},
        {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
        {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
        {rel: 'manifest', href: '/site.webmanifest'},
        {rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5'},
      ],
      meta: [
        {name: 'msapplication-TileColor', content: '#9f00a7'},
        {name: 'theme-color', content: '#ffffff'},
      ],
    },
  },
  modules: ['@intlify/nuxt3', '@artmizu/yandex-metrika-nuxt'],
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'ru',
    },
  },
  yandexMetrika: {
    id: '94567972',
  },
  css: ['normalize.css', '~/assets/style/main.sass'],
});
