<template>
  <div class="v-success" v-if="activity.countDown < 1800 || activity.status === 'LIVING'">
    <img src="../../assets/image/success@2x.png" alt="" class="v-img">
    <p class="v-start-title">
      <span>直播将要开始啦</span>
    </p>
    <button class="primary-button" @click="accountSubmit">进入直播</button>
  </div>
  <div class="v-success" v-else>
    <img src="../../assets/image/success@2x.png" alt="" class="v-img">
    <p class="v-success-title">
      <span v-if="activity.viewCondition === 'APPOINT'">报名成功</span>
      <span v-else-if="activity.viewCondition === 'NONE'">预约成功</span>
    </p>
    <p>活动将于<span class="v-red">{{activity.startTime}}</span>准时开播</p>
  </div>
</template>
<script>
  import loginMixin from 'components/login-mixin'
  import ChatService from '../../components/common/chat/ChatService.js'
  import { mapMutations, mapState } from 'vuex'
  import * as types from 'src/store/mutation-types'
  import ChatConfig from 'src/api/chat-config'
  import activityService from 'src/api/activity-service'
  import userService from 'src/api/user-service'
  export default {
    mixins: [loginMixin],
    data () {
      return {
        activity: {
          viewCondition: '', // APPOINT是报名活动 NONE是无限制活动
          status: '', // 当前活动状态 LIVING 直播中
          startTime: '', // 当前活动开始时间
          countDown: ''
        },
        user: {
          phone: '', // 无条件观看用户手机
          isApplay: false, // 是否已经报名
          isOrder: false // 是否已经预约
        },
        vhallParams: {
          token: '',
          appId: '',
          channelId: '',
          accountId: ''
        }
      }
    },
    mounted () {
    },
    components: {
    },
    created () {
      this.getInfo()
    },
    computed: mapState('tokenMager', {
      chatParams: state => state.chatParams
    }),
    watch: {
    },
    methods: {
      ...mapMutations('tokenMager', {
        setChatParams: types.CHAT_PARAMS
      }),
      accountSubmit () {
        this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
      },
      initSdk () {
        this.service = new ChatService()
        this.service.init(this.vhallParams)
      // window.Vhall.ready(() => {
      // })
      },
      handleActivityStart (msg) {
        this.activity.countDown = 1799
      },
      async getInfo () {
        await this.$config({ handlers: true }).$get(activityService.GET_LIVEINFO, {
          activityId: this.$route.params.id
        }).then((res) => {
          this.activity.viewCondition = res.data.activity.viewCondition
          this.activity.status = res.data.activity.status
          this.activity.startTime = res.data.activity.startTime
          this.activity.countDown = res.data.activity.countDown
          this.user.isApplay = res.data.joinInfo.isApplay
          this.user.isOrder = res.data.joinInfo.isOrder
          debugger
          if ((this.activity.status === 'LIVING' || this.activity.countDown <= 1799) && !res.data.viewLimit.canAppoint) {
            if (this.activity.viewCondition === 'APPOINT') {
              if (res.data.joinInfo.isApplay) {
                this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
              }
            } else if (res.data.joinInfo.isOrder && this.activity.viewCondition === 'NONE') {
              this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
            }
          }
        })
        this.getToken()
      },
      getToken () {
        if ((this.activity.viewCondition === 'APPOINT' && this.user.isApplay) || this.activity.viewCondition !== 'APPOINT') {
          // 报名活动在已报名状态下和预约活动所有状态下可收到消息
          if (!this.chatParams.token) {
            // 当前vuex中没有聊天token 需要获取
            this.$config({ handlers: true }).$get(userService.GET_USERREGACTIVITY, { // 获取参会信息
              activityId: this.$route.params.id
            }).then((res) => {
              this.$config({ handlers: true }).$get(activityService.GET_SDKTOKEN, { // 获取观看端token
                activityId: this.$route.params.id,
                activityUserId: res.data.activityUserId
              }).then((res) => {
                this.vhallParams.token = res.data.token
                this.vhallParams.appId = res.data.appId
                this.vhallParams.channelId = res.data.channelRoom
                this.vhallParams.accountId = res.data.accountId // 从参会接口取activiUserID
                this.setChatParams(this.vhallParams)
                this.$nextTick(() => {
                  this.initSdk()
                  this.service.regHandler(ChatConfig.BEGIN_LIVE, this.handleActivityStart)
                })
              })
            })
          } else {
            this.vhallParams = this.chatParams
            this.$nextTick(() => {
              this.initSdk()
              this.service.regHandler(ChatConfig.BEGIN_LIVE, this.handleActivityStart)
            })
          }
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
@import '~assets/css/mixin.scss';
.v-success {
  .v-img {
    display: block;
    width: 224px;
    margin: 0 auto;
  }
  p {
    text-align: center;
    margin-top: 22px;
    font-size: 28px;
    color: #222;
    &.v-success-title,
    &.v-start-title {
      font-size: 40px;
    }
    .v-red {
      color: #fc5659;
    }
  }
  .primary-button {
    width: 490px;
    height: 90px;
    border-radius: 50px;
    display: block;
    margin: 25px auto 5px;
  }
}
</style>
