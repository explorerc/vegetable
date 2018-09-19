<template>
  <div class="v-signup">
    <p class="v-title">
      为了更好的接收活动直播提醒，请填写如下信息：
    </p>
    <div class="v-operation" v-if="activity.viewCondition === 'APPOINT'">
      <template v-for="item in questionList">
        <template v-if="item.type === 'mobile'">
          <com-input  :inputVal.sync="user.phone" :placeholder='item.placeholder' :errorMsg.sync="item.errorMsg" :maxLength="11" v-if="user.isDisabled" isDisabled="disabled"></com-input>
          <com-input  :inputVal.sync="item.val" :placeholder='item.placeholder' :errorMsg.sync="item.errorMsg" :maxLength="11" v-else></com-input>
          <com-verification-code :inputVal.sync="code" :code.sync="code" v-if="!user.isDisabled" :phone="item.val"  @inputFocus="getCode($event)" :isGetCode="isGetCode" placeholder='请输入验证码' :maxLength="6" :errorMsg.sync="codeError" codeType="APPLY_ACTIVITY"></com-verification-code>
        </template>
        <com-input v-else-if="item.type === 'email'" :inputVal.sync="item.val" :placeholder='item.placeholder' :errorMsg.sync="item.errorMsg"></com-input>
        <com-input v-else-if="item.type === 'integer'" :inputVal.sync="item.val" :placeholder='item.placeholder' :errorMsg.sync="item.errorMsg"></com-input>
        <com-select v-else-if="item.type === 'select'" :selectOptions="item.detail" @selected="selected($event, item.id)"></com-select>
        <com-input v-else-if="item.type === 'text'" :inputVal.sync="item.val" :placeholder='item.placeholder' :errorMsg.sync="item.errorMsg"></com-input>
      </template>
      <button class="primary-button" @click="submitAppoint">提交</button>
    </div>
    <div class="v-operation" v-else>
      <com-input :inputVal.sync="user.phone" placeholder='请输入手机号' :maxLength="11" v-if="user.isDisabled" isDisabled="disabled" :errorMsg.sync="phoneError"></com-input>
      <com-input :inputVal.sync="user.phone" placeholder='请输入手机号' :maxLength="11" v-else :errorMsg.sync="phoneError"></com-input>
      <com-verification-code :phone='user.phone' v-if="!user.isDisabled" :inputVal.sync="code"  :code.sync="code" @inputFocus="getCode($event)" :isGetCode="isGetCode" placeholder='输入验证码' :maxLength="6" :errorMsg.sync="codeError" codeType="CONSUMER_USER_LOGIN"></com-verification-code>
      <button class="primary-button" @click="submit">提交</button>
    </div>
    <p class="v-explain">
      我已阅读并遵守<span class="v-blue">《服务条款》</span>
    </p>
  </div>
</template>

<script>
  import ComInput from '../../components/common/signup/com-input.vue'
  import ComVerificationCode from '../../components/common/signup/com-code.vue'
  import ComSelect from '../../components/common/signup/com-select.vue'
  import GuidManage from '../../api/guid-manage.js'
  import activityManage from '../../api/activity-manage.js'
  import loginMixin from 'components/login-mixin'
  import authManage from 'src/api/auth-manage'
  export default {
    mixins: [loginMixin],
    data () {
      return {
        code: '',
        isGetCode: true, // 控制验证码
        activity: {
          viewCondition: 'APPOINT', // 活动类型 APPOINT报名观看 NONE 无条件
          status: '' // 当前活动状态
        },
        questionList: [], // 报名表单
        codeError: '', // 验证码错误提示
        phoneError: '', // 预约活动手机错误提示
        user: {
          phone: '', // 无条件观看用户手机
          isApplay: false, // 是否已经报名
          isOrder: false, // 是否已经预约
          isDisabled: false // 手机框是否可输入
        },
        selectVal: [] // 下拉
      }
    },
    mounted () {
    },
    components: {
      'com-input': ComInput,
      'com-verification-code': ComVerificationCode,
      'com-select': ComSelect
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
      selected (val, id) {
        let isCz = false
        for (let i = 0; i < this.selectVal.length; i++) {
          if (this.selectVal[i]['questionId'] === id) {
            this.selectVal[i]['answer'] = val
            isCz = true
            return false
          }
        }
        if (!isCz) {
          let obj = []
          obj['questionId'] = id
          obj['answer'] = val
          this.selectVal.push(obj)
        }
      },
      submitAppoint () {
        let isVerification = true
        let data = {
          activityId: this.$route.params.id,
          answer: [],
          __errHandler: true
        }
        this.questionList.forEach(element => {
          if (isVerification && !this.verification(element.val, element.required, element.type)) {
            switch (element.type) {
              case 'mobile': element.errorMsg = '请正确填写手机号'
                break
              case 'email': element.errorMsg = '请正确填写邮箱'
                break
              default: element.errorMsg = '请正确填写表格'
                break
            }
            isVerification = false
          }
          if (element.type === 'mobile') {
            data.mobile = this.user.phone === '' ? element.val : this.user.phone
            let obj = {}
            obj.questionId = element.id
            obj.answer = data.mobile
            data.answer.push(obj)
          } else if (element.type !== 'select') {
            let obj = {}
            obj.questionId = element.id
            obj.answer = element.val
            data.answer.push(obj)
          }
        })
        if (isVerification) {
          if (!this.user.isDisabled) {
            if (!this.verification(this.code, 'Y', 'integer')) {
              this.codeError = '请输入正确验证码'
            }
            data.code = this.code
          }
          if (this.selectVal) {
            for (let i = 0; i < this.selectVal.length; i++) {
              let obj = {}
              obj.questionId = this.selectVal[i].questionId
              obj.answer = this.selectVal[i].answer
              data.answer.push(obj)
            }
          }
          GuidManage.applyActivity(data).then((res) => {
            if (res.code === 200) {
              this.$router.replace('/Success/' + this.$route.params.id)
            }
          })
        }
      },
      getActivity () { // 获取活动信息
        activityManage.getLiveInfo({
          activityId: this.$route.params.id,
          __errHandler: true
        }).then((res) => {
          if (res.code === 200) {
            this.activity.viewCondition = res.data.activity.viewCondition
            this.activity.status = res.data.activity.status
            this.user.isApplay = res.data.joinInfo.isApplay
            this.user.isOrder = res.data.joinInfo.isOrder
            if (this.activity.viewCondition === 'APPOINT') {
              this.getQuestionLists()
            }
          }
        })
      },
      orderActivity () { // 预约活动
        GuidManage.orderActivity({
          activityId: this.$route.params.id,
          __errHandler: true
        }).then((res) => {
          if (res.code === 200) {
            this.$router.replace('/Success/' + this.$route.params.id)
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
          }
        })
      },
      submit () {
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
          this.orderActivity()
        } else {
          authManage.login({
            mobile: this.user.phone,
            code: this.code,
            wechatAuth: sessionStorage.getItem('wechatAuth'),
            __errHandler: true
          }).then((res) => {
            if (res.code === 200) {
              if (res.data) {
                sessionStorage.setItem('login', JSON.stringify(res.data))
                activityManage.getLiveInfo({
                  activityId: this.$route.params.id,
                  __errHandler: true
                }).then((res) => {
                  if (res.code === 200) {
                    if (res.data.joinInfo.isOrder) {
                      this.$router.replace('/Success/' + this.$route.params.id)
                    } else {
                      this.orderActivity()
                    }
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
                  }
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
            }
          })
        }
      },
      getQuestionLists () {
        let data = {
          activityId: this.$route.params.id,
          __errHandler: true
        }
        GuidManage.getQuestionInfo(data).then((res) => {
          if (res.code === 200) {
            this.questionList = res.data.questionList.map((item) => {
              item.val = ''
              item.errorMsg = ''
              return item
            })
          }
        })
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
      }
    }
  }
</script>
<style lang="scss" scoped>
.v-signup {
  .v-title {
    font-size: 28px;
    margin-bottom: 30px;
  }
  .v-explain {
    text-align: center;
    font-size: 22px;
    color: #555;
    margin-top: 15px;
    .v-blue {
      color: #4b5afe;
    }
  }
}
</style>

