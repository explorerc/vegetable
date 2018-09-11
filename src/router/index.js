import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)
const router = new Router({
  routes,
  mode: 'history'
})

router.beforeResolve((to, from, next) => {
  if (to.query.wechatAuth) {
    sessionStorage.setItem('wechatAuth', to.query.wechatAuth)
    delete to.query['wechatAuth']
    if (to.query['_pop']) {
      delete to.query['_pop']
      to.meta.pop = true
    }
    next({
      path: to.path,
      params: to.params,
      query: to.query
    })
  } else {
    next()
  }
})

export default router
