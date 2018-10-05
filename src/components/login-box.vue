<template>
  <div class="login-container">
    <com-dialog :visible.sync="visible"
                center
                @close="closed">
      <div>
        <div class="rule">登录参与直播互动</div>
        <com-input v-model="mobile"
                   class="mobile"
                   type="input"
                   placeholder="请输入手机"
                   :error-tips="phoneErrorMsg"></com-input>
        <div id="captcha"></div>
        <com-input v-model="code"
                   class="code"
                   type="input"
                   placeholder="请输入验证码"
                   :error-tips="codeErrorMsg"></com-input>
        <com-button class="codeBtn"
                    :disabled="!codeEnable"
                    @click="getCode"
                    type="primary">{{codeText}}</com-button>
      </div>
      <div class="footer"
           slot="footer">
        <com-button type="primary"
                    :disabled="!submitEnable"
                    @click="doLogin">登录</com-button>
      </div>
    </com-dialog>
  </div>
</template>

<script>
import activityService from 'src/api/activity-service'
import userService from 'src/api/user-service'

export default {
  name: 'ComLogin',
  data () {
    return {
      visible: false,
      time: 60,
      captchaIns: null,
      key: null,
      verify: false,
      mobile: '',
      code: '',
      mobileReg: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
      captchaKey: '',
      phoneErrorMsg: '',
      codeErrorMsg: ''
    }
  },
  mounted () {
    this.$get(activityService.GET_CAPTCHAID).then((res) => {
      this.key = res.data
      window.initNECaptcha({
        element: '#captcha',
        mode: 'float',
        width: '100%',
        captchaId: this.key,
        onVerify: (err, data) => {
          if (err) {
            console.log(err)
          } else {
            this.verify = true
            this.captchaKey = data.validate
          }
        }
      }, (instance) => {
        this.captchaIns = instance
      }, (err) => {
        console.log(err)
      })
    })
  },
  methods: {
    getCode () {
      if (!this.verification(this.mobile, 'phone')) return false
      this.$config({ handlers: true }).$get(activityService.GET_CODE, {
        mobile: this.mobile,
        type: 'CONSUMER_USER_LOGIN',
        captcha: this.captchaKey,
        __errHandler: true
      }).then((res) => {
        this.time--
        this.timer = setInterval(() => {
          this.time--
          if (this.time === 0) {
            clearInterval(this.timer)
            this.time = 60
          }
        }, 1000)
        console.log(res)
      })
    },
    doLogin () {
      if (!this.verification(this.mobile, 'phone')) return false
      if (!this.verification(this.code, 'code')) return false
      this.$config({ handlers: true }).$post(userService.POST_MOBILELOGIN, {
        mobile: this.mobile,
        code: this.code,
        wechatAuth: sessionStorage.getItem('wechatAuth'),
        __errHandler: true
      }).then((res) => {
        this.$parent.updateLoginInfo(res.data)
        this.visible = false
        this.closed()
        this.$emit('login', res.data)
      }).catch((err) => {
        if (err.code === 10020) {
          this.codeErrorMsg = err.msg // code不正确
        } else if (err.code === 11061) {
          this.phoneErrorMsg = err.msg // 登录失败
        } else if (err.code === 11062) {
          this.phoneErrorMsg = err.msg // 手机号已授权其他微信
        }
        this.verify = false
        this.captchaKey = ''
        this.captchaIns.refresh()
      })
    },
    closed () {
      this.mobile = ''
      this.time = 60
      this.verify = false
      this.captchaKey = ''
      this.captchaIns.refresh()
      clearInterval(this.timer)
    },
    verification (val, type) {
      let phoneReg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
      let codeReg = /^\d{6}$/
      if (type === 'phone') {
        if (phoneReg.test(val)) {
          return true
        } else {
          this.phoneErrorMsg = '请正确填写手机号'
          return false
        }
      } else if (type === 'code') {
        if (codeReg.test(val)) {
          return true
        } else {
          this.codeErrorMsg = '请输入正确验证码'
          return false
        }
      }
    }
  },
  computed: {
    codeText () {
      if (this.codeEnable || this.time === 60) {
        return '发送验证码'
      } else {
        return `倒计时${this.time}秒`
      }
    },
    codeEnable () {
      return this.mobileReg.test(this.mobile) && this.verify && this.time === 60
    },
    submitEnable () {
      return this.mobileReg.test(this.mobile) && this.verify && this.code
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container /deep/ {
  #captcha {
    margin-bottom: 20px;
  }
  .dialog-wrap {
    width: 540px;
    .dialog-body {
      padding: 30px 40px 10px;
      .rule {
        a {
          color: #0000ff;
        }
        padding-bottom: 30px;
      }
      .mobile {
        margin-bottom: 35px;
        height: 80px;
        width: 100%;
      }
      .code {
        height: 80px;
        margin-bottom: 20px;
        display: inline-block;
        width: 292px;
      }
      .codeBtn {
        width: 160px;
        padding: 10px 0;
        height: 80px;
      }
    }
    .footer {
      padding: 0 40px 20px;
      display: inline-block;
      width: 100%;
      button {
        width: 100%;
        height: 80px;
      }
    }
  }
}
</style>
