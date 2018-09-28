<template>
  <div class="v-checkState">
    <com-input :inputVal.sync="user.phone" placeholder='请输入手机号' :maxLength="11" v-if="user.isDisabled" isDisabled="disabled" :errorMsg.sync="phoneError"></com-input>
    <com-input :inputVal.sync="user.phone" placeholder='请输入手机号' :maxLength="11" v-else :errorMsg.sync="phoneError"></com-input>
    <com-verification-code :phone='user.phone' :inputVal.sync="code" v-if="!user.isDisabled" :code.sync="code" @inputFocus="getCode($event)" :isGetCode="isGetCode" placeholder='输入验证码' :maxLength="6" :errorMsg.sync="codeError" codeType="CONSUMER_USER_LOGIN"></com-verification-code>
    <button class="primary-button" @click="submit">提交</button>
  </div>
</template>
<script>
  import ComInput from '../../components/common/signup/com-input.vue'
  import ComVerificationCode from '../../components/common/signup/com-code.vue'
  import activityService from 'src/api/activity-service'
  import userService from 'src/api/user-service'
  export default {
    data () {
      return {
        code: '',
        isGetCode: true, // 控制验证码
        activity: {
          viewCondition: 'APPOINT', // 活动类型 APPOINT报名观看 NONE 无条件
          status: '' // 当前活动状态
        },
        user: {
          phone: '', // 无条件观看用户手机
          isApplay: false, // 是否已经报名
          isOrder: false, // 是否已经预约
          isDisabled: false // 手机框是否可输入
        },
        codeError: '', // 验证码错误提示
        phoneError: ''
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
          this.$router.replace('/guid/' + this.$route.params.id)
        }).catch((err) => {
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
      submit () { // 提交验证信息
        if (!this.verification(this.user.phone, 'Y', 'mobile')) {
          this.phoneError = '请正确填写手机号'
          return false
        }
        if (!this.user.isDisabled) {
          if (!this.verification(this.code, 'Y', 'integer')) {
            this.codeError = '请输入正确验证码'
            return false
          }
        }
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
                  this.$router.replace('/guid/' + this.$route.params.id)
                } else {
                  this.subScribe()
                }
              }).catch((err) => {
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
          })
        }
      },
      verification (val, isRequired, type) {
        let phoneReg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
        let emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
        let integerReg = /^[0-9]*$/

        if (type === 'mobile') {
          val = this.user.phone === '' ? val : this.user.phone
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
          this.activity.viewCondition = res.data.activity.viewCondition
          this.activity.status = res.data.activity.status
          this.user.isApplay = res.data.joinInfo.isApplay
          this.user.isOrder = res.data.joinInfo.isOrder
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
.v-checkState {
}
</style>

