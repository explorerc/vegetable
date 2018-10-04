import Vue from 'vue'
import Router from 'vue-router'
import ComLogin from './login-box.vue'
import userService from 'src/api/user-service'

Vue.use(Router)
const vue = new Vue()
export default {
  components: {
    ComLogin
  },
  data () {
    return {
      login: null
    }
  },
  mounted () {
    this.login = this.$children.find(child => {
      return child.$options.name === 'ComLogin'
    })
    if (this.$route.meta.pop) {
      this.$route.meta.pop = false
      this.login.visible = true
    }
  },
  methods: {
    getAuthInfo () {
      return sessionStorage.getItem('wechatAuth')
    },
    getLoginInfo () {
      return JSON.parse(sessionStorage.getItem('login'))
    },
    doAuth (url) {
      let _url = location.href
      if (url) {
        _url = url
      }
      if (!sessionStorage.getItem('wechatAuth')) {
        console.log(_url)
        location.href = `/api/frontend/user/wechat-login?backUrl=${encodeURIComponent(
          _url
        )}`
        // location.href = `${_url}?wechatAuth=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlvbmlkIjoib1Y4WXkwbUpWVW90NTNkMmQxMGp4X1c5alVPZyJ9 .0e3 IszThWQZDZAn-Ycj_WeaLJ4MSvcg02f7NUqYmPcE`
      } else {
        location.href = _url
      }
    },
    doLogin (url) {
      if (!sessionStorage.getItem('wechatAuth')) {
        let _url = location.href
        if (typeof url === 'string') {
          _url = url
        }
        // _url = `${location.href}?wechatAuth=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlvbmlkIjoib1Y4WXkwbUpWVW90NTNkMmQxMGp4X1c5alVPZyJ9 .0e3 IszThWQZDZAn-Ycj_WeaLJ4MSvcg02f7NUqYmPcE`
        // location.href = _url
        if (_url.indexOf('?') === -1) {
          _url += '?_pop=true'
        } else {
          _url += '&_pop=true'
        }
        location.href = `/api/frontend/user/wechat-login?backUrl=${encodeURIComponent(
          _url
        )}`
      } else {
        this.login.visible = true
      }
    },
    updateLoginInfo (data) {
      if (data) {
        sessionStorage.setItem('login', JSON.stringify(data))
      } else {
        sessionStorage.removeItem('login')
        sessionStorage.removeItem('wechatAuth')
      }
    },
    getMasterInfo (data) {
      return new Promise((resolve, reject) => {
        if (sessionStorage.getItem('master')) {
          resolve(JSON.parse(sessionStorage.getItem('master')))
        } else {
          vue
            .$config({
              loading: true,
              handlers: true
            })
            .$get(userService.GET_JOININFO)
            .then(res => {
              sessionStorage.setItem('master', JSON.stringify(res.data))
              resolve(res.data)
            })
            .catch((err) => {
              reject(err)
            })
        }
      })
    }
  }
}
