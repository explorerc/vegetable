<template>
  <div class="v-guid">
    <p class="v-title">
      {{activity.title}}
    </p>
    <div class="v-summary"
         v-if="!activity.isCountdown || (activity.viewCondition === 'NONE' && activity.countDown < 1800) || viewLimit.canAppoint !== 'Y'">
      <div v-html="activity.description"></div>
    </div>
    <div class="v-operation"
         v-if="activity.countDown >= 1800">
      <!-- 距离活动开始大于30min -->
      <template v-if="activity.viewCondition === 'APPOINT'">
        <!-- 报名活动 -->
        <template v-if="viewLimit.canAppoint === 'Y'">
          <!-- 报名未截止 -->
          <template v-if="activity.status === 'LIVING'">
            <p class="v-living"
               v-if="activity.isCountdown">
              直播正在进行中
            </p>
          </template>
          <template v-else-if="activity.status === 'PLAYBACK'">
            <p class="v-living"
               v-if="activity.isCountdown">
              直播已生成回放，请报名后观看
            </p>
          </template>
          <template v-else-if="activity.status === 'FINISH'">
            <p class="v-living"
               v-if="activity.isCountdown">
              直播已结束
            </p>
          </template>
          <template v-else>
            <com-countdown :time="activity.countDown"
                           v-if="activity.isCountdown"></com-countdown>
          </template>
          <template v-if="user.isApplay">
            <!-- 已报名 -->
            <button class="primary-button v-disabled">已报名</button>
          </template>
          <template v-else>
            <!-- 未报名 -->
            <button class="primary-button"
                    @click="jumpPage( MOBILE_HOST + 'SignUp/')">立即报名</button>
            <a href="javascript:;"
               class="v-registered"
               @click="jumpPage( MOBILE_HOST + 'CheckState/')"
               v-if="!this.user.phone">已报名</a>
          </template>
        </template>
        <template v-else>
          <!-- 报名已截止 -->
          <template v-if="activity.status === 'LIVING'">
            <p class="v-living"
               v-if="activity.isCountdown">
              直播正在进行中
            </p>
          </template>
          <template v-else-if="activity.status === 'PLAYBACK'">
            <p class="v-living"
               v-if="activity.isCountdown">
              直播已生成回放，请报名后观看
            </p>
          </template>
          <template v-else-if="activity.status === 'FINISH'">
            <p class="v-living"
               v-if="activity.isCountdown">
              直播已结束
            </p>
          </template>
          <template v-else>
            <com-countdown :time="activity.countDown"
                           v-if="activity.isCountdown"></com-countdown>
          </template>
          <template v-if="user.isApplay">
            <!-- 已报名 -->
            <button class="primary-button v-disabled">已报名</button>
          </template>
          <template v-else>
            <button class="primary-button"
                    @click="jumpPage( MOBILE_HOST + 'CheckState/')"
                    v-if="!this.user.phone">报名验证</button>
            <button class="primary-button v-disabled"
                    v-else>报名已截止</button>
          </template>
        </template>
      </template>
      <template v-else>
        <!-- 无限制活动 -->
        <template v-if="activity.status === 'LIVING'">
          <p class="v-living"
             v-if="activity.isCountdown">
            直播正在进行中
          </p>
        <button class="primary-button"
                @click="joinWebinar()">进入直播</button>
        </template>
        <template v-else-if="activity.status === 'PLAYBACK'">
          <p class="v-living"
             v-if="activity.isCountdown">
            直播已生成回放，请点击观看
          </p>
          <button class="primary-button"
              @click="joinWebinar()">进入直播</button>
        </template>
        <template v-else-if="activity.status === 'FINISH'">
          <p class="v-living"
             v-if="activity.isCountdown">
            直播已结束
          </p>
          <button class="primary-button"
              @click="joinWebinar()">进入直播</button>
        </template>
        <template v-else>
          <com-countdown :time="activity.countDown"
                         v-if="activity.isCountdown"></com-countdown>
        <button class="primary-button"
                v-if="user.isOrder">已预约</button>
        <template v-else>
          <button class="primary-button"
                  @click="jumpPage( MOBILE_HOST + 'SignUp/')">预约</button>
          <a href="javascript:;"
             class="v-registered"
             @click="jumpPage( MOBILE_HOST + 'CheckState/')"
             v-if="!this.user.phone">已预约</a>
        </template>
        </template>
      </template>
    </div>
    <div class="v-operation"
         v-else>
      <!-- 距离活动开始小于30min -->
      <template v-if="activity.viewCondition === 'APPOINT'">
        <!-- 报名活动 -->
        <template v-if="viewLimit.canAppoint === 'Y'">
          <template v-if="activity.status === 'LIVING'">
            <p class="v-living"
               v-if="activity.isCountdown">
              直播正在进行中
            </p>
          </template>
          <template v-else-if="activity.status === 'PLAYBACK'">
            <p class="v-living"
               v-if="activity.isCountdown">
               <template v-if="user.isApplay">
              直播已生成回放，请点击观看
               </template>
               <template v-else>
              直播已生成回放，请报名后观看
               </template>
            </p>
          </template>
          <template v-else-if="activity.status === 'FINISH'">
            <p class="v-living"
               v-if="activity.isCountdown">
              直播已结束
            </p>
          </template>
          <template v-else>
            <p class="v-living"
               v-if="activity.isCountdown">
              直播即将开始
            </p>
          </template>
          <template v-if="user.isApplay">
            <!-- 已报名 -->
            <button class="primary-button"
                @click="joinWebinar()">进入直播</button>
            <!-- ！！！跳转观看页面 -->
          </template>
          <template v-else>
            <!-- 未报名 -->
            <button class="primary-button"
                    @click="jumpPage( MOBILE_HOST + 'SignUp/')">立即报名</button>
            <a href="javascript:;"
               class="v-registered"
               @click="jumpPage( MOBILE_HOST + 'CheckState/')"
               v-if="!this.user.phone">已报名</a>
          </template>
        </template>
        <template v-else>
          <!-- 报名已截止 -->
          <template v-if="activity.status === 'LIVING'">
            <p class="v-living"
               v-if="activity.isCountdown">
              直播正在进行中
            </p>
          </template>
          <template v-else-if="activity.status === 'PLAYBACK'">
            <p class="v-living"
               v-if="activity.isCountdown">
               <template v-if="user.isApplay">
              直播已生成回放，请点击观看
               </template>
               <template v-else>
              直播已生成回放
               </template>
            </p>
          </template>
          <template v-else-if="activity.status === 'FINISH'">
            <p class="v-living"
               v-if="activity.isCountdown">
              直播已结束
            </p>
          </template>
          <template v-else>
            <p class="v-living"
               v-if="activity.isCountdown">
              直播即将开始
            </p>
          </template>
          <template v-if="user.isApplay">
            <!-- 已报名 -->
            <button class="primary-button"
                @click="joinWebinar()">进入直播</button>
            <!-- <a href="javascript:;" class="v-submit">已报名</a> -->
          </template>
          <template v-else>
            <button class="primary-button"
                    @click="jumpPage( MOBILE_HOST + 'CheckState/')"
                    v-if="!this.user.phone">报名验证</button>
            <button class="primary-button v-disabled"
                    v-else>报名已截止</button>
          </template>
        </template>
      </template>
      <!-- 无限制活动 -->
      <template v-else>
        <template v-if="activity.status === 'LIVING'">
          <p class="v-living"
             v-if="activity.isCountdown">
            直播正在进行中
          </p>
        </template>
        <template v-else-if="activity.status === 'PLAYBACK'">
          <p class="v-living"
             v-if="activity.isCountdown">
            直播已生成回放，请点击观看
          </p>
        </template>
        <template v-else-if="activity.status === 'FINISH'">
          <p class="v-living"
             v-if="activity.isCountdown">
            直播已结束
          </p>
        </template>
        <template v-else>
          <p class="v-living"
             v-if="activity.isCountdown">
            直播即将开始
          </p>
        </template>
        <button class="primary-button"
                @click="joinWebinar()">进入直播</button>
      </template>
      <!-- ！！！跳转观看页面 -->
    </div>
  </div>
</template>
<script>
import comCountdown from 'components/common/countdown/countdown'
import loginMixin from 'components/login-mixin'
import ChatService from 'src/components/chat/ChatService.js'
import { mapMutations, mapState } from 'vuex'
import * as types from 'src/store/mutation-types'
import ChatConfig from 'src/api/chat-config'
import activityService from 'src/api/activity-service'
import userService from 'src/api/user-service'
export default {
  mixins: [loginMixin],
  data () {
    return {
      refer: undefined,
      MOBILE_HOST: process.env.MOBILE_HOST,
      goUrl: '',
      goRegisteredUrl: '', // 已报名检验页面
      activity: {
        viewCondition: '', // APPOINT是报名活动 ''是无限制活动
        title: '', // 活动标题
        description: '', // 活动简介
        isCountdown: false, // 是否显示倒计时
        countDown: '', // 距离活动开始时间（秒）
        status: '', // 当前活动状态
        extChannel: '' // sdk消息频道
      },
      user: {
        phone: '', // 无条件观看用户手机
        isApplay: false, // 是否已经报名
        isOrder: false // 是否已经预约
      },
      viewLimit: {
        finishTime: '', // 报名截止时间
        canAppoint: '' // 是否可报名
      },
      vhallParams: {
        token: '',
        appId: '',
        channelId: '',
        accountId: ''
      },
      visitorObj: {} // 游客信息
    }
  },
  mounted () {
    this.getInfo()
  },
  components: {
    'com-countdown': comCountdown
  },
  created () {
  },
  computed: mapState('tokenMager', {
    chatParams: state => state.chatParams
  }),
  watch: {
    countDown: function () {
      console.log(this.activity.countDown)
    }
  },
  methods: {
    ...mapMutations('tokenMager', {
      setChatParams: types.CHAT_PARAMS
    }),
    jumpPage (url) {
      let jumpUrl = url + this.$route.params.id
      this.doAuth(jumpUrl)
    },
    initSdk () {
      this.initMsgServe()
    },
    async initMsgServe () {
      await this.$config({ handlers: true }).$post(userService.GET_VISITOR_INFO, {
        wechatAuth: sessionStorage.getItem('wechatAuth')
      }).then((res) => {
        let login = this.getLoginInfo()
        _log.set('business_uid', this.activity.userId)
        if (login) {
          _log.set('consumer_uid', login.consumerUserId)
        }
        _log.set('activity_id', this.$route.params.id)
        _log.set('visitor_id', res.data.visitorId)
        if (this.refer !== undefined) {
          localStorage.setItem(`refer_${this.activityId}`, this.refer)
          _log.track(Vhall_User_Actions.ENTER, {
            event: parseInt(this.refer)
          })
        } else {
          _log.track(Vhall_User_Actions.ENTER)
        }
        this.visitorObj.visitorId = res.data.visitorId
      })
      if (!this.extChannel) return false
      let userInfo = JSON.parse(sessionStorage.getItem('login'))
      const roomInfo = await this.$config({ handlers: true }).$post(activityService.GET_REG_SDK_INFO, {
        thirdUserId: this.userInfo ? userInfo.consumerUserId : `visitor_${this.sdkVisitorId}`,
        channel: this.extChannel
      }).then((res) => {
        return res.data
      })
      ChatService.OBJ.init({
        accountId: roomInfo.accountId,
        token: roomInfo.token,
        appId: roomInfo.appId,
        channelId: roomInfo.channelRoom
      })
      /* 监听微信测试发送成功消息 */
      ChatService.OBJ.regHandler(ChatConfig.beginLive, (msg) => {
        console.log(msg)
        this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
      })
    },
    handleActivityStart (msg) {
      this.activity.countDown = 1799
    },
    async getInfo () {
      let userInfo = JSON.parse(sessionStorage.getItem('login'))
      if (userInfo) {
        this.user.phone = userInfo.mobile
      }
      await this.$config({ handlers: true }).$get(activityService.GET_LIVEINFO, {
        activityId: this.$route.params.id
      }).then((res) => {
        this.activity.viewCondition = res.data.activity.viewCondition
        this.activity.userId = res.data.activity.userId
        this.activity.status = res.data.activity.status
        this.activity.title = res.data.guide ? res.data.guide.title : ''
        this.activity.description = res.data.guide ? res.data.guide.description : ''
        this.activity.countDown = res.data.activity.countDown
        this.activity.isCountdown = res.data.guide ? res.data.guide.showType === 'COUNTDOWN' : false
        this.user.isApplay = res.data.joinInfo.isApplay
        this.user.isOrder = res.data.joinInfo.isOrder
        this.viewLimit.canAppoint = res.data.viewLimit.canAppoint
        this.viewLimit.finishTime = res.data.viewLimit.finishTime
        this.extChannel = res.data.activity.extChannelRoom
        this.refer = this.$route.query.refer
        let user = window.localStorage.getItem(this.visitorObj.visitorId + '_' + this.$route.params.id)
        if (this.activity.status === 'LIVING' || this.activity.status === 'PLAYBACK') {
          if (this.activity.viewCondition === 'APPOINT') {
            if (this.user.isApplay) {
              this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
            }
          } else if (this.activity.viewCondition === 'NONE' && user) {
            this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
          }
        } else if (this.activity.countDown < 1800) {
          if (this.activity.viewCondition === 'APPOINT') {
            if (this.user.isApplay) {
              this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
            }
          } else if (this.activity.viewCondition === 'NONE' && user) {
            this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
          }
        } else {
          let time = this.activity.countDown
          let interval = setInterval(i => {
            time--
            if (time < 30 * 60) {
              this.activity.countDown = 1799
              clearInterval(interval)
            }
          }, 1000)
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
              })
            })
          })
        } else {
          this.vhallParams = this.chatParams
          this.$nextTick(() => {
            this.initSdk()
          })
        }
      }
    },
    joinWebinar () {
      window.localStorage.setItem(this.visitorObj.visitorId + '_' + this.$route.params.id, true)
      this.jumpPage(this.MOBILE_HOST + 'watch/')
    }
  }
}
</script>
<style lang="scss" scoped>
.v-guid {
  width: 100%;
  .v-title {
    font-size: 40px;
    text-align: center;
    color: #222;
    padding-bottom: 20px;
    word-break: break-all;
  }
  .v-summary {
    text-align: left;
    font-size: 28px;
    line-height: 40px;
    color: #555;
    word-break: break-all;
  }
  .v-operation {
    text-align: center;
  }
  .v-living {
    font-size: 40px;
    color: #fc5659;
  }
  img {
    display: block;
    width: 100%;
    height: 320px;
  }
}
</style>
