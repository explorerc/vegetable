import ComLogin from './login-box.vue'

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
    doLogin () {
      if (!sessionStorage.getItem('wechatAuth')) {
        // let url=location.href
        // location.href = `/api/frontend/user/wechat-login?backUrl=${encodeURIComponent(url)}`
        location.href = `${location.href}?wechatAuth=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlvbmlkIjoib1Y4WXkwbUpWVW90NTNkMmQxMGp4X1c5alVPZyJ9 .0e3 IszThWQZDZAn-Ycj_WeaLJ4MSvcg02f7NUqYmPcE`
      } else {
        this.login.visible = true
      }
    }
  }
}
