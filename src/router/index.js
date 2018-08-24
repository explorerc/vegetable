import Router from 'vue-router'
import routes from './routes'

export default () => {
  const router = new Router({
    routes,
    mode: 'history'
  })
  return router
}
