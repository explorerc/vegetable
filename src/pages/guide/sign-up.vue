<template>
  <div class="v-signup">
    <div class="v-wrap">
      <p class="v-title"  v-if='activity.viewCondition === "APPOINT"'>
        请填写报名表单，参加此次直播活动。
      </p>
      <p class="v-title"  v-else>
        活动预约后，您将在开播前收到开播提醒，确保不会错过精彩内容。
      </p>
      <div class="v-operation"
           v-if="activity.viewCondition === 'APPOINT'">
        <div v-for="item in questionList">
          <div v-if="item.ext === 'phone'">
            <span class='label'>{{item.title}}<i v-if='item.required === "Y"'>*</i></span>
            <com-input :inputVal.sync="user.phone" :placeholder='item.placeholder' :errorMsg.sync="item.errorMsg" :maxLength="11" v-if="user.isDisabled" isDisabled="disabled"></com-input>
            <com-input :inputVal.sync="item.val" :placeholder='item.placeholder' type="mobile" :errorMsg.sync="item.errorMsg" :maxLength="11" v-else></com-input>
            <com-verification-code :inputVal.sync="code" :code.sync="code" v-if="!user.isDisabled" :phone="item.val" @inputFocus="getCode($event)" :isGetCode="isGetCode" placeholder='请输入验证码' :maxLength="6" :errorMsg.sync="codeError" codeType="APPLY_ACTIVITY"></com-verification-code>
          </div>
          <div v-else-if="item.ext === 'email'">
            <span class='label'>{{item.title}}<i v-if='item.required === "Y"'>*</i></span>
            <com-input :inputVal.sync="item.val" :placeholder='item.placeholder' :errorMsg.sync="item.errorMsg"></com-input>
          </div>
          <div v-else-if="item.ext === 'integer'">
            <span class='label'>{{item.title}}<i v-if='item.required === "Y"'>*</i></span>
            <com-input :inputVal.sync="item.val" :placeholder='item.placeholder' :errorMsg.sync="item.errorMsg"></com-input>
          </div>
          <div class='select-box' v-else-if="item.ext === 'select'">
            <span class='label'>{{item.title}}<i v-if='item.required === "Y"'>*</i></span>
            <com-select class='sign-select' :class="{'error':item.errorMsg.length}" :selectOptions="item.detail.list" @selected="selected($event, item.id)"></com-select>
            <span class='selectError' v-if='item.errorMsg.length'>{{item.errorMsg}}</span>
          </div>
          <div v-else-if="item.ext === 'text'">
            <span class='label'>{{item.title}}<i v-if='item.required === "Y"'>*</i></span>
            <com-input :inputVal.sync="item.val" :placeholder='item.placeholder' :errorMsg.sync="item.errorMsg"></com-input>
          </div>
          <div v-else-if="item.ext === 'name'">
            <span class='label'>{{item.title}}<i v-if='item.required === "Y"'>*</i></span>
            <com-input :inputVal.sync="item.val" :placeholder='item.placeholder' :errorMsg.sync="item.errorMsg"></com-input>
          </div>
        </div>
        <button class="static-btn primary-button" @click="submitAppoint" :disabled="!checkAgreement">立即报名</button>
        <div @click='back' class='back'>返回</div>
        <!-- <transition name='fade'>
          <div v-show='floatSubmit' class='float-btn-box'><button class="pos-btn primary-button" @click="submit" >提交</button></div>
        </transition> -->
      </div>
      <div class="v-operation"
           v-else>
        <com-input :inputVal.sync="user.phone"
                   placeholder='请输入手机号'
                   :maxLength="11"
                   v-if="user.isDisabled"
                   isDisabled="disabled"
                   :errorMsg.sync="phoneError"></com-input>
        <com-input :inputVal.sync="user.phone"
                   placeholder='请输入手机号'
                   type="mobile"
                   :maxLength="11"
                   v-else
                   :errorMsg.sync="phoneError"></com-input>
        <com-verification-code :phone='user.phone'
                               v-if="!user.isDisabled"
                               :inputVal.sync="code"
                               :code.sync="code"
                               @inputFocus="getCode($event)"
                               :isGetCode="isGetCode"
                               placeholder='输入验证码'
                               :maxLength="6"
                               :errorMsg.sync="codeError"
                               codeType="CONSUMER_USER_LOGIN"></com-verification-code>
        <button class="static-btn primary-button" @click="submit" >立即预约</button>
        <div @click='back' class='back'>返回</div>
        <!-- <transition name='fade'>
          <div v-show='floatSubmit' class='float-btn-box'><button class="pos-btn primary-button" @click="submit" >提交</button></div>
        </transition> -->
      </div>
      <p class="v-explain">
        <el-checkbox v-model="checkAgreement">我已阅读并遵守</el-checkbox><span class="v-blue" @click="showAgreement()">《服务条款》</span>
      </p>
    </div>
  </div>
</template>

<script>
import ComInput from '../../components/common/signup/com-input.vue'
import ComVerificationCode from '../../components/common/signup/com-code.vue'
import ComSelect from '../../components/common/signup/com-select.vue'
import loginMixin from 'components/login-mixin'
import activityService from 'src/api/activity-service'
import userService from 'src/api/user-service'
import EventBus from 'src/utils/eventBus'
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
      questionList: [], // 报名表单
      codeError: '', // 验证码错误提示
      phoneError: '', // 预约活动手机错误提示
      user: {
        phone: '', // 无条件观看用户手机
        isApplay: false, // 是否已经报名
        isOrder: false, // 是否已经预约
        isDisabled: false // 手机框是否可输入
      },
      email: '',
      selectVal: [], // 下拉
      appointIsClick: true, // 报名是否可点击
      isClick: true, // 无条件是否可点击
      topDis: 0, // 用于切换提交按钮的出现
      wrapDis: 0,
      floatSubmit: true,
      checkAgreement: true
    }
  },
  mounted () {
    this.getInfo()
    // 两个提交按钮来回切换
    let _wrap = document.getElementsByClassName('container')[0]
    _wrap.onscroll = () => {
      this.countCount = _wrap.scrollTop
      this.topDis = document.getElementsByClassName('static-btn')[0].offsetTop
      if (_wrap.scrollTop > this.topDis - document.getElementsByTagName('body')[0].offsetHeight) {
        this.floatSubmit = false
      } else {
        this.floatSubmit = true
      }
    }
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
    'this.$ref.container.scrollTop': {
      handler (newVal) {
        console.log(newVal)
      }
    }
  },
  methods: {
    getCode (val) {
      this.code = val
    },
    async getInfo () {
      await this.$config({ handlers: true }).$get(activityService.GET_LIVEINFO, {
        activityId: this.$route.params.id
      }).then((res) => {
        this.activity.status = res.data.activity.status
        this.activity.countDown = res.data.activity.countDown
        this.activity.viewCondition = res.data.activity.viewCondition
        this.user.isApplay = res.data.joinInfo.isApplay
        this.user.isOrder = res.data.joinInfo.isOrder
        if (this.activity.status === 'LIVING' || this.activity.status === 'PLAYBACK' || this.activity.status === 'FINISH') {
          if (this.user.isApplay && this.activity.viewCondition === 'APPOINT') {
            this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
          } else if (this.activity.viewCondition === 'NONE') {
            this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
          }
        } else if (this.activity.countDown < 1800) {
          if (this.user.isApplay && this.activity.viewCondition === 'APPOINT') {
            this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
          } else if (this.activity.viewCondition === 'NONE') {
            this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
          }
        }
      }).catch(() => {
        this.$router.replace('/empty')
      })
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
      this.questionList.forEach((item, idx) => {
        if (item.id * 1 === id) {
          item.val = val
          item.errorMsg = ''
        }
      })
    },
    submitAppoint () {
      let isVerification = true
      let data = {
        activityId: this.$route.params.id,
        answer: [],
        __errHandler: true
      }
      if (!this.appointIsClick) {
        return false
      }
      this.questionList.forEach((element, idx) => {
        if (isVerification && !this.verification(element.val, element.required, element.ext, idx)) {
          switch (element.ext) {
            case 'phone': element.errorMsg = '请正确填写手机号'
              break
            case 'email': element.errorMsg = '请正确填写邮箱'
              break
            case 'integer': element.errorMsg = '请正确填写数字'
              break
            case 'name': element.errorMsg = '请填写姓名'
              break
            case 'select': element.errorMsg = '请选择下拉选项'
              break
            default: element.errorMsg = '请正确填写表格'
              break
          }
          isVerification = false
        }
        if (element.ext === 'phone') {
          data.mobile = this.user.phone === '' ? element.val : this.user.phone
          let obj = {}
          obj['id'] = element.id
          obj['val'] = data.mobile
          // obj.answer = data.mobile
          data.answer.push(obj)
        } else if (element.ext === 'email') {
          data.email = element.val
          let obj = {}
          obj['id'] = element.id
          obj['val'] = element.val
          // obj.questionId = element.id
          // obj.answer = element.val
          data.answer.push(obj)
        } else if (element.ext !== 'select') {
          let obj = {}
          obj['id'] = element.id
          obj['val'] = element.val
          // obj.questionId = element.id
          // obj.answer = element.val
          data.answer.push(obj)
        }
      })
      if (isVerification) {
        if (!this.user.isDisabled) {
          if (!this.verification(this.code, 'Y', 'code')) {
            this.codeError = '请输入正确验证码'
            return false
          }
          data.code = this.code
        }
        if (this.selectVal) {
          for (let i = 0; i < this.selectVal.length; i++) {
            let obj = {}
            obj['id'] = this.selectVal[i].questionId
            obj['val'] = this.selectVal[i].answer
            // obj[this.selectVal[i].questionId] = this.selectVal[i].answer
            // obj.questionId = this.selectVal[i].questionId
            // obj.answer = this.selectVal[i].answer
            data.answer.push(obj)
          }
        }
        this.appointIsClick = false
        console.log(data.answer)
        data.answer = this.reArrangeList(data.answer)
        this.$config({ handlers: true }).$post(activityService.POST_QUESTIONINFO, data).then((res) => {
          if (this.activity.status === 'LIVING' || this.activity.status === 'PLAYBACK' || this.activity.status === 'FINISH') {
            this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
          } else if (this.activity.countDown < 1800) {
            this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
          } else {
            this.$router.replace('/Success/' + this.$route.params.id)
          }
        }).catch((err) => {
          if (err.code === 10020) {
            this.appointIsClick = true
            this.codeError = '请输入正确验证码'
          } else if (err.code === 12002) {
            if (this.activity.status === 'LIVING' || this.activity.status === 'PLAYBACK' || this.activity.status === 'FINISH') {
              this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
            } else if (this.activity.countDown < 1800) {
              this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
            } else {
              this.$router.replace('/Success/' + this.$route.params.id)
            }
          } else {
            this.appointIsClick = true
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
    getActivity () { // 获取活动信息
      this.$config({ handlers: true }).$get(activityService.GET_LIVEINFO, {
        activityId: this.$route.params.id
      }).then((res) => {
        this.activity.viewCondition = res.data.activity.viewCondition
        this.activity.status = res.data.activity.status
        this.user.isApplay = res.data.joinInfo.isApplay
        this.user.isOrder = res.data.joinInfo.isOrder
        if (this.activity.viewCondition === 'APPOINT') {
          this.getQuestionLists()
        }
      }).catch(() => {
        this.$router.replace('/empty')
      })
    },
    subScribe () { // 预约活动
      let data = {
        activityId: this.$route.params.id
      }
      this.$config({ handlers: true }).$post(activityService.POST_SUBSCRIBE, data).then((res) => {
        if (this.activity.status === 'LIVING' || this.activity.status === 'PLAYBACK' || this.activity.status === 'FINISH') {
          this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
        } else if (this.activity.countDown < 1800) {
          this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
        } else {
          this.$router.replace('/Success/' + this.$route.params.id)
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
    },
    submit () {
      if (!this.isClick) {
        return false
      }
      if (!this.verification(this.user.phone, 'Y', 'phone')) {
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
          if (res.code === 200) {
            if (res.data) {
              sessionStorage.setItem('login', JSON.stringify(res.data))
              this.$config({ handlers: true }).$get(activityService.GET_LIVEINFO, {
                activityId: this.$route.params.id
              }).then((res) => {
                if (res.data.joinInfo.isOrder) {
                  this.user.isApplay = res.data.joinInfo.isApplay
                  this.user.isOrder = res.data.joinInfo.isOrder
                  if (this.activity.status === 'LIVING' || this.activity.status === 'PLAYBACK' || this.activity.status === 'FINISH') {
                    if (this.user.isApplay && this.activity.viewCondition === 'APPOINT') {
                      this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
                    } else if (this.activity.viewCondition === 'NONE') {
                      this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
                    }
                  } else if (this.activity.countDown < 1800) {
                    if (this.user.isApplay && this.activity.viewCondition === 'APPOINT') {
                      this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
                    } else if (this.activity.viewCondition === 'NONE') {
                      this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
                    }
                  } else {
                    this.$router.replace('/Success/' + this.$route.params.id)
                  }
                } else {
                  this.subScribe()
                }
              }).catch(() => {
                this.$router.replace('/empty')
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
        }).catch((err) => {
          this.isClick = true
          if (err.code === 10020) {
            this.appointIsClick = true
            this.codeError = '请输入正确验证码'
          } else if (err.code === 12002) {
            if (this.activity.status === 'LIVING' || this.activity.status === 'PLAYBACK' || this.activity.status === 'FINISH') {
              this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
            } else if (this.activity.countDown < 1800) {
              this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
            } else {
              this.$router.replace('/Success/' + this.$route.params.id)
            }
          } else {
            this.appointIsClick = true
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
    getQuestionLists () {
      this.$get(activityService.GET_QUESTIONINFO, {
        activityId: this.$route.params.id
      }).then((res) => {
        this.questionList = res.data.questionList.map((item) => {
          item.val = ''
          item.errorMsg = ''
          return item
        })
      })
    },
    verification (val, isRequired, type, idx) {
      let phoneReg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
      let emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
      let integerReg = /^[0-9]*$/
      let codeReg = /^\d{6}$/

      if (type === 'phone') {
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
          case 'phone': val = this.user.phone === '' ? val : this.user.phone
            return phoneReg.test(val)
          case 'integer': return integerReg.test(val)
          case 'email': return emailReg.test(val)
        }
      }
      return true
    },
    showAgreement () {
      EventBus.$emit('agreementOpen')
    },
    reArrangeList (arr) {
      const obj = {}
      arr.forEach((item, idx) => {
        obj[item.id] = item.val
      })
      return JSON.stringify(obj)
    },
    back () {
      this.$router.replace('/guide/' + this.$route.params.id)
    }
  }
}
</script>
<style lang="scss" scoped>
.v-signup /deep/ {
  position: static;
  // top: 790px;
  width: 100%;
  // bottom: 0;
  .v-wrap {
    position: static;
    // top: 50%;
    overflow: auto;
    max-height: 100%;
    padding: 30px;
    // left: 0;
    // right: 0;
    // transform: translateY(-50%);
    .com-input {
      input {
        font-size: 28px;
      }
      .error-msg {
        font-size: 28px;
      }
    }
    .v-title {
      font-size: 28px;
      margin-bottom: 30px;
    }
    .v-explain {
      text-align: center;
      font-size: 28px;
      color: #555;
      margin-top: 15px;
      .v-blue {
        color: #4b5afe;
      }
    }
    .v-agreement {
      .ve-message-box {
        height: 560px;
        .ve-message-box__header {
          padding-top: 50px;
        }
        .ve-message-box__container {
          height: 480px;
          overflow-y: auto;
        }
      }
    }
  }
  .float-btn-box {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 165px;
    background: #fff;
    box-shadow: 0 0px 15px #ccc;
  }
  .pos-btn {
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -245px !important;
  }
  // .static-btn {
  //   opacity: 0;
  // }
  // .static-btn.opc0 {
  //   opacity: 1;
  // }
  .v-operation {
    .label {
      display: block;
      color: #222;
      font-size: 30px;
      margin-bottom: 10px;
      i {
        position: relative;
        top: 3px;
        left: 10px;
        display: inline-block;
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        color: #fc5659;
      }
    }
    .select-box {
      position: relative;
    }
    .selectError {
      bottom: -40px;
      left: 10px;
      position: absolute;
      font-size: 28px;
      color: #fc5659;
    }
  }
  .input-form {
    margin-bottom: 40px !important;
  }
  .sign-select.error .el-select {
    border-color: #fc5659;
  }
  .v-explain {
    .el-checkbox__input.is-checked + .el-checkbox__label {
      color: #555;
    }
    .el-checkbox__label {
      position: relative;
      top: 0.5px;
    }
  }
  .back {
    text-align: center;
    margin-bottom: 40px;
  }
}
</style>

