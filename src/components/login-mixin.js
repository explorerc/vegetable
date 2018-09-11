import ComLogin from './login-box.vue'
import authManage from 'src/api/auth-manage'

export default {
  components: {
    ComLogin
  },
  data () {
    return {
      login: null
    }
  },
  created () {
    authManage.getLoginInfo({
      __errHandler: true
    }).then(res => {
      if (res.data) {
        this.updateLoginInfo(res.data)
      }
    })
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
      console.log(_url)
      // location.href = `/api/frontend/user/wechat-login?backUrl=${encodeURIComponent(_url)}`
      location.href = `${location.href}?wechatAuth=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlvbmlkIjoib1Y4WXkwbUpWVW90NTNkMmQxMGp4X1c5alVPZyJ9 .0e3 IszThWQZDZAn-Ycj_WeaLJ4MSvcg02f7NUqYmPcE`
    },
    doLogin (url) {
      if (!sessionStorage.getItem('wechatAuth')) {
        let _url = location.href
        if (url) {
          _url = url
        }
        // location.href = `/api/frontend/user/wechat-login?backUrl=${encodeURIComponent(url)}`
        _url = `${location.href}?wechatAuth=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlvbmlkIjoib1Y4WXkwbUpWVW90NTNkMmQxMGp4X1c5alVPZyJ9 .0e3 IszThWQZDZAn-Ycj_WeaLJ4MSvcg02f7NUqYmPcE`
        if (_url.indexOf('?') === -1) {
          _url += '?_pop=true'
        } else {
          _url += '&_pop=true'
        }
        location.href = _url
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
    }
  }
}
