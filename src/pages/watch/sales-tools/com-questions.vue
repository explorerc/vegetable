<template>
  <div class="v-questions-from">
    <div class="v-content">
      <img :src="defaultImg" alt="" v-if="defaultImg" class="v-question-img">
      <p class="v-title">
        {{questions.title}}
      </p>
      <p class="v-summary">
        {{questions.description}}
      </p>
      <div class="v-questions">
        <com-question v-for="(item,index) in dragData"
                    :value.sync="item"
                    :edit="false"
                    :index="index+1"
                    :key="index"
                    :ref="`com${index}`">
        </com-question>
      </div>
      <button class="v-save" @click="save">提交</button>
    </div>
  </div>
</template>
<script>
import question from 'components/questionnaire/wrap'
import loginMixin from 'components/login-mixin'
import questionService from 'src/api/questionnaire-service'
export default {
  components: {
    comQuestion: question
  },
  mixins: [loginMixin],
  props: {
    dragData: {
      type: Array,
      default: null
    },
    naireId: {
      type: Number,
      default: null
    },
    visitorId: {
      type: String,
      default: null
    },
    questions: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      activityId: this.$route.params.id,
      imgHost: process.env.IMGHOST + '/'
    }
  },
  computed: {
    defaultImg () {
      return this.questions.imgUrl ? this.$imgHost + '/' + this.questions.imgUrl : ''
    }
  },
  methods: {
    save () {
      let result = true
      let refs = this.$refs
      let data = {}
      data.activityId = this.$route.params.id
      data.naireId = this.naireId
      data.visitorId = this.visitorId
      data.extData = {}
      data.extData.wechat_auth = this.getAuthInfo()
      data.naireData = {}
      Object.keys(refs).forEach(key => {
        if (result) {
          let returnData = refs[key][0].check()
          if (!returnData) {
            result = false
          } else {
            data.naireData[returnData.id] = returnData.value
            switch (returnData.type) {
              case 'phone':
                data.extData.phone = returnData.value
                data.extData.verifyCode = returnData.code
                break
              case 'name':
                data.extData.real_name = returnData.value
                break
              case 'edu':
                data.extData.education_level = returnData.value
                break
              case 'birth':
                data.extData.birthday = returnData.value
                break
              case 'area':
                data.extData.address = returnData.value
                break
              case 'sex':
                returnData.list.forEach((item) => {
                  if (returnData.value === item.key) {
                    data.extData[returnData.type] = item.value === '男' ? 'M' : 'W'
                  }
                })
                break
              case 'email':
              case 'industry':
              case 'position':
                data.extData[returnData.type] = returnData.value
                break
            }
          }
        }
      })
      if (result) {
        data.extData = JSON.stringify(data.extData)
        data.naireData = JSON.stringify(data.naireData)
        this.$config({ handlers: true }).$post(questionService.POST_QUESTION, data).then((res) => {
          this.$toast({
            content: '提交成功',
            position: 'center'
          })
          this.$emit('questionSuccess')
        }).catch((err) => {
          if (err.code === 111) {
            let refs = this.$refs
            let len = Object.keys(refs).length - 1
            refs[`com${len}`][0].$refs.content.errorTip = '验证码不正确'
          } else if (err.code === 15110) {
            this.$emit('questionSuccess')
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
    }
  }
}
</script>

<style lang='scss' scoped>
.v-questions-from {
  text-align: center;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  font-size: 24px;
  color: #222;
  .v-content {
    overflow: auto;
    height: 100%;
    padding: 85px 50px 50px;
  }

  img {
    margin: 0 auto;
    display: block;
  }

  .v-title {
    word-break: break-all;
    text-align: center;
    margin: 50px auto 0;
    font-size: 36px;
  }

  .v-summary {
    word-break: break-all;
    text-align: center;
    margin: 20px auto 0;
    border-bottom: 1px solid #ffd021;
    padding-bottom: 24px;
  }
  .el-select .el-input__inner {
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    overflow: hidden;
  }
  .v-save {
    width: 300px;
    height: 60px;
    line-height: 60px;
    background-color: #ffd021;
    color: #222;
    margin: 60px auto 50px;
    border: none;
    border-radius: 50px;
  }
}
</style>

