<template>
  <div class="v-user-info">
    <a :href="MOBILE_HOST+'user'"
       class="v-return-user clearfix">
      <i class="iconfont icon-jiantouzuo fl"></i>个人中心
    </a>
    <div class="v-list">
      <a class="v-item v-avatar clearfix"
         @click="upload">
        <ve-upload ref="uploadFile"
                   title="图片支持jpg、png、bmp格式，建议比例16:9，大小不超过2M"
                   accept="png|jpg|jpeg|bmp"
                   :defaultImg="defaultImg"
                   :fileSize="2048"
                   @error="uploadError"
                   @success="uploadImgSuccess"></ve-upload>
        <span class="v-title">
          头像
        </span>
        <i class="iconfont icon-jiantou1 fr"></i>
        <img :src="defaultImg"
             alt=""
             class="fr">
      </a>
      <a class="v-item clearfix"
         :href="MOBILE_HOST+'userInfoEdit/name'">
        <span class="v-title">
          昵称
        </span>
        <i class="iconfont icon-jiantou1 fr"></i>
        <span class="v-content fr">
          {{centerInfo.consumerUser.nickName ? centerInfo.consumerUser.nickName : '未填写'}}
        </span>
      </a>
      <a class="v-item clearfix"
         href="javascript:;"
         @click="changeMobile">
        <span class="v-title">
          手机号
        </span>
        <i class="iconfont icon-jiantou1 fr"></i>
        <span class="v-content fr">
          {{centerInfo.consumerUser.mobile ? centerInfo.consumerUser.mobile:'未填写'}}
        </span>
      </a>
      <a class="v-item clearfix"
         :href="MOBILE_HOST+'userInfoEdit/email'">
        <span class="v-title">
          邮箱
        </span>
        <i class="iconfont icon-jiantou1 fr"></i>
        <span class="v-content fr">
          {{centerInfo.consumerUser.email ? centerInfo.consumerUser.email:'未填写'}}
        </span>
      </a>
    </div>
    <com-login @login="loginSuccess"></com-login>
    <message-box v-show="messageBoxShow"
                 @handleClick="messageBoxClick"
                 class="message-box"
                 :confirmText="confirmText"
                 type='prompt'
                 header=''>
      <div v-if="step === 'initialPhone' ||  step === 'newPhone'">
        <div class="rule">{{messageBoxTitle}}</div>
        <com-input v-if="isOldphone"
                   :value.sync="centerInfo.consumerUser.mobile"
                   :placeholder="'输入原有注册手机号'"
                   class="v-input"
                   disabled="disabled"></com-input>
        <com-input v-if="!isOldphone"
                   :value.sync="saveNewPhone"
                   :placeholder="'输入新手机号'"
                   class="v-input"
                   type="mobile"
                   :max-length="11"
                   :errorTips="errorTips.newPhone"
                   @focus="phoneFocus('newphone')"></com-input>
        <div id="captchaChangeMobile"></div>
        <div class="v-getcode-from clearfix">
          <com-input :value.sync="phoneCode"
                     placeholder="输入验证码"
                     class="v-input phone-code"
                     type="mobile"
                     :max-length="6"
                     @focus="codeFocus"
                     :errorTips="errorTips.code"></com-input>
          <a href="javascript:;"
             class="phone-code-btn "
             :class="{prohibit:isProhibit}"
             @click="getCode()">{{codeText}}
          </a>
        </div>
      </div>
      <div v-if="step === 'phoneSuccess'">
        <img src="../../assets/image/success@2x.png"
             alt="成功"
             class="v-success-img">
        <p class="v-success-explain">
          修改成功
        </p>
      </div>
    </message-box>
  </div>
</template>
<script>
import loginMixin from 'components/login-mixin'
import { mapMutations, mapState } from 'vuex'
import * as types from '../../store/mutation-types.js'
import VeUpload from 'src/components/common/ve-upload-image'
import userService from 'src/api/user-service'
import activityService from 'src/api/activity-service'
export default {
  mixins: [loginMixin],
  data () {
    return {
      MOBILE_HOST: process.env.MOBILE_HOST,
      messageBoxShow: false,
      confirmText: '提交',
      messageBoxTitle: '修改手机号',
      step: 'initialPhone',
      isOldphone: true,
      phone: '',
      newPhone: '',
      saveNewPhone: '',
      phoneStatus: false,
      phoneCode: '',
      phoneCodeError: '',
      phoneCodeTip: '',
      isProhibit: '',
      second: 60,
      codeText: '获取验证码',
      errorTips: {
        oldPhone: '',
        newPhone: '',
        code: ''
      },
      phoneKey: '',
      isImg: '',
      cap: ''
    }
  },
  components: {
    've-upload': VeUpload
  },
  created () {
    if (this.getLoginInfo()) {
      this.storeLoginInfo(this.getLoginInfo())
      if (!this.centerInfo.consumerUser.consumerUserId) {
        this.$config({ handlers: true }).$post(userService.GET_CENTER_INFO, {}).then((res) => {
          this.storeCenterInfo(res.data)
          this.phone = this.centerInfo.consumerUser.mobile
        }).catch(err => {
          this.$messageBox({
            header: '提示',
            content: err.msg,
            confirmText: '确定',
            handleClick: (e) => {
              if (e.action === 'cancel') {
                this.$router.replace('/user')
              } else if (e.action === 'confirm') {
                this.$router.replace('/user')
              }
            }
          })
        })
      }
      this.$config({ handlers: true }).$get(activityService.GET_CAPTCHAID).then((res) => {
        this.key = res.data
      }).catch(err => {
        this.$messageBox({
          header: '提示',
          content: err.msg,
          confirmText: '确定',
          handleClick: (e) => {
            if (e.action === 'cancel') {
            } else if (e.action === 'confirm') {
            }
          }
        })
      })
    } else {
      location.replace(`${this.MOBILE_HOST}user`)
    }
  },
  computed: {
    ...mapState('login', {
      centerInfo: state => state.centerInfo,
      loginInfo: state => state.loginInfo
    }),
    defaultImg () {
      return this.centerInfo.consumerUser.avatar ? this.$imgHost + '/' + this.centerInfo.consumerUser.avatar : ''
    }
  },
  props: {
  },
  watch: {
    phone: function () {
      this.checkPhone(this.centerInfo.consumerUser.mobile)
    },
    newPhone: function () {
      this.checkPhone(this.newPhone)
    },
    saveNewPhone: function () {
      this.checkPhone(this.saveNewPhone)
    },
    phoneStatus: function (val) {
      this.isGetCodePermission(true)
    },
    isImg: function (val) {
      this.isGetCodePermission()
    }
  },
  methods: {
    ...mapMutations('login', {
      storeCenterInfo: types.CENTER_INFO,
      storeLoginInfo: types.LOGIN_INFO
    }),
    loginSuccess (res) {
      this.storeLoginInfo(res)
      this.$router.go(0)
    },
    upload () {
      this.$refs.uploadFile.overUpload()
    },
    uploadImgSuccess (data) {
      this.$config({ handlers: true }).$get(userService.POST_CENTER_UPDATE, {
        avatar: data.name
      }).then((res) => {
        let tempLoginInfo = JSON.parse(JSON.stringify(this.centerInfo))
        tempLoginInfo.avatar = data.name
        this.storeLoginInfo(tempLoginInfo)
        let tempCenterInfo = JSON.parse(JSON.stringify(this.centerInfo))
        tempCenterInfo.consumerUser.avatar = data.name
        this.storeCenterInfo(tempCenterInfo)
      }).catch(err => {
        this.$messageBox({
          header: '提示',
          content: err.msg,
          confirmText: '确定',
          handleClick: (e) => {
            if (e.action === 'cancel') {
            } else if (e.action === 'confirm') {
            }
          }
        })
      })
    },
    uploadError (data) {
      this.$messageBox({
        header: '提示',
        content: data,
        confirmText: '确定',
        handleClick: (e) => {
          if (e.action === 'cancel') {
          } else if (e.action === 'confirm') {
          }
        }
      })
    },
    changeMobile () {
      this.messageBoxShow = true
      this.confirmText = '提交'
      let _self = this
      window.initNECaptcha({
        captchaId: _self.key,
        element: '#captchaChangeMobile',
        width: '100%',
        onReady: function (instance) {
        },
        onVerify: function (err, data) {
          if (data) {
            _self.phoneKey = data.validate
            _self.isImg = true
          }
          if (err) {
            console.log(err)
          }
        },
        onError: function (err) {
          console.log(err)
        }
      }, function onload (instance) {
        _self.cap = instance
      })
    },
    messageBoxClick (e) {
      if (e.action === 'cancel') {
        this.messageBoxShow = false
      } else if (e.action === 'confirm') {
        if (this.step === 'initialPhone') {
          if (!this.centerInfo.consumerUser.mobile) {
            this.errorTips.oldPhone = '请输入手机号'
            return false
          }
          let reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
          if (!reg.test(parseInt(this.phone))) {
            this.errorTips.oldPhone = '手机格式不正确'
            return false
          }
          if (!this.phoneCode) {
            this.errorTips.code = '请输入验证码'
            return false
          }
          let data = {
            mobile: this.centerInfo.consumerUser.mobile,
            code: this.phoneCode,
            type: 'CONSUMER_USER_VERIFY_MOBILE'
          }
          this.$config({ handlers: true }).$post(userService.POST_VERIFY_MOBILE, data).then((res) => {
            this.errorTips.code = res.msg
            this.token = res.data.codeToken
            this.fontColor = '#4B5AFE'
            this.messageBoxExplain = '验证成功，请输入新的手机号'
            this.phoneCode = ''
            this.isOldphone = false
            this.step = 'newPhone'
            clearInterval(this.timerr)
            this.codeText = '获取验证码'
            this.isProhibit = true
            this.second = 60
            this.isImg = false
            this.phoneKey = ''
            this.cap.refresh()
          }).catch(err => {
            this.errorTips.code = err.msg
          })
        } else if (this.step === 'newPhone') {
          if (!this.saveNewPhone) {
            this.errorTips.newPhone = '请输入新手机号'
            return false
          }
          let reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
          if (!reg.test(parseInt(this.saveNewPhone))) {
            this.errorTips.newPhone = '新手机号格式不正确'
            return false
          }
          if (!this.phoneCode) {
            this.errorTips.code = '请输入验证码'
            return false
          }
          let data = {
            mobile: this.saveNewPhone,
            codeToken: this.token,
            code: this.phoneCode
          }
          this.$config({ handlers: true }).$post(userService.POST_UPDATE_MOBILE, data).then((res) => {
            this.step = 'phoneSuccess'
            this.confirmText = '完成'
            this.accountPhone = this.saveNewPhone
            this.newPhone = this.saveNewPhone
            this.saveNewPhone = ''
            let tempLoginInfo = JSON.parse(JSON.stringify(this.centerInfo))
            tempLoginInfo.mobile = data.mobile
            this.storeLoginInfo(tempLoginInfo)
            let tempCenterInfo = JSON.parse(JSON.stringify(this.centerInfo))
            tempCenterInfo.consumerUser.mobile = data.mobile
            this.storeCenterInfo(tempCenterInfo)
          }).catch(err => {
            this.errorTips.code = err.msg
          })
        } else if (this.step === 'phoneSuccess') {
          this.messageBoxExplain = '修改成功'
          this.step = 'initialPhone'
          this.phoneCode = ''
          this.messageBoxShow = false
        }
      }
    },
    phoneFocus (val) {
      switch (val) {
        case 'oldphone': this.errorTips.oldPhone = ''
          break
        case 'newphone': this.errorTips.newPhone = ''
          break
      }
    },
    codeFocus () {
      this.errorTips.code = ''
    },
    getCode () {
      // 获取验证码
      if (this.isProhibit) {
        return false
      }
      let data = {}
      if (this.isOldphone) {
        data = {
          'mobile': this.centerInfo.consumerUser.mobile,
          'type': 'CONSUMER_USER_VERIFY_MOBILE',
          captcha: this.phoneKey
        }
      } else {
        data = {
          'mobile': this.saveNewPhone,
          'type': 'CONSUMER_USER_UPDATE_MOBILE',
          captcha: this.phoneKey
        }
      }
      this.$config({ handlers: true }).$get(activityService.GET_CODE, data).then((res) => {
        this.errorTips.code = res.msg
        this.isProhibit = true
        clearInterval(this.timerr)
        this.timerr = setInterval(() => {
          this.codeText = `倒计时${this.second}秒`
          this.second--
          if (this.second <= 0) {
            clearInterval(this.timerr)
            this.codeText = '获取验证码'
            this.isProhibit = false
            this.second = 60
            this.isImg = false
            this.phoneKey = ''
            this.cap.refresh()
          }
        }, 1000)
      }).catch(err => {
        if (err.code === 10001) {
          this.errorTips.code = err.msg
          this.opacity = 1
          clearInterval(this.timerr)
          this.codeText = '获取验证码'
          this.isProhibit = false
          this.second = 60
          this.isImg = false
          this.phoneKey = ''
          this.cap.refresh()
        } else if (err.code === 10050) {
          this.errorTips.code = '验证码输入过于频繁'
        } else {
          this.errorTips.code = err.msg
          this.opacity = 1
          clearInterval(this.timerr)
          this.codeText = '获取验证码'
          this.isProhibit = false
          this.second = 60
          this.isImg = false
          this.phoneKey = ''
          this.cap.refresh()
        }
      })
    },
    isGetCodePermission (val) {
      // if (this.isImg && this.phoneStatus && !this.isSend) {
      if (this.isImg && this.phoneStatus) {
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
    checkPhone (param) {
      let reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
      if (reg.test(parseInt(param))) {
        this.phoneStatus = true
      } else {
        this.phoneStatus = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.v-user-info /deep/ {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  .iconfont {
    &.fr {
      margin-left: 26px;
    }
    &.v-hidden {
      opacity: 0;
    }
  }
  .v-return-user {
    display: block;
    width: 100%;
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 32px;
    color: #222;
    padding: 0 30px;
  }
  .v-list {
    width: 100%;
    background-color: #fff;
    font-size: 30px;
    color: #555555;
    .v-item {
      width: 100%;
      height: 100px;
      line-height: 100px;
      border-bottom: 1px solid #e2e2e2;
      padding: 0 40px;
      &.v-avatar {
        height: 170px;
        line-height: 170px;
        img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          vertical-align: middle;
          margin-top: 25px;
        }
      }
      .v-content {
        color: #222222;
      }
      .ve-upload-box {
        display: none;
      }
    }
  }
  .message-box {
    .ve-message-box {
      width: 540px !important;
      overflow: visible;
      .ve-message-box__header {
        background-color: rgba(0, 0, 0, 0);
      }
      .ve-message-box__container {
        padding: 30px 40px 10px;
        .rule {
          font-size: 28px;
          padding-bottom: 30px;
        }
      }
      .ve-message-box__btns {
        text-align: center;
      }
      .com-input {
        margin-bottom: 35px;
      }
      #captchaChangeMobile {
        margin-bottom: 35px;
      }
      .v-getcode-from {
        position: relative;
        .phone-code {
          height: 80px;
          margin-bottom: 20px;
          display: inline-block;
          width: 292px;
        }
        .phone-code-btn {
          width: 160px;
          height: 90px;
          line-height: 90px;
          font-size: 20px;
          text-align: center;
          color: #222;
          background-color: #ffd021;
          display: inline-block;
          border-radius: 4px;
          float: right;
        }
        .v-error {
          position: absolute;
        }
      }
      .button--primary {
        width: 100%;
        height: 80px;
        font-size: 28px;
        margin: 0 auto;
        border-radius: 4px;
      }
    }
    .v-success-img {
      width: 122px;
    }
    .v-success-explain {
      text-align: center;
    }
  }
}
</style>

