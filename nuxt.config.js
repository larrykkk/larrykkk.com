const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/larrykkk.github.io/'
        }
      }
    : {}
const isProd = process.env.NODE_ENV === 'production'
// import axios from 'axios'
export default {
  mode: 'spa',
  target: 'static',
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
  // ...routerBase,
  generate: {
    fallback: 'index.html',
    // routes() {
    //   return axios.get('https://https://larrykkk.github.io/').then(res => {
    //     return res.data.map(user => {
    //       console.log(user)
    //       return user.id
    //     })
    //   })
    // }
  }
}
