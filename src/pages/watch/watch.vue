<template>
  <div class="v-watch"
       :class="{'v-x5-div': vx5div,'v-close-x5-div': vclosex5div,'v-other-div': votherdiv}">
    <div class="v-x5-title"
         v-show="domShow">
      {{activityInfo.title}}
    </div>
    <div v-show="domShow"
         class="v-hearder clearfix"
         @orientationchange="orientationchange($event)">
      <span class="logo"
            v-if="!logoImg"></span>
      <span class="logo"
            :style="{backgroundImage:`url(${customLogo})`}"></span>
      <span class="ac-title">{{activityInfo.title}}</span>
      <span class="v-status">
        <i v-if="activityStatus === '直播中'"></i>{{activityStatus}}
      </span>
      <span class="v-onlineNum">{{showPersonCount}}人在线</span>
      <template v-if="loginInfo">
        <a href="/m/user"
           class="fr v-my v-right"><i class="v-showpsd iconfont icon-guanwang"></i>我的</a>
        <!-- <a v-if="isShowSite"
           :href="`/m/site/${activityId}`"
           class="fr v-my">
          <i class="v-showpsd iconfont icon-guanwang"></i>官网</a> -->
      </template>
      <a v-else
         href="javascript:;"
         @click="doLogin()"
         class="fr v-my v-right">
        <i class="v-showpsd iconfont icon-wode_icon"></i>登录</a>

      <a href="javascript:;"
         class="fr v-right"
         @click="subscribe">
        <i class="v-showpsd iconfont icon-dingyue_icon"></i>订阅</a>
    </div>
    <component :is="currentView"
               :paasParams="vhallParams"
               :domShow="domShow"></component>
    <message-box v-show="subscribeShow"
                 @handleClick="subscribeClick($event)">
      <div slot="header"></div>
      <img v-if="defaultImg"
           :src="defaultImg"
           alt=""
           class="v-logo">
      <p class="v-title">
        {{companyName}}
      </p>
      <div class="v-from">
        <p class="v-explain">
          请留下您的邮箱，我们会将更多的活动推送给您
        </p>
        <com-input :value.sync="email"
                   placeholder="请输入邮箱"
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
    <!-- 红包雨 -- 降临 -->
    <message-box v-if="redBagTipShow"
                 @handleClick="handleRedBagClick">
      <div slot="msgBox"
           class="red-bag-box">
        <i class="iconfont icon-close"
           @click="handleRedBagClick"></i>
        <div class="red-bag-content">
          <p class="red-bag-title">红包雨还剩{{downTimer|fmtTimer}}到来</p>
          <p class="red-bag-info "
             v-if="redBagInfo.condition==0">手速越快，红可能越大哦~</p>
          <p class="red-bag-info"
             v-else-if="redBagInfo.condition==1">开奖前分享直播间参与红包雨活动</p>
          <p class="red-bag-info tip-info"
             v-else-if="redBagInfo.condition==2">参与条件：开奖前发送口令参与红包雨活动</p>
          <p class="red-bag-info"
             v-else-if="redBagInfo.condition==3">开奖前填写问卷调查参与红包雨活动</p>
          <span class="red-bag-tip"
                v-if="redBagInfo.condition==2">口令：{{redBagInfo.password}}</span>
        </div>
      </div>
    </message-box>
    <!-- 红包雨 -- 倒计时-->
    <message-box v-if="redBagTimeDownShow"
                 @handleClick="handleRedBagClick">
      <div slot="msgBox"
           class="red-bag-box">
        <i class="iconfont icon-close"
           @click="handleRedBagClick"></i>
        <div class="red-bag-content">
          <p class="red-bag-title">红包雨降临倒计时</p>
          <span class="time-down">{{timer}}</span>
          <p class="red-bag-info">点击屏幕上落下的红包，手速越快红包越大！</p>
        </div>
      </div>
    </message-box>
    <!-- 红包雨 -- 抢到红包 -->
    <message-box v-if="redBagShow"
                 @handleClick="handleRedBagClick">
      <div slot="msgBox"
           class="red-bag-box get-red-bag">
        <i class="iconfont icon-close"
           @click="handleRedBagClick"></i>
        <div class="red-bag-content">
          <p class="red-bag-title">恭喜您抢到</p>
          <span class="red-bag-money">￥{{redBagResultInfo.amount}}</span>
          <span class="red-bag-detail detail-top">超过了<span style="color: #fff;">{{redBagResultInfo.percent}}%</span>的小伙伴</span>
          <span class="red-bag-detail detail-bottom">已收入钱包，请到个人中心提现</span>
        </div>
      </div>
    </message-box>
    <!-- 红包雨 -- 未抢到红包 -->
    <message-box v-if="redBagNoneShow"
                 @handleClick="handleRedBagClick">
      <div slot="msgBox"
           class="red-bag-box red-bag-top"
           style="background-color: #fff;">
        <i class="iconfont icon-close"
           @click="handleRedBagClick"></i>
        <p class="red-bag-title">天呐，您与红包擦肩而过～</p>
        <div class="top-content">
          <p class="red-bag-title">（手气榜 TOP5）</p>
          <ul class="red-bag-list">
            <li v-if="redBagrecordList.length<=0">
              <span class="none-data">暂无数据</span>
            </li>
            <li v-else
                v-for="redBagInfo in redBagrecordList">
              <span class="head-icon"
                    v-if="!redBagInfo.avatar"></span>
              <span class="head-icon"
                    v-else
                    :style="{backgroundImage: `url(${$imgHost}/${redBagInfo.avatar})`}"></span>
              <span class="nick-name">{{redBagInfo.nick_name}}</span>
              <span class="red-bag-money fr">￥{{redBagInfo.amount}}</span>
            </li>

          </ul>
        </div>
      </div>
    </message-box>
    <RedBagRain :rainTime="rainTime"
                @endRain="endRainHandler"
                @selectOk="selectRedBag"></RedBagRain>
    <com-login @login="loginSuccess"></com-login>
  </div>
</template>
<script>
// import VConsole from 'vconsole/dist/vconsole.min.js' // 初始化
import { mapMutations, mapState } from 'vuex'
import Playback from './playback' // 直播推流回放组件
import Live from './live' // 直播推流回放组件
import Empty from './empty'
import * as types from '../../store/mutation-types'
import loginMixin from 'components/login-mixin'
import wxShareFunction from '../../assets/js/wx-share.js'
import activityService from 'src/api/activity-service'
import userService from 'src/api/user-service' // import vconsole
import EventBus from 'src/utils/eventBus'
import RedBagRain from './red-bag-rain' // 红包雨
import RedBagConfig from 'src/api/red-bag-config'
import ChatConfig from 'src/api/chat-config'
import ChatService from 'components/chat/ChatService.js'

// let vConsole = new VConsole()
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
  components: { RedBagRain },
  data () {
    return {
      MOBILE_HOST: process.env.MOBILE_HOST,
      activityId: '',
      companyName: '',
      playType: '', // 直播(live), 回放(vod), 暖场(warm), 结束(end)，预告(pre)
      playStatus: '',
      imgUrl: '',
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
      isShowSite: '', // 是否开启官网
      wxShare: { // 微信分享数据
        wxShareData: {
          appId: '',
          timestamp: '',
          nonceStr: '',
          signature: ''
        },
        shareData: {
          title: '', // 分享标题
          shareDatadesc: '', // 分享简介
          shareDatalink: '', // 分享链接
          shareDataimgUrl: '' // 分享图片
        },
        shareUser: {
          shareId: '' // 分享者id
        }
      },
      vx5div: false, // x5中同层开启
      vclosex5div: false, // x5中同层关闭
      votherdiv: false, // 非x5横屏
      showPersonCount: 0,
      sdkVisitorId: '',
      logoImg: '',
      red_packet_id: '',
      redBagTipShow: false,
      redBagNoneShow: false,
      redBagShow: false,
      redBagTimeDownShow: false,
      redBagrecordList: [],
      redBagResultInfo: {
        avatar: '',
        nick_name: '',
        amount: '',
        amount_ranking: '',
        percent: ''
      },
      autoTime: 0,
      rainTime: 0,
      redBagCount: 0,
      timer: 10,
      timerInterval: 0,
      redBagStartTimer: 0,
      redBagStartTimerInterval: 0
    }
  },
  mounted () {
    this.storeLoginInfo(this.getLoginInfo())
    if (!this.loginInfo) {
      this.doLogin()
    }
  },
  computed: {
    ...mapState('liveMager', {
      activityInfo: state => state.activityInfo,
      joinInfo: state => state.joinInfo,
      roomPaas: state => state.roomPaas,
      downTimer: state => state.downTimer
    }),
    ...mapState('tokenMager', {
      chatParams: state => state.chatParams
    }),
    ...mapState('login', {
      loginInfo: state => state.loginInfo
    }),
    activityStatus: function () {
      return this.activityInfo.statusName
    },
    defaultImg () {
      return this.imgUrl ? this.$imgHost + '/' + this.imgUrl : ''
    },
    customLogo () {
      const logo = this.logoImg
      return logo ? `${this.$imgHost}/${logo}` : ''
    }
  },
  beforeDestroy () {
    clearInterval(this.timerInterval)
    clearInterval(this.redBagStartTimerInterval)
  },
  created () {
    this.PlaybackVideo()
    EventBus.$on('enterFullScreen', () => {
      this.vx5div = true
      this.vclosex5div = false
    })
    EventBus.$on('exitFullScreen', () => {
      this.vx5div = false
      this.vclosex5div = true
    })
    const queryId = this.$route.params.id
    if (!queryId) {
      this.$router.go(-1)
    }
    this.activityId = queryId
    this.initPage()
    EventBus.$on('red_packet', (data) => {
      if (this.red_packet_id) {
        let _data = {
          red_packet_id: this.red_packet_id,
          activity_id: this.activityId
        }
        if (data) {
          _data.password = data
        }
        this.$config({ handlers: true }).$post(activityService.UNLOCK_RED_BAG, _data).then((res) => { }).catch((err) => {
          console.log(err)
        })
      }
    })
    let _this = this
    window.addEventListener(
      'onorientationchange' in window ? 'orientationchange' : 'resize',
      function () {
        if (window.orientation === 90 || window.orientation === -90) {
          // 想把下面的alert换成能够控制v-show的代码
          // if (!_this.isX5()) {
          _this.votherdiv = true
          _this.domShow = false
          // }
        } else {
          // if (!_this.isX5()) {
          _this.votherdiv = false
          _this.domShow = true
          // }
        }
      },
      false
    )
  },
  filters: {
    fmtTimer (value) {
      let m = ((value / 60 % 60 >> 0) + '').padStart(2, 0)
      let s = ((value % 60 >> 0) + '').padStart(2, 0)
      return `${m}:${s}`
    }
  },
  watch: {
    activityInfo: {
      handler (newVal) {
        if (newVal && newVal.setting) {
          this.showPersonCount = parseInt(newVal.setting.initOnlineNum ? newVal.setting.initOnlineNum : 0) + parseInt(newVal.onlineNum ? newVal.onlineNum : 0)
        }
      },
      deep: true,
      immediate: true
    },
    redBagTimeDownShow (newVal) {
      if (newVal) {
        this.timer = 10
        this.timerInterval = setInterval(() => {
          if (this.timer === 0) {
            clearInterval(this.timerInterval)
            this.timerInterval = 0
            this.redBagTimeDownShow = false
            this.rainTime = 10
            return
          }
          this.timer--
        }, 1000)
      }
    }
  },
  methods: {
    ...mapMutations('tokenMager', {
      setChatParams: types.CHAT_PARAMS
    }),
    ...mapMutations('liveMager', {
      storeActivityInfo: types.ACTIVITY_INFO,
      storeRoomPaas: types.ROOM_PAAS,
      storeJoinInfo: types.JOIN_INFO,
      storeDownTimer: types.DOWN_TIMER
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
    isX5 () {
      let u = navigator.userAgent
      let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
      if (!isiOS && (u.match(/MicroMessenger/i) || u.match(/QQ/i))) {
        return true
      }
      return false
    },
    /* 进行订阅 */
    sendSubScribe () {
      this.$config({ handlers: true }).$post(activityService.POST_EMAILSUBSCRIBE, {
        activityId: this.$route.params.id,
        email: this.loginInfo.email ? this.loginInfo.email : this.email
      }).then((res) => {
        this.autoClose = 3
        this.subscribeShow = false
        this.successShow = true
        let tempLoginInfo = JSON.parse(JSON.stringify(this.loginInfo))
        tempLoginInfo.email = this.email
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
        if (this.email === '') {
          this.errorTips = '请输入邮箱'
          return false
        } else if (this.email && !reg.test(this.email)) {
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
      await this.$config({ handlers: true }).$post(userService.GET_VISITOR_INFO, {
        wechatAuth: sessionStorage.getItem('wechatAuth')
      }).then((res) => {
        _log.set('visitor_id', res.data.visitorId)
        this.sdkVisitorId = res.data.visitorId
      })
      await this.initRoomPaas()
      this.initMsgServe()
      // /* 获取自定义主题 */
      // this.$config({ handlers: true }).$post(activityService.GET_CUSTOM_LOGO, {
      //   activityId: this.$route.params.id
      // }).then((res) => {
      //   if (res.code === 200) {
      //     this.logoImg = res.data.logoUrl
      //   }
      // })
      if (this.isWx()) {
        setTimeout(() => {
          this.share()
        }, 1000)
      }
      /* 查询详情 */
      let activityInfo = null
      let joinInfo = null
      await this.$config({ handlers: true }).$get(activityService.GET_LIVEINFO, {
        activityId: this.$route.params.id
      }).then((res) => {
        document.title = res.data.activity.title
        var iframe = document.createElement('iframe')
        iframe.style.display = 'none'
        iframe.setAttribute('src', '/')
        var d = function () {
          setTimeout(function () {
            iframe.removeEventListener('load', d)
            document.body.removeChild(iframe)
          }, 0)
        }
        iframe.addEventListener('load', d)
        document.body.appendChild(iframe)
        this.logoImg = res.data.brand ? res.data.brand.wapLogo : '' // 自定义logo
        this.companyName = res.data.businessUserInfo.company
        this.imgUrl = res.data.businessUserInfo.avatar
        this.isShowSite = res.data.template
        activityInfo = { ...activityInfo, ...res.data.activity }
        joinInfo = res.data.joinInfo
        activityInfo.setting = res.data.setting
        activityInfo.warm = res.data.warm
        activityInfo.statusName = playStatuTypes[activityInfo.status]
        this.playType = playTypes[activityInfo.status]
        this.playStatus = playStatuTypes[activityInfo.status]
        this.businessUserId = res.data.activity.userId
        if (activityInfo.status === 'LIVING') {
          if (activityInfo.viewCondition === 'APPOINT' && !joinInfo.isApplay) {
            this.doAuth(this.MOBILE_HOST + 'guide/' + this.$route.params.id)
          }
        } else if (activityInfo.status === 'PLAYBACK') {
          if (activityInfo.viewCondition === 'APPOINT' && !joinInfo.isApplay) {
            this.doAuth(this.MOBILE_HOST + 'guide/' + this.$route.params.id)
          }
        } else if (activityInfo.status === 'FINISH') {
          if (activityInfo.viewCondition === 'APPOINT' && !joinInfo.isApplay) {
            this.doAuth(this.MOBILE_HOST + 'guide/' + this.$route.params.id)
          }
        } else if (activityInfo.countDown < 1800) {
          if (activityInfo.viewCondition === 'APPOINT') {
            if (!joinInfo.isApplay) {
              this.doAuth(this.MOBILE_HOST + 'guide/' + this.$route.params.id)
            }
          }
          // else {
          //   if (!activityData.joinInfo.isOrder) {
          //     this.doAuth(this.MOBILE_HOST + 'guide/' + this.$route.params.id)
          //   }
          // }
        } else {
          this.doAuth(this.MOBILE_HOST + 'guide/' + this.$route.params.id)
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
      /* 查询真实在线人数 */
      await this.$config({ handlers: true }).$get(activityService.GET_ONLINENUM, {
        activityId: this.$route.params.id
      }).then((res) => {
        activityInfo.onlineNum = res.data.onlineNum
      })
      this.storeActivityInfo(activityInfo)
      console.log(activityInfo)
      if (this.playType === 'vod') {
        this.currentView = Playback
      } else {
        this.currentView = Live
      }
      let login = this.getLoginInfo()
      _log.set('business_uid', activityInfo.userId)
      if (login) {
        _log.set('consumer_uid', login.consumerUserId)
      }
      _log.set('activity_id', activityInfo.id)
      // 1 直播
      // 2 点播
      let status = 0
      if (activityInfo.status === 'LIVING') {
        status = 1
      } else if (activityInfo.status === 'PLAYBACK') {
        status = 2
      }
      _log.set('service_names', status)
      if (localStorage.getItem(`refer_${activityInfo.id}`)) {
        _log.track(Vhall_User_Actions.ENTER, {
          event: parseInt(localStorage.getItem(`refer_${activityInfo.id}`))
        })
      } else {
        _log.track(Vhall_User_Actions.ENTER)
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
        }).catch((err) => {
          if (err.code === 12004 || err.code === 11030) {
            this.doAuth(this.MOBILE_HOST + 'guide/' + this.$route.params.id)
          } else if (err.code === 12031) {
            this.$router.replace('/kicked')
          }
        })
        let userInfo = JSON.parse(sessionStorage.getItem('login'))
        this.$config({ handlers: true }).$get(activityService.GET_SDKTOKEN, { // 获取观看端token
          activityId: this.activityId,
          activityUserId: userInfo ? userInfo.consumerUserId : this.sdkVisitorId
        }).then((res) => {
          if (res.data) {
            resolve(res.data)
            this.storeRoomPaas(res.data)
          }
        })
      })
    },
    async share () { // 微信分享
      let _url = window.location.href
      await this.$config({ handlers: true }).$get(activityService.GET_SHARESIGN, { // 获取微信分享签名等信息
        url: encodeURIComponent(_url)
      }).then((res) => {
        this.wxShare.wxShareData.appId = res.data.appId
        this.wxShare.wxShareData.timestamp = res.data.timestamp
        this.wxShare.wxShareData.nonceStr = res.data.nonceStr
        this.wxShare.wxShareData.signature = res.data.signature
      })
      await this.$config({ handlers: true }).$get(activityService.GET_SHAREINFO, { // 获取分享标题等信息
        route: 'live_route',
        param: this.$route.params.id
      }).then((res) => {
        if (res.data) {
          let _shareLink = window.location.href
          this.wxShare.shareData.shareDatalink = _shareLink
          if (this.joinInfo.activityUserId) {
            _shareLink = this.joinInfo.activityUserId ? `${_shareLink}?shareId=${this.joinInfo.activityUserId}` : _shareLink
          }
          this.wxShare.shareData.title = res.data.title ? res.data.title : ''
          this.wxShare.shareData.shareDatadesc = res.data.description ? res.data.description : ''
          this.wxShare.shareData.shareDataimgUrl = res.data.imgUrl ? 'https:' + this.$imgHost + '/' + res.data.imgUrl : ''
        }
      })
      wxShareFunction(this.wxShare)
    },
    loginSuccess (res) {
      this.$config({ handlers: true }).$post(userService.GET_VISITOR_INFO, {
        wechatAuth: sessionStorage.getItem('wechatAuth')
      })
      _log.set('consumer_uid', res.consumerUserId)
      this.storeLoginInfo(res)
      this.$router.go(0)
    },
    isWx () {
      var ua = navigator.userAgent.toLowerCase()
      var isWeixin = ua.indexOf('micromessenger') !== -1
      if (isWeixin) {
        return true
      }
      return false
    },
    initMsgServe () {
      ChatService.OBJ.init({
        accountId: this.roomPaas.accountId,
        token: this.roomPaas.token,
        appId: this.roomPaas.appId,
        channelId: this.roomPaas.channelRoom
      })
      /* 监听创建红包通知消息 */
      ChatService.OBJ.regHandler(RedBagConfig.MARKET_TOOL, (msg) => {
        console.log('-----------收到红包消息------------')
        console.log(msg)
        if (msg.type === RedBagConfig.createRedBag) {
          this.autoTime = msg.time ? parseInt(msg.time) : 0
          this.red_packet_id = msg.red_packet_uuid
          this.redBagCount = 0
          this.dealWithRedBag()
        }
      })
      /* 监听直播结束 */
      ChatService.OBJ.regHandler(ChatConfig.endLive, () => {
        // 结束直播--消息之后--中断红包雨
        _log.track(Vhall_User_Actions.LEAVE)
        this.stopRedBag()
      })
    },
    handleRedBagClick (e) {
      this.redBagTipShow = false
      this.redBagTimeDownShow = false
      this.redBagShow = false
      this.redBagNoneShow = false
    },
    selectRedBag (count) { // 选中红包雨红包
      this.redBagCount = count
      console.log(`点击到了 ${count} 个红包`)
    },
    /* 红包雨结束 */
    async endRainHandler () {
      this.rainTime = 0
      if (this.redBagCount) {
        await this.sendRedBag()
        if (!this.redBagResultInfo.amount) {
          // 延迟2秒执行，保证本次红包活动已经结束
          let st = setTimeout(() => {
            clearTimeout(st)
            this.queryRedBagrecordList()
          }, 2000)
        }
      } else {
        this.queryRedBagrecordList()
      }
    },
    /* 抢红包接口 */
    sendRedBag () {
      let param = {
        activity_id: this.activityId,
        red_packet_id: this.red_packet_id,
        password: ''
      }
      if (!param.password) {
        delete param.password
      }
      this.$post(activityService.GET_RED_BAG, {
        ...param
      }).then((res) => {
        if (res.code === 200 && res.data) {
          this.redBagShow = true
          this.redBagResultInfo = res.data
        }
      })
    },
    queryRedBagrecordList () {
      this.redBagNoneShow = true
      this.$config({ handlers: true }).$post(activityService.GET_RED_BAG_RECOREDS, {
        red_packet_id: this.red_packet_id
      }).then((res) => {
        if (res.code === 200 && res.data) {
          this.redBagrecordList = res.data.list
        }
      })
    },
    /* 停止红包操作 */
    stopRedBag () {
      clearInterval(this.timerInterval)
      clearInterval(this.redBagStartTimerInterval)
      this.redBagResultInfo = {
        avatar: '',
        nick_name: '',
        amount: '',
        amount_ranking: '',
        percent: ''
      }
      this.timer = 0
      this.redBagStartTimer = 0
      this.storeDownTimer(0)
      this.rainTime = 0
      this.autoTime = 0
      this.handleRedBagClick()
    },
    dealWithRedBag () {
      this.$config({ handlers: true }).$post(activityService.GET_RED_BAG_INFO, {
        red_packet_id: this.red_packet_id
      }).then((res) => {
        if (res.code === 200) {
          this.redBagInfo = { condition: res.data.condition, password: res.data.password }
          if (this.autoTime === 0) { // 立即开始
            this.redBagTimeDownShow = true
          } else {
            this.redBagTipShow = true
            // 红包雨活动已推送,倒计时
            this.redBagStartTimer = this.autoTime * 60
            this.redBagStartTimerInterval = setInterval(() => {
              this.storeDownTimer(this.redBagStartTimer)
              if (this.redBagStartTimer === 10) {
                clearInterval(this.redBagStartTimerInterval)
                this.redBagStartTimer = 0
                this.storeDownTimer(0)
                this.redBagTipShow = false
                // 10秒倒计时
                this.redBagTimeDownShow = true
                return
              }
              this.redBagStartTimer = this.redBagStartTimer - 1
            }, 1000)
          }
        }
      })
      // if (this.autoTime === 0) { // 立即开始
      //   this.redBagTimeDownShow = true
      // } else {
      //   this.redBagTipShow = true
      //   // 红包雨活动已推送,倒计时
      //   this.redBagStartTimer = this.autoTime * 60
      //   this.redBagStartTimerInterval = setInterval(() => {
      //     this.storeDownTimer(this.redBagStartTimer)
      //     if (this.redBagStartTimer === 10) {
      //       clearInterval(this.redBagStartTimerInterval)
      //       this.redBagStartTimer = 0
      //       this.storeDownTimer(0)
      //       this.redBagTipShow = false
      //       // 10秒倒计时
      //       this.redBagTimeDownShow = true
      //       return
      //     }
      //     this.redBagStartTimer = this.redBagStartTimer - 1
      //   }, 1000)
      // }
    },
    showDownTip () {
      if (this.redBagStartTimer > 10) {
        this.redBagTipShow = true
      }
    },
    PlaybackVideo () {
      EventBus.$on('play_back_video_completed', (a) => {
        _log.track(Vhall_User_Actions.LEAVE)
        console.log('回放播放完成了')
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'assets/css/mixin.scss';
.v-watch {
  /deep/ {
    position: relative;
    height: 100%;
    &.v-x5-div {
      .v-x5-title {
        display: block !important;
      }
      .v-hearder {
        top: 120px !important;
      }
      .v-click-modal {
        top: 220px !important;
      }
      .v-function-box {
        top: 642px !important;
      }
      .control-box-div {
        top: 562px !important;
      }
      .v-video-box {
        .v-mark-img {
          top: 220px;
        }
        video {
          object-position: 0 220px !important;
          margin-top: 0 !important;
        }
      }
    }
    &.v-close-x5-div {
      video {
        object-position: 0 120px !important;
      }
    }
    &.v-other-div {
      .v-video-box {
        .v-mark-img {
          top: 220px;
        }
        video {
          margin-top: 0 !important;
          object-position: 50% 50% !important;
        }
      }
      .control-box-div {
        top: auto;
        bottom: 0;
      }
      .v-click-modal {
        top: 0;
      }
      .v-mark {
        top: 0;
      }
    }
    .v-x5-title {
      display: none;
      width: 100%;
      height: 100px;
      line-height: 100px;
      background-color: #000000;
      color: #fff;
      font-size: 24px;
      text-align: center;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
    }
    .v-hearder {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 120px;
      background-color: #fff;
      padding: 0 30px 0 130px;
      font-size: 24px;
      .logo {
        display: block;
        position: absolute;
        top: 50%;
        left: 26px;
        height: 84px;
        width: 84px;
        margin-top: -40px;
        line-height: 80px;
        font-size: 30px;
        font-weight: bold;
        text-align: center;
        border-radius: 50%;
        background-image: url('../../assets/image/avatar@2x.png');
        background-repeat: no-repeat;
        background-size: cover;
      }
      .ac-title {
        display: block;
        width: 50%;
        line-height: 40px;
        margin-top: 20px;
      }
      .v-status {
        color: #fff;
        text-align: center;
        background-color: rgba(10, 10, 10, 0.8);
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
      .v-right {
        margin-top: -16px;
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
      top: 542px;
      bottom: 0;
      z-index: 3;
      background-color: #fff;
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
          bottom: 0px;
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
              width: 600px;
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
          .showKeyboard {
            .v-send-box-bg {
              left: 0;
            }
          }
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
        margin: 60px 15px 70px;
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
          font-size: 28px;
        }
      }
    }
  }
}
.red-bag-box {
  position: relative;
  width: 100vw;
  height: 130vw;
  background-image: url('../../assets/image/red-bag-bg@2x.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  color: #ffd021;

  .red-bag-content {
    position: absolute;
    top: 52%;
    left: 50%;
    width: 70vw;
    margin-left: -35vw;
    padding: 0 20px;
  }

  &.get-red-bag {
    background-image: url('../../assets/image/red-bag-bg-success@2x.png');
    background-size: contain;
    background-repeat: no-repeat;
    .red-bag-content {
      top: 30%;
    }
    .icon-close {
      top: 86px;
    }
    .red-bag-title {
      font-size: 6vw;
      line-height: 10vw;
      color: #ba5003;
    }

    .red-bag-money {
      font-size: 32px;
      color: #ec0827;
    }
    .detail-top {
      margin-top: 190px;
      font-size: 48px;
    }
    .detail-bottom {
      margin-top: 40px;
      font-size: 28px;
    }
  }

  &.red-bag-top {
    width: 80vw;
    padding: 30px;
    height: auto;
    margin-bottom: -2px;
    color: #333;
    background-color: #ec0627;
    background: linear-gradient(#ff6700, #fe0025);
    border-radius: 10px;
    .red-bag-title {
      font-size: 28px;
      line-height: 10vw;
      color: #fff;
    }
    .top-content {
      background-color: #fff;
      border-radius: 10px;
      margin-bottom: 4px;

      .red-bag-title {
        color: #4b5afe;
        font-size: 28px;
      }
    }

    .icon-close {
      top: 10px;
      right: 10px;
      color: #ffd021;
    }
  }

  .icon-close {
    position: absolute;
    top: 14%;
    right: 12%;
    font-size: 40px;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }

  .red-bag-title {
    font-size: 6vw;
    line-height: 10vw;
    color: #ffd021;
  }

  .red-bag-info {
    font-size: 28px;

    &.tip-info {
      background-color: #d90b25;
      padding: 15px;
      margin: 6vw 0;
      border-radius: 3px;
      color: #fff;
      opacity: 0.8;
      font-size: 28px;
    }

    .login-link {
      color: $color-blue;

      &:hover {
        cursor: pointer;
        color: $color-blue-hover;
        text-decoration: underline;
        transition: color 0.2s;
      }
    }
  }

  .red-bag-tip {
    display: inline-block;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #333;
    font-size: 14px;
    background-color: #ffd021;
    border-radius: 30px;
    padding: 0 30px;
    margin-top: 10px;
    font-size: 28px;
  }

  .time-down {
    display: inline-block;
    margin: 10px 0 30px 0;
    font-size: 72px;
    color: #fff;
  }

  .red-bag-money {
    color: $color-red;
    font-size: 30px;
    line-height: 50px;
  }

  .red-bag-detail {
    display: block;
    font-size: 28px;
    line-height: 30px;
  }

  .red-bag-list {
    list-style: none;
    user-select: none;

    li {
      width: 100%;
      padding: 20px;
      text-align: left;
      .head-icon {
        display: inline-block;
        width: 90px;
        height: 90px;
        line-height: 90px;
        border-radius: 50%;
        margin-right: 16px;
        border: solid 1px $color-bd;
        text-align: center;
        vertical-align: middle;
        background-image: url('../../assets/image/avatar@2x.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }

      .nick-name {
        display: inline-block;
        max-width: 300px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 90px;
        vertical-align: middle;
        font-size: 28px;
      }

      .red-bag-money {
        font-size: 28px;
        line-height: 90px;
      }
    }
  }
  .none-data {
    display: block;
    width: 100%;
    line-height: 80px;
    text-align: center;
    color: #8e9198;
    font-size: 28px;
  }
}
</style>

