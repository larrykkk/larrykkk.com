const isProd = process.env.NODE_ENV === 'production'
// import { defineNuxtConfig } from 'nuxt'

export default {
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    title: 'larrykkk。拉瑞的技術焦慮',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '記錄著 larrykkk 的技術焦慮'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1036162710845309',
        async: true,
        crossorigin: 'anonymous'
      }
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  components: true,
  css: [
    '@/assets/css/global.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/google-analytics',
    '@/modules/sitemapRouteGenerator',
    '@nuxtjs/color-mode'
  ],
  googleAnalytics: {
    id: 'UA-123497084-2',
    debug: {
      // enabled: !isProd,
      snedHitTask: isProd
    }
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxt/content',
    ['@nuxtjs/google-gtag', { id: 'G-YY1ECTGSJK' }],
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    hostname: 'https://larrykkk.com',
    gzip: true
  },

  colorMode: {
    preference: 'light', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    html: {
      minify: {
        minifyCSS: false, // this
        minifyJS: false // this
      }
    }
  },
  // serverMiddleware: [{ path: '/api', handler: '~/api/upload.js' }]
  // ...routerBase,
}
