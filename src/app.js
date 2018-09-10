import Vue from 'vue'
import App from './app.vue'
import store from './store'
import router from './router'
import './utils/extend'
import 'assets/css/index.scss'

import Notification from './components/common/notification'
import Input from './components/common/input'
import MessageBox from './components/common/message-box'
import Share from './components/common/share'
import Upload from './components/common/upload'
import Loading from './components/common/loading'
import Dialog from './components/common/dialog'
import Button from './components/common/button'
import Tabs from './components/common/tabs'
import PlayVideo from './components/common/play-video'

Vue.use(Notification)
Vue.use(Input)
Vue.use(MessageBox)
Vue.use(Share)
Vue.use(Upload)
Vue.use(Loading)
Vue.use(Dialog)
Vue.use(Button)
Vue.use(Tabs)
Vue.use(PlayVideo)

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
