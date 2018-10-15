<template>
  <div class="chat-wrap">
    <input type="text"
           v-model='value'>
    <button @click='sendAction'>发</button>
  </div>
</template>

<script>
import ChatService from './ChatService.js'
import activityService from 'src/api/activity-service'
import userService from 'src/api/user-service'
export default {
  name: 'com-chat',
  data () {
    return {
      vhallParams: {
        token: '',
        appId: '',
        channelId: '',
        accountId: ''
      },
      value: '',
      service: null
    }
  },
  props: {
    activityId: {
      type: String,
      default: ''
    }
  },
  created () {
    this.$config({ handlers: true }).$get(userService.GET_USERREGACTIVITY, { // 获取参会信息
      activityId: this.$route.params.id
    }).then((res) => {
      console.log(res)
      this.vhallParams.accountId = res.data.activityUserId
      this.$config({ handlers: true }).$get(activityService.GET_SDKTOKEN, { // 获取观看端token
        activityId: this.$route.params.id,
        activityUserId: this.vhallParams.accountId
      }).then((res) => {
        this.vhallParams.token = res.data.token
        this.vhallParams.appId = res.data.appId
        this.vhallParams.channelId = res.data.channelRoom
        // this.vhallParams.accountId = res.data.accountId // 从参会接口取activiUserID
        this.$nextTick(() => {
          this.initSdk()

          this.service.regHandler('gg', this.handleGG)
        })
      })
    })
  },
  methods: {
    // initSdk () {
    //   window.Vhall.ready(() => {
    //     /* 初始化聊天对象 */
    //     window.vhallChat = new VhallChat({
    //       token: this.vhallParams.token, // 认证令牌，必填
    //       appId: this.vhallParams.appId, // 在微吼云申请的appId，必填
    //       channelId: this.vhallParams.channelRoon // 频道Id，必填
    //     })
    //     this.on()
    //   })
    //   /* 初始化配置 */
    //   window.Vhall.config({
    //     appId: this.vhallParams.appId, // 应用 ID ,必填
    //     accountId: this.vhallParams.accountId, // 第三方用户唯一标识,必填
    //     token: this.vhallParams.token // token必填
    //   })
    // },
    // on () {
    //   window.vhallChat.onCustomMsg((res) => {
    //     console.log(res)
    //   })
    //   window.vhallChat.on((res) => {
    //     console.log(res)
    //   })
    // },
    // emit (txt) {
    //   window.vhallChat.emit('Hello world')
    // },
    // sendAction () {
    //   this.emit(this.value)
    // }
    initSdk () {
      this.service = new ChatService()
      this.service.init(this.vhallParams)
      // window.Vhall.ready(() => {
      // })
    },
    sendAction () {
      this.service.activityId = '506465732'
      this.service.send('gg', 'abcdefg')
    },
    handleGG (msg) {
      console.log('接收 服务器发来的消息', msg)
    }
  },
  watch: {

  }
}
</script>

<style lang='scss' scoped>
.chat-wrap {
  height: 100%;
  width: 100%;
}
</style>
