<template>
  <div class="v-watch">
    <div v-if="domShow"
         class="v-hearder clearfix"
         @orientationchange="orientationchange($event)">
      <span class="v-status">
        <i v-if="activityStatus === '直播中'"></i>{{activityStatus}}
      </span>
      <span class="v-onlineNum"
            v-if="activityStatus === '直播中'">{{showPersonCount}}人在线</span>
      <a v-if="loginInfo"
         :href="`/m/site/${activityId}`"
         class="fr v-my">
        <i class="v-showpsd iconfont icon-guanwang"></i>官网</a>
      <a v-else
         href="javascript:;"
         @click="doLogin()"
         class="fr v-my">
        <i class="v-showpsd iconfont icon-wode_icon"></i>登录</a>

      <a href="javascript:;"
         class="fr"
         @click="subscribe">
        <i class="v-showpsd iconfont icon-dingyue_icon"></i>订阅</a>
    </div>
    <component :is="currentView"
               :paasParams="vhallParams"
               :domShow="domShow"></component>
    <message-box v-show="subscribeShow"
                 @handleClick="subscribeClick($event)">
      <div slot="header"></div>
      <img src="../../assets/image/qq.png"
           alt=""
           class="v-logo">
      <p class="v-title">
        北京微吼时代科技有限公司
      </p>
      <div class="v-from">
        <p class="v-explain">
          请留下您的邮箱，我们会将更多的活动推送给您
        </p>
        <com-input :value.sync="email"
                   placeholder="请输入邮箱"
                   :max-length="11"
                   :errorTips="errorTips"
                   @focus="emailFocus()"></com-input>
      </div>
    </message-box>
    <message-box v-show="successShow"
                 @handleClick="successClick"
                 :autoClose="autoClose">
      <div slot="header"></div>
      <img src="../../assets/image/success@2x.png"
           alt=""
           class="v-success">
      <p class="v-title v-success-title">
        恭喜您，订阅成功！
      </p>
    </message-box>
    <com-login @login="loginSuccess"></com-login>
  </div>
</template>
<script>
import VConsole from 'vconsole/dist/vconsole.min.js' // 初始化
import { mapMutations, mapState } from 'vuex'
import Playback from './playback' // 直播推流回放组件
import Live from './live' // 直播推流回放组件
import Empty from './empty'
import * as types from '../../store/mutation-types'
import loginMixin from 'components/login-mixin'
import wxShareFunction from '../../assets/js/wx-share.js'
import activityService from 'src/api/activity-service'
import userService from 'src/api/user-service' // import vconsole
let vConsole = new VConsole()
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
  mixins: [loginMixin],
  data () {
    return {
      activityId: '',
      playType: '', // 直播(live), 回放(vod), 暖场(warm), 结束(end)，预告(pre)
      playStatus: '',
      currentView: Empty,
      vhallParams: {
        token: '',
        appId: '',
        channelId: '',
        accountId: ''
      },
      subscribeShow: false, // 订阅弹框是否显示
      businessUserId: '', // 企业账户id
      domShow: true, // 控制横竖屏元素是否显示
      autoClose: 0,
      email: '', // 订阅邮箱
      errorTips: '', // 邮箱验证错误提示
      successShow: false, // 订阅成功显示框
      wxShare: { // 微信分享数据
        wxShareData: {
          appId: '',
          timestamp: '',
          nonceStr: '',
          signature: ''
        },
        shareData: {
          title: '', // 分享标题
          desc: '', // 分享简介
          link: '', // 分享链接
          imgUrl: '' // 分享图片
        },
        shareUser: {
          shareId: '' // 分享者id
        }
      }
    }
  },
  mounted () {
    console.log(vConsole)
    this.storeLoginInfo(this.getLoginInfo())
  },
  computed: {
    ...mapState('liveMager', {
      activityInfo: state => state.activityInfo,
      joinInfo: state => state.joinInfo,
      roomPaas: state => state.roomPaas
    }),
    ...mapState('tokenMager', {
      chatParams: state => state.chatParams
    }),
    ...mapState('login', {
      loginInfo: state => state.loginInfo
    }),
    showPersonCount: function () {
      return parseInt(this.activityInfo.setting.initOnlineNum ? this.activityInfo.setting.initOnlineNum : 0) + parseInt(this.activityInfo.onlineNum ? this.activityInfo.onlineNum : 0)
    },
    activityStatus: function () {
      return this.activityInfo.statusName
    }
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
      storeRoomPaas: types.ROOM_PAAS,
      storeJoinInfo: types.JOIN_INFO
    }),
    ...mapMutations('login', {
      storeLoginInfo: types.LOGIN_INFO
    }),
    subscribe () {
      if (this.loginInfo) {
        if (this.loginInfo.email) {
          this.sendSubScribe()
        } else {
          this.subscribeShow = true
        }
      } else {
        this.doLogin()
      }
    },
    emailFocus () {
      this.errorTips = ''
    },
    /* 进行订阅 */
    sendSubScribe () {
      this.$config({ handlers: true }).$post(activityService.POST_EMAILSUBSCRIBE, {
        businessUserId: this.activityInfo.userId,
        email: this.loginInfo.email ? this.loginInfo.email : this.email
      }).then((res) => {
        this.autoClose = 3
        this.subscribeShow = false
        this.successShow = true
        let tempLoginInfo = JSON.parse(JSON.stringify(this.loginInfo))
        tempLoginInfo.email = this.emailInput
        this.updateLoginInfo(tempLoginInfo)
        this.storeLoginInfo(tempLoginInfo)
      }).catch((err) => {
        this.subscribeShow = false
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
    subscribeClick (e) {
      // 发送订阅=
      if (e.action === 'cancel') {
        this.subscribeShow = false
      } else if (e.action === 'confirm') {
        let reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
        if (this.email && !reg.test(this.email)) {
          this.errorTips = '邮箱格式不正确'
          return false
        } else {
          this.errorTips = ''
        }
        this.sendSubScribe()
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
    async initPage () {
      await this.initRoomPaas()
      this.share()
      /* 查询详情 */
      let activityInfo = null
      await this.$config({ handlers: true }).$get(activityService.GET_LIVEINFO, {
        activityId: this.$route.params.id
      }).then((res) => {
        document.title = res.data.activity.title
        activityInfo = { ...activityInfo, ...res.data.activity }
        activityInfo.setting = res.data.setting
        activityInfo.statusName = playStatuTypes[activityInfo.status]
        this.playType = playTypes[activityInfo.status]
        this.playStatus = playStatuTypes[activityInfo.status]
        this.businessUserId = res.data.activity.userId
      })
      /* 查询真实在线人数 */
      await this.$config({ handlers: true }).$get(activityService.GET_ONLINENUM, {
        activityId: this.$route.params.id
      }).then((res) => {
        activityInfo.onlineNum = res.data.onlineNum
      })
      this.storeActivityInfo(activityInfo)
      if (this.playType === 'vod') {
        this.currentView = Playback
      } else {
        this.currentView = Live
      }
    },
    initSdk () {
      // this.service = new ChatService()
      // this.service.init(this.vhallParams)
      // window.Vhall.ready(() => {
      // })
    },
    initRoomPaas () {
      const shareId = this.$route.query.shareid
      let data = {
        activityId: this.activityId,
        __errHandler: true
      }
      if (shareId) {
        data.shareId = shareId
      }
      return new Promise((resolve, reject) => {
        if (this.roomPaas.token) {
          resolve(this.roomPaas)
        }
        this.$config({ handlers: true }).$get(userService.GET_USERREGACTIVITY, data).then((res) => { // 获取参会信息
          this.storeJoinInfo(res.data)
          this.$config({ handlers: true }).$get(activityService.GET_SDKTOKEN, { // 获取观看端token
            activityId: this.activityId,
            activityUserId: res.data.activityUserId
          }).then((res) => {
            if (res.data) {
              resolve(res.data)
              this.storeRoomPaas(res.data)
            }
          }).catch(() => {
            // this.$router.replace('/kicked')
          })
        })
      })
    },
    async share () { // 微信分享
      let _url = window.location.href
      if (this.joinInfo.activityUserId) {
        _url = this.joinInfo.activityUserId ? `${_url}?shareId=${this.joinInfo.activityUserId}` : _url
      }
      this.wxShare.shareData.link = _url
      await this.$config({ handlers: true }).$get(activityService.GET_SHARESIGN, { // 获取微信分享签名等信息
        url: _url
      }).then((res) => {
        this.wxShare.wxShareData.appId = res.data.appId
        this.wxShare.wxShareData.timestamp = res.data.timestamp
        this.wxShare.wxShareData.nonceStr = res.data.nonceStr
        this.wxShare.wxShareData.signature = res.data.signature
      })
      await this.$config({ handlers: true }).$get(activityService.GET_SHAREINFO, { // 获取分享标题等信息
        route: 'live_route'
      }).then((res) => {
        if (res.data) {
          this.wxShare.shareData.title = res.data.title ? res.data.title : ''
          this.wxShare.shareData.desc = res.data.description ? res.data.description : ''
          this.wxShare.shareData.imgUrl = res.data.imgUrl ? res.data.imgUrl : ''
        }
      })
      wxShareFunction(this.wxShare)
    },
    loginSuccess (res) {
      this.storeLoginInfo(res)
      this.$router.go(0)
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
        // padding-right: 160px; //关注开放时再打开
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
          .icon-biaoqing {
            font-size: 30px;
            display: inline-block;
          }
          &.v-noLogin {
            text-align: center;
            span {
              color: #4b5afe;
            }
          }
        }
      }
      .v-introduction {
        width: 100%;
        padding: 40px;
      }
      .chat-content {
        width: 100%;
        // padding: 0 40px;
        position: absolute;
        top: 0;
        bottom: 100px;
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

