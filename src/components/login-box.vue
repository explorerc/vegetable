<template>
  <div class="login-container">
    <com-dialog
    :visible.sync="visible"
    center
    @close="closed"
    >
      <div>
        <div class="rule">登录参与直播互动</div>
        <com-input v-model="mobile" class="mobile" type="input" placeholder="请输入手机"></com-input>
        <div id="captcha"></div>
        <com-input v-model="code" class="code" type="input" placeholder="请输入验证码"></com-input>
        <com-button class="codeBtn" :disabled="!codeEnable" @click="getCode" type="primary" >{{codeText}}</com-button>
      </div>
      <div class="footer" slot="footer">
        <com-button type="primary" :disabled="!submitEnable" @click="doLogin" >登录</com-button>
      </div>
    </com-dialog>
  </div>
</template>

<script>
import identifyingcodeManage from 'src/api/identifyingcode-manage'
import authManage from 'src/api/auth-manage'

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
      captchaKey: ''
    }
  },
  mounted () {
    identifyingcodeManage.getCodeId().then((res) => {
      if (res.code === 200) {
        this.key = res.data
        initNECaptcha({
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
      }
    })
  },
  methods: {
    getCode () {
      authManage.getCode({
        mobile: this.mobile,
        type: 'CONSUMER_USER_LOGIN',
        captcha: this.captchaKey,
        __errHandler: true
      }).then((res) => {
        if (res.code === 200) {
          this.time--
          this.timer = setInterval(() => {
            this.time--
            if (this.time === 0) {
              clearInterval(this.timer)
              this.time = 60
            }
          }, 1000)
          console.log(res)
        }
      })
    },
    doLogin () {
      authManage.login({
        mobile: this.mobile,
        code: this.code,
        wechatAuth: sessionStorage.getItem('wechatAuth'),
        __errHandler: true
      }).then((res) => {
        if (res.code === 200) {
          this.$parent.updateLoginInfo(res.data)
          this.visible = false
          this.closed()
          this.$emit('login', res.data)
        } else {
          this.verify = false
          this.captchaKey = ''
          this.captchaIns.refresh()
        }
      })
    },
    closed () {
      this.mobile = ''
      this.time = 60
      this.verify = false
      this.captchaKey = ''
      this.captchaIns.refresh()
      clearInterval(this.timer)
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
        margin-bottom: 20px;
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
