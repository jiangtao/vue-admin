import Vue from 'vue'
import routes from './map'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  base: process.env.ROUTER_ROOT,
  mode: 'history',
  routes: Object.keys(routes).reduce((previous, current) => {
    return (previous.push({path: current, ...routes[current]}), previous)
  }, []).concat({
    path: '*',
    meta: {
      title: '404 - Not Found'
    },
    component: {
      render(h) {
        return h('h3', '404 - Not Found')
      }
    }
  }),
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
let first = true
router.beforeEach((to, from, next) => {
  to.matched.filter(({meta}) => meta.title).map(({meta}) => document.title = meta.title)

  next()
})

export default router
