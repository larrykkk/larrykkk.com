import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _94f03ec4 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _c231430c = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _6abf7da8 = () => interopDefault(import('..\\pages\\new-post.vue' /* webpackChunkName: "pages/new-post" */))
const _b926992c = () => interopDefault(import('..\\pages\\tags\\index.vue' /* webpackChunkName: "pages/tags/index" */))
const _5d59f2c4 = () => interopDefault(import('..\\pages\\tags\\_tagName.vue' /* webpackChunkName: "pages/tags/_tagName" */))
const _5580893a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _58edcbca = () => interopDefault(import('..\\pages\\_slug.vue' /* webpackChunkName: "pages/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _94f03ec4,
    name: "about"
  }, {
    path: "/login",
    component: _c231430c,
    name: "login"
  }, {
    path: "/new-post",
    component: _6abf7da8,
    name: "new-post"
  }, {
    path: "/tags",
    component: _b926992c,
    name: "tags"
  }, {
    path: "/tags/:tagName",
    component: _5d59f2c4,
    name: "tags-tagName"
  }, {
    path: "/",
    component: _5580893a,
    name: "index"
  }, {
    path: "/:slug",
    component: _58edcbca,
    name: "slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
