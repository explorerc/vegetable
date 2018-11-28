<template>
  <div class="v-questions-from">
    <a @click="colse"
       class="v-close">收起<i class="iconfont icon-Up"></i></a>
    <div class="v-content">
      <img :src="defaultImg"
           alt=""
           v-if="defaultImg"
           class="v-question-img">
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
      <button class="v-save"
              @click="save">提交</button>
    </div>
  </div>
</template>
<script>
import question from 'components/questionnaire/wrap'
import loginMixin from 'components/login-mixin'
import questionService from 'src/api/questionnaire-service'
import EventBus from 'src/utils/eventBus.js'
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
      let isRefresh = false
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
                data.extData.verifyCode = returnData.code ? returnData.code : ''
                isRefresh = returnData.code
                break
              case 'name':
                data.extData.real_name = returnData.value
                break
              case 'edu':
                returnData.list.forEach((item) => {
                  if (returnData.value === item.key) {
                    data.extData['education_level'] = item.value
                  }
                })
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
              case 'industry':
                returnData.list.forEach((item) => {
                  if (returnData.value === item.key) {
                    data.extData[returnData.type] = item.value
                  }
                })
                break
              case 'email':
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
          EventBus.$emit('red_packet', {
            condition: 3
          })
          this.$toast({
            content: '提交成功',
            position: 'center'
          })

          if (isRefresh) {
            setTimeout(() => {
              this.$router.go(0)
            }, 1000)
          } else {
            this.$emit('questionSuccess', false)
          }
        }).catch((err) => {
          if (err.code === 10020) {
            let refs = this.$refs
            let len = Object.keys(refs).length - 1
            refs[`com${len}`][0].$refs.content.errorTip = '验证码不正确'
          } else if (err.code === 15110) {
            this.$emit('questionSuccess', false)
            this.$toast({
              content: err.msg,
              position: 'center'
            })
            if (isRefresh) {
              setTimeout(() => {
                this.$router.go(0)
              }, 1000)
            }
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
      } else {
        this.$toast({
          content: '您没有将必填项目填写完整，请返回修改',
          position: 'center'
        })
      }
    },
    colse () {
      this.$emit('questionSuccess', true)
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
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  /deep/ {
    .v-close {
      font-size: 30px;
      color: #555;
      display: block;
      width: 170px;
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
      z-index: 100;
    }
    .v-content {
      height: 100%;
      padding: 85px 50px 50px;
      .single-select-wrap {
        .el-radio__original {
          display: none;
        }
        .el-checkbox__original {
          display: none;
        }
        .q-edit-content {
          input {
            font-size: 28px;
            color: #222222;
          }
        }
      }
    }

    img {
      margin: 0 auto;
      display: block;
      max-width: 100%;
      max-height: 140px;
    }

    .v-title {
      word-break: break-all;
      text-align: center;
      margin: 50px auto 0;
      font-size: 30px;
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
      font-size: 30px;
    }
  }
}
</style>

