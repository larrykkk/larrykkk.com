// https://timbenniks.dev/writings/easy-dynamic-routes-in-your-nuxt-sitemap
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('nitro:init', async (nitro) => {
      const routesToExclude = [] // Add any route you don't want in your sitemap
      const routes = await Promise.all(
        [...nitro.scannedHandlers]
          .filter((route) => !routesToExclude.includes(route))
          .filter((route) => !route.includes('/tags'))
          .sort()
      )
      
      // Update sitemap configuration
      nuxt.options.sitemap = nuxt.options.sitemap || {}
      nuxt.options.sitemap.routes = [...routes]
    })
  }
})
