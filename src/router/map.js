export default {
  '/': {
    name: 'home',
    meta: {
      title: 'home'
    },
    component: resolve => require(['pages/index.vue'], resolve)
  }
}
