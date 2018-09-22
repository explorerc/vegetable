<template>
  <div class="v-watch">
    <div v-if="domShow" class="v-hearder clearfix" @orientationchange="orientationchange($event)">
      <span class="v-status">
        <i v-if="activityInfo.statusName === '直播中'"></i>{{activityInfo.statusName}}
      </span>
      <span class="v-onlineNum"  v-if="activityInfo.statusName === '直播中'">{{activityInfo.onlineNum}}人在线</span>
      <a href="javascript:;" class="fr v-my"><i class="v-showpsd iconfont icon-wode_icon"></i>我的</a>
      <a href="javascript:;" class="fr" @click="subscribe()"><i class="v-showpsd iconfont icon-dingyue_icon"></i>订阅</a>
    </div>
    <component :is="currentView" :paasParams="vhallParams" ></component>
    <div v-if="domShow" class="v-function-box">
      <div class="v-nav">
        <com-tabs :value.sync="tabValue" >
          <com-tab label="活动简介" :index="1">
            <div class="v-introduction" v-html="activityInfo.description"></div>
          </com-tab>
          <com-tab label="互动聊天" :index="2">
            <div class="v-chat-box">
              666
            </div>
            <div class="v-chat-control" @click="chatClick()">
              <i class="v-showpsd iconfont icon-biaoqing"></i>
              <span class="v-chat-clickbox">
                输入文字聊天
              </span>
            </div>
          </com-tab>
        </com-tabs>
        <a class="v-subscribe" href="javascript:;"><i class="iconfont icon-dingyue"></i> 关注</a>
      </div>
    </div>
    <message-box v-show="subscribeShow" @handleClick="subscribeClick">
      <div slot="header"></div>
      <img src="../../assets/image/qq.png" alt="" class="v-logo">
      <p class="v-title">
        北京微吼时代科技有限公司
      </p>
      <div class="v-from">
        <p class="v-explain">
          请留下您的邮箱，我们会将更多的活动推送给您
        </p>
        <com-input :value.sync="email" placeholder="请输入邮箱" :max-length="11" :errorTips="errorTips" @focus="emailFocus()"></com-input>
      </div>
    </message-box>
    <message-box v-show="successShow" @handleClick="successClick" :autoClose="autoClose">
      <div slot="header"></div>
      <img src="../../assets/image/success@2x.png" alt="" class="v-success">
      <p class="v-title v-success-title">
        恭喜您，订阅成功！
      </p>
    </message-box>
  </div>
</template>
<script>
import Playback from './playback' // 直播推流回放组件
import Live from './live' // 直播推流回放组件
import Empty from './empty'
import activityManage from 'api/activity-manage.js'
import sdkManage from 'api/sdk-manage.js'
import { mapMutations, mapState } from 'vuex'
import * as types from '../../store/mutation-types'
import ChatConfig from 'src/api/chat-config'
import ChatService from '../../components/common/chat/ChatService.js'
const playTypes = {
  'PREPARE': 'pre',
  'LIVING': 'live',
  'FINISH': 'end',
  'PLAYBACK': 'vod'
}
const playStatuTypes = {
  'PREPARE': '预告',
  'LIVING': '直播中',
  'FINISH': '结束',
  'PLAYBACK': '回放'
}
export default {
  components: {Playback},
  data () {
    return {
      activityData: {
      },
      playType: '',
      playStatus: '',
      currentView: Empty,
      vhallParams: {
        token: '',
        appId: '',
        channelId: '',
        accountId: ''
      },
      businessUserId: '', // 企业账户id
      domShow: true, // 控制横竖屏元素是否显示
      tabValue: 1,
      subscribeShow: false, // 订阅弹框是否显示
      email: '', // 订阅邮箱
      errorTips: '', // 邮箱验证错误提示
      successShow: false, // 订阅成功显示框
      autoClose: 0
    }
  },
  mounted () {
  },
  computed: {
    ...mapState('liveMager', {
      activityInfo: state => state.activityInfo,
      roomPaas: state => state.roomPaas
    }),
    ...mapState('tokenMager', {
      chatParams: state => state.chatParams
    })
  },
  created () {
    const queryId = this.$route.params.id
    if (!queryId) {
      this.$router.go(-1)
    }
    this.activityId = queryId
    this.initPage()

    let that = this
    window.addEventListener(
      'onorientationchange' in window ? 'orientationchange' : 'resize',
      function () {
        if (window.orientation === 90 || window.orientation === -90) {
          // 想把下面的alert换成能够控制v-show的代码
          that.domShow = false

          // alert("123");仅alert纯文本可以正常运行
        } else {
          that.domShow = true
        }
        // window.location.reload();
      },
      false
    )
  },
  methods: {
    ...mapMutations('tokenMager', {
      setChatParams: types.CHAT_PARAMS
    }),
    ...mapMutations('liveMager', {
      storeActivityInfo: types.ACTIVITY_INFO,
      storeRoomPaas: types.ROOM_PAAS
    }),
    async initPage () {
      await this.initRoomPaas()
      /* 查询详情 */
      let data = {
        activityId: this.$route.params.id,
        __errHandler: true
      }
      let activityInfo = null
      await activityManage.getLiveInfo(data).then((res) => {
        if (res.code === 200) {
          activityInfo = res.data.activity
          activityInfo.setting = res.data.setting
          activityInfo.statusName = playStatuTypes[activityInfo.status]
          activityInfo.description = res.data.activity.description
          // this.storeActivityInfo(activityInfo)
          this.playType = playTypes[activityInfo.status]
          this.playStatus = playStatuTypes[activityInfo.status]
          this.businessUserId = res.data.activity.userId
          this.currentView = Playback
          if (this.playType === 'vod') {
            this.currentView = Playback
          } else {
            this.currentView = Live
          }
        }
      })

      /* 查询真实在线人数 */
      activityManage.queryOnlineNum({
        activityId: this.$route.params.id
      }).then((res) => {
        if (res.code === 200) {
          activityInfo.onlineNum = res.data.onlineNum
          this.storeActivityInfo(activityInfo)
        }
      })
    },
    handleUpdateOnlineNum (msg) {
      this.activityInfo.onlineNum = msg
      this.storeActivityInfo(this.activityInfo)
    },
    initSdk () {
      this.service = new ChatService()
      this.service.init(this.vhallParams)
      // window.Vhall.ready(() => {
      // })
    },
    initRoomPaas () {
      return new Promise((resolve, reject) => {
        if (this.roomPaas.token) {
          resolve(this.roomPaas)
        }
        // debugger
        // activityManage.getRegactivity({
        //   activityId: this.$route.params.id,
        //   __errHandler: true
        // }).then((res) => {
        //   debugger
        //   if (res.code === 200) {
        //     sdkManage.getSdkparams({
        //       activityId: this.$route.params.id,
        //       activityUserId: res.data.activityUserId,
        //       __errHandler: true
        //     }).then((res) => {
        //       debugger
        //       if (res.code === 200) {
        //         resolve(res.data)
        //         this.storeRoomPaas(res.data)
        //       }
        //     })
        //   }
        // })

        if (!this.chatParams.token) {
        // 当前vuex中没有聊天token 需要获取
          activityManage.getRegactivity({
            activityId: this.$route.params.id,
            __errHandler: true
          }).then((res) => {
            if (res.code === 200) {
              sdkManage.getSdkparams({
                activityId: this.$route.params.id,
                activityUserId: res.data.activityUserId,
                __errHandler: true
              }).then((res) => {
                if (res.code === 200) {
                  this.vhallParams.token = res.data.token
                  this.vhallParams.appId = res.data.appId
                  this.vhallParams.channelId = res.data.channelRoom
                  this.vhallParams.accountId = res.data.accountId // 从参会接口取activiUserID
                  this.setChatParams(this.vhallParams)
                  this.$nextTick(() => {
                    this.initSdk()
                    this.service.regHandler(ChatConfig.BEGIN_LIVE, this.handleUpdateOnlineNum)
                  })

                  resolve(res.data)
                  this.storeRoomPaas(res.data)
                }
              })
            }
          })
        } else {
          this.vhallParams = this.chatParams
          this.$nextTick(() => {
            this.initSdk()
            this.service.regHandler(ChatConfig.INCREMENT_ONLINE, this.handleUpdateOnlineNum)
          })
        }
      })
    },
    subscribe () {
      this.subscribeShow = true
    },
    emailFocus () {
      this.errorTips = ''
    },
    subscribeClick (e) {
      // 发送订阅=
      if (e.action === 'cancel') {
        this.subscribeShow = false
      } else if (e.action === 'confirm') {
        let reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
        if (!reg.test(this.email)) {
          this.errorTips = '邮箱格式不正确'
          return false
        } else {
          this.errorTips = ''
        }
        activityManage.emailSubscribe({
          businessUserId: this.businessUserId,
          email: this.email,
          __errHandler: true
        }).then((res) => {
          if (res.code === 200) {
            this.autoClose = 3
            this.subscribeShow = false
            this.successShow = true
          } else {
            this.errorTips = res.msg
          }
        })
      }
    },
    successClick (e) {
      // 订阅发送成功
      if (e.action === 'cancel') {
        this.successShow = false
      } else if (e.action === 'confirm') {
        this.successShow = false
      }
    },
    chatClick () {
      // 点击弹出聊天窗口
      alert(1)
    }
  }
}
</script>
<style lang="scss" scoped>
.v-watch /deep/ {
  .v-hearder {
    width: 100%;
    height: 80px;
    background-color: #fff;
    padding: 20px 30px;
    font-size: 24px;
    .v-status {
      color: #fff;
      text-align: center;
      background-color: #000000;
      border-radius: 50px;
      padding: 8px 13px;
      margin-right: 20px;
      i {
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: #fc5659;
        border-radius: 50%;
        margin-right: 10px;
        vertical-align: middle;
      }
    }
    .v-onlineNum {
      padding: 8px 0;
    }
    .v-my {
      margin-left: 36px;
    }
    i {
      vertical-align: middle;
    }
  }
  .v-function-box {
    width: 100%;
    position: absolute;
    top: 502px;
    bottom: 0;
    .v-nav {
      width: 100%;
      height: 100%;
      position: relative;
    }
    .com-tabs {
      height: 100%;
      .tab-header {
        padding-right: 160px;
        border-bottom: 1px solid #f5f5f5;
        margin: 0;
        .tab-item {
          width: 50%;
          height: 80px;
          line-height: 80px;
          text-align: center;
          font-size: 30px;
          position: relative;
          &.active {
            color: #4b5afe;
            &::after {
              content: '';
              display: block;
              width: 70px;
              height: 3px;
              background-color: #4b5afe;
              border-radius: 3px;
              position: absolute;
              bottom: 0;
              left: 50%;
              margin-left: -35px;
            }
          }
        }
      }
      .tab-container {
        position: absolute;
        top: 82px;
        bottom: 0;
        right: 0;
        left: 0;
        overflow-x: hidden;
        overflow-y: auto;
        background-color: #f5f5f5;
        word-break: break-all;
      }
      .tab-content {
        height: 100%;
        &:last-child {
          background-color: #fff;
        }
        .v-chat-control {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 90px;
          line-height: 89px;
          padding: 0 40px;
          border-top: 1px solid #e2e2e2;
          .v-chat-clickbox {
            display: inline-block;
            width: 610px;
            height: 58px;
            line-height: 58px;
            padding: 0 20px;
            border-radius: 8px;
            background-color: #f5f5f5;
            color: #888888;
            margin-left: 20px;
          }
        }
      }
      .v-introduction {
        width: 100%;
        padding: 40px;
      }
      .v-chat-box {
        width: 100%;
        padding: 40px;
        position: absolute;
        top: 0;
        bottom: 91px;
        word-break: break-all;
        overflow-x: hidden;
        overflow-y: auto;
      }
    }
    .v-subscribe {
      display: inline-block;
      width: 160px;
      height: 80px;
      background-color: #ffd021;
      color: #222222;
      text-align: center;
      line-height: 80px;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .ve-message-box {
    &::before {
      height: 0;
    }
    .v-logo {
      display: block;
      width: 130px;
      height: 130px;
      margin: 40px auto 0;
    }
    .v-success {
      display: block;
      width: 288px;
      margin: 80px auto 0;
    }
    .v-title {
      text-align: center;
      word-break: break-all;
      font-size: 32px;
      color: #222;
      margin-top: 8px;
      &.v-success-title {
        margin-bottom: 140px;
      }
    }
    .v-from {
      width: 528px;
      margin: 60px auto 70px;
      .v-explain {
        text-align: left;
        word-break: break-all;
        font-size: 24px;
        color: #555;
        margin-bottom: 20px;
      }
      .com-input {
        input {
          height: 70px;
          line-height: 70px;
        }
        .limit {
          display: none;
        }
      }
    }
    .ve-message-box__btns {
      margin: 0 auto;
      text-align: center;
      width: 528px;
      .button--primary {
        margin: 0 auto;
        display: block;
        width: 528px;
        height: 94px;
        line-height: 94px;
        border-radius: 8px;
      }
    }
  }
}
</style>

