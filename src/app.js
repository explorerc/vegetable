import Vue from 'vue'
import App from './app.vue'
import store from './store'
import router from './router'
import './utils/extend'
import 'assets/css/index.scss'

import Notification from './components/common/notification'
import Input from './components/common/input'
import Marquee from './components/common/marquee'
import MessageBox from './components/common/message-box'
import Share from './components/common/share'
import Upload from './components/common/upload'
import Loading from './components/common/loading'
import Dialog from './components/common/dialog'
import Button from './components/common/button'
import Tabs from './components/common/tabs'
import PlayVideo from './components/common/play-video'
import Ajax from './utils/_ajax'

Vue.use(Notification)
Vue.use(Input)
Vue.use(Marquee)
Vue.use(MessageBox)
Vue.use(Share)
Vue.use(Upload)
Vue.use(Loading)
Vue.use(Dialog)
Vue.use(Button)
Vue.use(Tabs)
Vue.use(PlayVideo)
Vue.use(Ajax)

Vue.config.debug = process.env.NODE_ENV !== 'production'
Vue.config.devtools = process.env.NODE_ENV !== 'production'
Vue.config.productionTip = process.env.NODE_ENV !== 'production'
Vue.prototype.$imgHost = process.env.IMGHOST
Vue.filter('isEmpty', function (value, replaceStr) {
  replaceStr = replaceStr || '-'
  return value || replaceStr
})

new Vue({
  el: '#root',
  router,
  store,
  render: h => h(App)
})

let ready = window.Vhall.ready
let readyStatus = false
let callback = []
window.Vhall.ready = fn => {
  if (readyStatus) {
    fn()
  } else {
    callback.push(fn)
  }
}

ready(() => {
  for (let i = 0, item;
    (item = callback[i++]);) {
    item()
  }
  callback = []
  readyStatus = true
})

let config = window.Vhall.config
let exec = false
window.Vhall.config = options => {
  // let find = true

  // for (var p in options) {
  //   if (options[p] === '' || options[p] === undefined) {
  //     find = false
  //     break
  //   }
  // }
  // if (!find) return

  if (exec) return
  exec = true
  config(options)
}
window.addEventListener('load', function () {
  document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
      event.preventDefault()
    }
  })
  var lastTouchEnd = 0
  document.addEventListener('touchend', function (event) {
    var now = (new Date()).getTime()
    if (now - lastTouchEnd <= 300) {
      event.preventDefault()
    }
    lastTouchEnd = now
  }, false)
  document.addEventListener('gesturestart', function (event) {
    event.preventDefault()
  })
})
