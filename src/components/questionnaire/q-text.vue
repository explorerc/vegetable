<template>
  <div class="q-edit-content">
    <com-input v-if="!edit"
               @focus="focus"
               :disabled="isHidden"
               :type="value.detail.format"
               :max-length="value.detail.max?value.detail.max:0"
               :value.sync="value.value"></com-input>
               <div :id="captchaId"
                     v-if="!edit&&value.verification==='Y'&&!isHidden"
                     class="captcha" ></div>
               <com-input v-if="!edit&&value.verification==='Y'&&!isHidden"
               class="code"
               @focus="focus"
               :local="true"
               :max-length="6"
               placeholder="请输入验证码"
               v-model="value.code"></com-input>
               <com-button class="codeBtn"
                            :disabled="!codeEnable"
                            @click="getCode"
                            v-if="!edit&&value.verification==='Y'&&!isHidden">{{codeText}}</com-button>
    <div v-if="!edit&&errorTip"
         class="error-msg">{{errorTip}}
    </div>
  </div>
</template>

<script>
import activityService from 'src/api/activity-service'
import loginMixin from 'components/login-mixin'
export default {
  mixins: [loginMixin],
  props: {
    value: {
      type: Object,
      default () {
        return {}
      }
    },
    edit: {
      type: Boolean,
      default: false
    },
    isView: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      captchaId: `ca${Math.round(Math.random() * 1000)}`,
      time: 60,
      captchaIns: null,
      captchaKey: '',
      key: null,
      verify: false,
      mobileReg: /^1[1|2|3|4|5|6|7|8|9][0-9]\d{8}$/,
      errorTip: '',
      phoneKey: '',
      codeType: 'CONSUMER_USER_LOGIN',
      isHidden: false
    }
  },
  mounted () {
    if (this.value.detail.format === 'phone') {
      let userInfo = JSON.parse(sessionStorage.getItem('login'))
      if (userInfo) {
        this.value.value = userInfo.mobile
        this.isHidden = true
      } else {
        this.$get(activityService.GET_CAPTCHAID).then((res) => {
          this.key = res.data
          window.initNECaptcha({
            element: `#${this.captchaId}`,
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
      return this.mobileReg.test(this.value.value) && this.verify && this.time === 60
    }
  },
  methods: {
    getCode () {
      if (!this.verification(this.value.value, 'phone')) return false
      this.$config({ handlers: true }).$get(activityService.GET_CODE, {
        mobile: this.value.value,
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
    verification (val, type) {
      let phoneReg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
      let codeReg = /^\d{6}$/
      if (type === 'phone') {
        if (phoneReg.test(val)) {
          return true
        } else {
          this.errorTip = '请正确填写手机号'
          return false
        }
      } else if (type === 'code') {
        if (codeReg.test(val)) {
          return true
        } else {
          this.errorTip = '请输入正确验证码'
          return false
        }
      }
    },
    focus () {
      this.errorTip = ''
    },
    validate () {
      let result = true
      if (!this.value.title) {
        result = false
        this.value.error = true
        this.value.title = '请设置问卷内容'
      }

      return result
    },
    check () {
      if (this.value.required && !this.value.value && this.value.detail.format !== 'phone') {
        this.errorTip = '此项为必填项'
        return false
      } else if (this.value.detail.format === 'email' && this.value.value) {
        var re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
        if (!re.test(this.value.value)) {
          this.errorTip = '请输入正确的邮箱格式'
          return false
        }
      } else if (this.value.detail.format === 'phone') {
        if (!this.value.value || this.value.value.length < 11) {
          this.errorTip = '请输入正确的手机号'
          return false
        } else if (!this.isHidden && !this.value.code && this.value.verification === 'Y') {
          this.errorTip = '请输入验证码'
          return false
        }
        if (!this.verification(this.value.value, 'phone')) return false
        if (!this.isHidden && !this.verification(this.value.code, 'code')) return false
        let ext = JSON.parse(this.value.ext)
        return { id: this.value.id, value: this.value.value, code: this.isHidden ? '' : this.value.code, type: ext.key }
      }
      let ext = JSON.parse(this.value.ext)
      return { id: this.value.id, value: this.value.value, type: ext.key }
    }
  }
}
</script>

<style scoped lang="scss">
.q-edit-content {
  width: 90%;
  /deep/ {
    .com-input {
      &.code {
        margin-top: 5px;
        width: 140px;
      }
    }
    .captcha {
      height: 60px;
      margin-bottom: 10px;
      .yidun_control {
        height: 60px !important;
        .yidun_slide_indicator {
          height: 60px !important;
        }
        .yidun_tips {
          line-height: 60px !important;
        }
      }
    }
    .com-button {
      font-size: 12px;
      padding: 6px 20px;
      &.codeBtn {
        text-align: center;
        margin-top: 5px;
        width: 140px;
        margin-left: 1px;
        position: absolute;
        bottom: 30px;
        right: 0;
        height: 60px;
        line-height: 60px;
        border-color: #ffd021;
        background-color: #ffd021;
        opacity: 1;
        padding: 0;
        &:disabled {
          border-color: #e2e2e2;
          background-color: #e2e2e2;
        }
      }
    }
    .error-msg {
      position: absolute;
      color: #fc5659;
      padding-left: 10px;
      line-height: 20px;
      font-size: 12px;
    }
  }
}
</style>
