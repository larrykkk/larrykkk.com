const isProd = process.env.NODE_ENV === 'production'
export default {
  ssr: false,
  target: 'static',
  buildDir: 'doc', // for gihub pages
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_title || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  components: true,
  css: [],
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
  modules: ['@nuxtjs/pwa', '@nuxt/content'],
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
