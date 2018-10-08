<template>
  <div class="v-checkState">
    <com-input :inputVal.sync="user.phone"
               placeholder='请输入手机号'
               :maxLength="11"
               v-if="user.isDisabled"
               isDisabled="disabled"
               :errorMsg.sync="phoneError"></com-input>
    <com-input :inputVal.sync="user.phone"
               placeholder='请输入手机号'
               :maxLength="11"
               type="mobile"
               v-else
               :errorMsg.sync="phoneError"></com-input>
    <com-verification-code :phone='user.phone'
                           :inputVal.sync="code"
                           v-if="!user.isDisabled"
                           :code.sync="code"
                           @inputFocus="getCode($event)"
                           :isGetCode="isGetCode"
                           placeholder='输入验证码'
                           :maxLength="6"
                           :errorMsg.sync="codeError"
                           codeType="CONSUMER_USER_LOGIN"></com-verification-code>
    <button class="primary-button"
            @click="submit">提交</button>
  </div>
</template>
<script>
import ComInput from '../../components/common/signup/com-input.vue'
import ComVerificationCode from '../../components/common/signup/com-code.vue'
import activityService from 'src/api/activity-service'
import userService from 'src/api/user-service'
import loginMixin from 'components/login-mixin'
export default {
  mixins: [loginMixin],
  data () {
    return {
      MOBILE_HOST: process.env.MOBILE_HOST,
      code: '',
      isGetCode: true, // 控制验证码
      activity: {
        viewCondition: '', // APPOINT是报名活动 ''是无限制活动
        countDown: '', // 距离活动开始时间（秒）
        status: '' // 当前活动状态
      },
      user: {
        phone: '', // 无条件观看用户手机
        isApplay: false, // 是否已经报名
        isOrder: false, // 是否已经预约
        isDisabled: false // 手机框是否可输入
      },
      codeError: '', // 验证码错误提示
      phoneError: '',
      isClick: true // 无条件是否可点击
    }
  },
  mounted () {
  },
  components: {
    'com-input': ComInput,
    'com-verification-code': ComVerificationCode
  },
  created () {
    this.getActivity()
    let userInfo = JSON.parse(sessionStorage.getItem('login'))
    if (userInfo) {
      this.user.phone = userInfo.mobile
      if (this.user.phone) {
        this.user.isDisabled = true
      }
    }
  },
  watch: {
  },
  methods: {
    getCode (val) {
      this.code = val
    },
    subScribe () { // 预约活动
      let data = {
        activityId: this.$route.params.id
      }
      this.$config({ handlers: true }).$post(activityService.POST_SUBSCRIBE, data).then((res) => {
        this.$router.replace('/guide/' + this.$route.params.id)
      }).catch((err) => {
        if (err.code === 12001) {
          this.$router.replace('/success/' + this.$route.params.id)
        } else {
          this.isClick = false
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
        }
      })
    },
    submit () { // 提交验证信息
      if (!this.isClick) {
        return false
      }
      if (!this.verification(this.user.phone, 'Y', 'mobile')) {
        this.phoneError = '请正确填写手机号'
        return false
      }
      if (!this.user.isDisabled) {
        if (!this.verification(this.code, 'Y', 'code')) {
          this.codeError = '请输入正确验证码'
          return false
        }
      }
      this.isClick = false
      if (this.user.isOrder || this.user.isDisabled) {
        this.subScribe()
      } else {
        this.$config({ handlers: true }).$post(userService.POST_MOBILELOGIN, {
          mobile: this.user.phone,
          code: this.code,
          wechatAuth: sessionStorage.getItem('wechatAuth')
        }).then((res) => {
          if (res.data) {
            sessionStorage.setItem('login', JSON.stringify(res.data))
            this.$config({ handlers: true }).$get(activityService.GET_LIVEINFO, {
              activityId: this.$route.params.id
            }).then((res) => {
              if (res.data.joinInfo.isOrder) {
                this.$router.replace('/guide/' + this.$route.params.id)
              } else {
                this.subScribe()
              }
            }).catch((err) => {
              this.isClick = true
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
            this.$messageBox({
              header: '提示',
              content: res.msg,
              confirmText: '确定',
              handleClick: (e) => {
                if (e.action === 'cancel') {
                } else if (e.action === 'confirm') {
                }
              }
            })
            sessionStorage.removeItem('login')
            sessionStorage.removeItem('wechatAuth')
          }
        }).catch((err) => {
          if (err.code === 10020) {
            this.codeError = '请输入正确验证码'
          } else if (err.code === 12002) {
            this.$router.replace('/Success/' + this.$route.params.id)
          } else {
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
          }
        })
      }
    },
    verification (val, isRequired, type) {
      let phoneReg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
      let emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
      let integerReg = /^[0-9]*$/
      let codeReg = /^\d{6}$/

      if (type === 'mobile') {
        val = this.user.phone === '' ? val : this.user.phone
      }
      if (type === 'code') {
        return codeReg.test(val)
      }
      if (val === '') {
        if (isRequired === 'Y') {
          return false
        }
      } else {
        switch (type) {
          case 'mobile': val = this.user.phone === '' ? val : this.user.phone
            return phoneReg.test(val)
          case 'integer': return integerReg.test(val)
          case 'email': return emailReg.test(val)
        }
      }
      return true
    },
    getActivity () { // 获取活动信息
      this.$config({ handlers: true }).$get(activityService.GET_LIVEINFO, {
        activityId: this.$route.params.id
      }).then((res) => {
        this.activity.status = res.data.activity.status
        this.activity.countDown = res.data.activity.countDown
        this.activity.viewCondition = res.data.activity.viewCondition
        this.user.isApplay = res.data.joinInfo.isApplay
        this.user.isOrder = res.data.joinInfo.isOrder
        if (this.activity.countDown < 1800) {
          if (this.user.isApplay && this.activity.viewCondition === 'APPOINT') {
            this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
          } else if (this.activity.viewCondition === 'NONE') {
            if (this.user.isOrder) {
              this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
            } else {
              this.doAuth(this.MOBILE_HOST + 'guide/' + this.$route.params.id)
            }
          }
        }
        if (this.activity.status === 'LIVING') {
          if (this.user.isApplay && this.activity.viewCondition === 'APPOINT') {
            this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
          } else if (this.activity.viewCondition === 'NONE') {
            if (this.user.isOrder) {
              this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
            } else {
              this.doAuth(this.MOBILE_HOST + 'guide/' + this.$route.params.id)
            }
          }
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.v-checkState {
}
</style>

