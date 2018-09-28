import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import userService from 'src/api/user-service'

Vue.use(Router)
const router = new Router({
  base: '/m/',
  routes,
  mode: 'history'
})

const vue = new Vue()
router.beforeResolve((to, from, next) => {
  if (sessionStorage.getItem('login')) {
    auth(to, next)
  } else {
    vue
      .$config({ loading: true, handlers: true })
      .$get(userService.GET_CONSUMERINFO)
      .then(res => {
        sessionStorage.setItem('login', JSON.stringify(res.data))
        auth(to, next)
      })
      .catch(() => {
        auth(to, next)
      })
  }
})

function auth (to, next) {
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
}

export default router
