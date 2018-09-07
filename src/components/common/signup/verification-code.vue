<template>
  <div class="v-vercode">
    <div id="captcha"></div>
    <div class="v-input-from">
      <input type="text" v-model="code" @blur="pushCode">
      <a href="javascript:;" class="v-getcode" :class="{prohibit:isProhibit}" @click="getCode()" >获取动态码<span v-show="isSend" class="v-getcode-span">(<em>{{second}}</em>s)</span></a>
    </div>
  </div>
</template>
<script>
  import identifyingcodeManage from 'src/api/identifyingcode-manage'
  export default {
    props: {
      phone: String,
      isGetCode: Boolean
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
        code: 0
      }
    },
    mounted () {
    },
    components: {
    },
    created () {
      let data = {}
      identifyingcodeManage.getCodeId(data).then((res) => {
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
    watch: {
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
      }
    },
    methods: {
      getCode () {
        // 获取验证码
        if (this.isProhibit) {
          return false
        }

        let data = {
          'mobile': this.phone,
          'type': 'BUSINESS_USER_LOGIN',
          captcha: this.phoneKey
        }
        identifyingcodeManage.getCode(data).then((res) => {
          if (res.code !== 200) {
            clearInterval(this.timerr)
            this.isSend = false
            this.isProhibit = true
            this.second = 60
            this.isImg = false
            this.phoneKey = ''
            this.cap.refresh()
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
      isGetCodePermission () { // 获取验证码是否可点击
        if (this.isImg) {
          this.isProhibit = false
        } else {
          this.isProhibit = true
        }
      },
      pushCode () {
        this.$emit('inputFocus', this.code)
      }
    }
  }
</script>
<style lang="scss" scoped>
.v-vercode {
  width: 100%;
  .v-input-from {
    width: 100%;
    position: relative;
    input {
      width: 100%;
      height: 60px;
      line-height: 60px;
    }
    a {
      text-decoration: none;
    }
    .v-getcode {
      position: absolute;
      top: 8px;
      right: 15px;
      display: block;
      width: 260px;
      height: 45px;
      border: 1px solid #666;
      .v-getcode-span {
        margin-left: 10px;
      }
    }
  }
}
</style>
