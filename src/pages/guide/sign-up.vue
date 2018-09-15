<template>
  <div class="v-signup">
    <p class="v-title">
      为了更好的接收活动直播提醒，请填写如下信息：
    </p>
    <div class="v-operation" v-if="activity.viewCondition === 'APPOINT'">
      <template v-for="item in questionList">
        <template v-if="item.type === 'mobile'">
          <com-input  :inputVal.sync="item.val" :placeholder='item.placeholder' :errorMsg.sync="item.errorMsg" :maxLength="11"></com-input>
          <com-verification-code :inputVal.sync="code" :code.sync="code" :phone="item.val"  @inputFocus="getCode($event)" :isGetCode="isGetCode" placeholder='请输入验证码' :maxLength="6"  :errorMsg.sync="codeError"></com-verification-code>
        </template>
        <com-input v-else-if="item.type === 'email'" :inputVal.sync="item.val" :placeholder='item.placeholder' :errorMsg.sync="item.errorMsg"></com-input>
        <com-input v-else-if="item.type === 'integer'" :inputVal.sync="item.val" :placeholder='item.placeholder' :errorMsg.sync="item.errorMsg"></com-input>
        <com-select v-else-if="item.type === 'select'" :selectOptions="item.detail" @selected="selected($event, item.id)"></com-select>
        <com-input v-else-if="item.type === 'text'" :inputVal.sync="item.val" :placeholder='item.placeholder' :errorMsg.sync="item.errorMsg"></com-input>
      </template>
      <a href="javascript:;" @click="submitAppoint" class="v-submit">提交</a>
    </div>
    <div class="v-operation" v-else>
      <com-input inputVal="15210101011" placeholder='请输入手机号'></com-input>
      <com-verification-code phone='15210102723' @inputFocus="getCode($event)" :isGetCode="isGetCode" placeholder='输入验证码'></com-verification-code>
      <a href="javascript:;" @click="submit" class="v-submit">提交</a>
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
  export default {
    data () {
      return {
        code: '',
        isGetCode: true,
        activity: {
          viewCondition: 'APPOINT'
        },
        questionList: [],
        selectVal: [],
        codeError: ''
      }
    },
    mounted () {
      this.getQuestionLists()
    },
    components: {
      'com-input': ComInput,
      'com-verification-code': ComVerificationCode,
      'com-select': ComSelect
    },
    created () {
    },
    watch: {
    },
    methods: {
      getCode (val) {
        this.code = val
      },
      selected (val, id) {
        let obj = []
        obj['questionId'] = id
        obj['answer'] = val
        this.selectVal.push(obj)
      },
      submitAppoint () {
        let isVerification = true
        let data = {
          activityId: this.$route.params.id,
          answer: []
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
            data.mobile = element.val
          } else if (element.type !== 'select') {
            let obj = {}
            obj.questionId = element.id
            obj.answer = element.val
            data.answer.push(obj)
          }
        })
        if (isVerification) {
          if (!this.verification(this.code, 'Y', 'integer')) {
            this.codeError = '请输入正确验证码'
          }
          data.code = this.code
          for (let i; i < this.selectVal.length; i++) {
            let obj = {}
            obj.questionId = this.selectVal[i].id
            obj.answer = this.selectVal[i].val
            data.answer.push(obj)
          }
          GuidManage.applyActivity(data).then((res) => {
            if (res.code === 200) {
              this.$router.replace('/Success/' + this.$route.params.id)
            }
          })
        }
      },
      submit () {
        this.isGetCode = !this.isGetCode
        this.$router.replace('/Success/' + this.$route.params.id)
      },
      getQuestionLists () {
        let data = {
          'activityId': this.$route.params.id
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
        if (val === '') {
          if (isRequired === 'Y') {
            return false
          }
        } else {
          switch (type) {
            case 'mobile': return phoneReg.test(val)
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

