<template>
  <div class="v-vercode">
    <div id="captcha"></div>
    <div class="v-input-from">
    <com-input :value.sync="val" @blur="pushCode" :placeholder="placeholder"  :class="{warning: errorMsg}" type="input" :max-length="maxLength"  :error-tips="errorMsg"  @focus="inputFocus" :codeType="codeType"></com-input>
      <a href="javascript:;" class="v-getcode" :class="{prohibit:isProhibit}" @click="getCode()" >获取验证码<span v-show="isSend" class="v-getcode-span">(<em>{{second}}</em>s)</span></a>
    </div>
  </div>
</template>
<script>
  import identifyingcodeManage from 'src/api/identifyingcode-manage'
  export default {
    props: {
      code: String,
      phone: String,
      isGetCode: Boolean,
      placeholder: String,
      maxLength: Number,
      errorMsg: String,
      codeType: String // 验证码类型
    },
    data () {
      return {
        key: '',
        isProhibit: true,
        isSend: false,
        second: 60,
        timerr: '',
        phoneKey: '',
        isImg: false,
        cap: null,
        val: ''
      }
    },
    mounted () {
      console.log(this.phone)
    },
    components: {
    },
    created () {
      identifyingcodeManage.getCodeId({
        __errHandler: true
      }).then((res) => {
        if (res.code !== 200) {
          console.log(res.msg)
        } else {
          let _self = this
          this.key = res.data
          window.initNECaptcha({
            captchaId: _self.key,
            element: '#captcha',
            mode: 'float',
            width: '100%',
            onReady: function (instance) {},
            onVerify: function (err, data) {
              if (data) {
                _self.phoneKey = data.validate
                _self.isImg = true
              }
              if (err) {
                console.log(err)
              }
            },
            onError: function () {}
          }, function onload (instance) {
            _self.cap = instance
          })
        }
      })
    },
    destroyed () {
      clearInterval(this.timerr)
    },
    watch: {
      phone: function (val) {
        this.isGetCodePermission(true)
      },
      isImg: function (val) {
        this.isGetCodePermission()
      },
      isGetCode: function () {
        if (this.isGetCode) {
          clearInterval(this.timerr)
          this.isSend = false
          this.isProhibit = true
          this.second = 60
          this.isImg = false
          this.phoneKey = ''
          this.cap.refresh()
        }
      },
      val: {
        handler (n) {
          this.$emit('update:code', n)
        },
        immediate: true
      }
    },
    methods: {
      getCode () {
        // 获取验证码
        if (this.isProhibit) {
          return false
        }

        let data = {
          mobile: this.phone,
          type: this.codeType,
          captcha: this.phoneKey,
          __errHandler: true
        }
        identifyingcodeManage.getCode(data).then((res) => {
          if (res.code === 10050) {
            this.$emit('update:errorMsg', '验证码输入过于频繁')
          } else if (res.code !== 200) {
            this.$emit('update:errorMsg', res.msg)
          } else {
            this.isSend = true
            this.isProhibit = true
            clearInterval(this.timerr)
            this.timerr = setInterval(() => {
              this.second--
              if (this.second <= 0) {
                clearInterval(this.timerr)
                this.isSend = false
                this.isProhibit = true
                this.second = 60
                this.isImg = false
                this.phoneKey = ''
                this.cap.refresh()
              }
            }, 1000)
          }
        })
      },
      isGetCodePermission (val) { // 获取验证码是否可点击
        if (this.isImg && this.verificationPhone()) {
          this.isProhibit = false
          if (this.second > 0) {
            this.isSend = false
            this.isProhibit = false
            this.second = 60
            this.mobileOpacity = 1
            clearInterval(this.timerr)
            if (val) {
              this.isImg = false
              this.phoneKey = ''
              this.cap.refresh()
            }
          }
        } else {
          this.isProhibit = true
        }
      },
      pushCode () {
        this.$emit('inputFocus', this.code)
      },
      inputFocus () {
        this.$emit('update:errorMsg', '')
      },
      verificationPhone () {
        let phoneReg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
        console.log(this.phone)
        if (this.phone !== '' && phoneReg.test(this.phone)) {
          return true
        }
        return false
      }
    }
  }
</script>
<style lang="scss" scoped>
.v-vercode {
  width: 100%;
  #captcha {
    margin-bottom: 50px;
  }
  .v-input-from {
    width: 100%;
    height: 90px;
    position: relative;
    margin-bottom: 50px;
    input {
      width: 100%;
      height: 90px;
      line-height: 88px;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-size: 28px;
      color: #888;
      padding: 0 225px 0 20px;
      &.warning {
        border-color: #fc5659;
      }
      &:hover {
        border-color: #4b5afe;
      }
    }
    .error-msg {
      position: absolute;
      font-size: 14px;
      color: #fc5659;
      top: 98px;
      left: 0;
    }
    a {
      text-decoration: none;
    }
    .v-getcode {
      position: absolute;
      top: 5px;
      right: 5px;
      display: block;
      width: 250px;
      height: 80px;
      line-height: 80px;
      background-color: #ffd021;
      color: #222;
      text-align: center;
      border-radius: 6px;
      &.prohibit {
        background-color: #dedede;
        color: #888;
      }
      .v-getcode-span {
        margin-left: 10px;
      }
    }
  }
}
</style>
