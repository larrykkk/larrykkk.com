const isProd = process.env.NODE_ENV === 'production'
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
      }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    '@/assets/css/global.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/google-analytics'],
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
    '@nuxtjs/pwa',
    '@nuxt/content',
    ['@nuxtjs/google-gtag', { id: 'G-YY1ECTGSJK' }]
  ],
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
