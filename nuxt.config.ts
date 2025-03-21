// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // Static Site Generation
  ssr: true,

  nitro: {
    preset: 'static'
  },

  // App Config
  app: {
    head: {
      title: 'larrykkk。拉瑞的技術焦慮',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: '記錄著 larrykkk 的技術焦慮'
        },
        {
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
      ]
    }
  },

  // Global CSS
  css: [
    '@/assets/css/global.scss'
  ],

  // Modules
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    'nuxt-gtag'
  ],

  // // Content Configuration
  // content: {
  //   highlight: {
  //     theme: {
  //       default: 'github-light',
  //       dark: 'github-dark'
  //     }
  //   }
  // },

  // Color Mode Configuration
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: '-mode'
  },

  // Google Analytics Configuration
  gtag: {
    id: 'G-YY1ECTGSJK'
  },

  // Development Configuration
  devtools: { enabled: true },

  compatibilityDate: '2025-03-21'
})