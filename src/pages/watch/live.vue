<template>
  <div class="v-video-box">
    <div class="v-video">
      <play-video role="watcher"
                  :play-type="playType"
                  :startInit="startInit"></play-video>
    </div>
    <div v-if="domShow"
         class="v-function-box">
      <div class="v-nav">
        <com-tabs :value.sync="tabValue"
                  @change="tabChange">
          <com-tab label="活动简介"
                   :index="1">
            <div class="v-introduction"
                 v-html="activityInfo.description"></div>
          </com-tab>
          <com-tab label="互动聊天"
                   :index="2">
            <div class="chat-content">
              <chating ref="chatbox"
                       :type="playType"
                       :isWatch="isWatch"
                       :sendBoxShow="sendBoxShow"
                       @closeChatBox="closeChatBox"
                       @isMute="isMute($event)"></chating>
            </div>
            <template v-if='playType === "live" && isLogin'>
              <template v-if='isMuteShow'>
                <div class="v-chat-control v-noLogin"
                     id="sendBoxBtn">
                  {{allMuted ? '已开启全体禁言' : '您已被禁言'}}
                </div>
              </template>
              <template v-else>
                <div class="v-chat-control"
                     @click="chatClick()"
                     id="sendBoxBtn">
                  <i class="iconfont icon-biaoqing"></i>
                  <span class="v-chat-clickbox">
                    输入文字聊天
                  </span>
                </div>
              </template>
            </template>
            <template v-else-if='playType === "live" && !isLogin'>
              <div class="v-chat-control v-noLogin"
                   id="sendBoxBtn">
                需要登录才能参与聊天
                <span @click="doLogin">登录</span>
              </div>
            </template>
          </com-tab>
        </com-tabs>
        <!-- <a class="v-subscribe"
           href="javascript:;">
          <i class="iconfont icon-dingyue"></i> 关注</a> -->
      </div>
    </div>
    <com-login @login="loginSuccess"></com-login>
  </div>
</template>
<script>
import PlayVideo from './video/index' // 直播推流回放组件 // 直播推流回放组件
import Chating from 'components/chat' // 聊天
import { mapMutations, mapState } from 'vuex'
import * as types from '../../store/mutation-types.js'
import loginMixin from 'components/login-mixin'
import ChatConfig from 'src/api/chat-config'
import ChatService from 'components/chat/ChatService.js'
export default {
  props: {
    domShow: Boolean
  },
  mixins: [loginMixin],
  components: { PlayVideo, Chating },
  data () {
    return {
      playType: '', // 直播(live), 回放(vod), 暖场(warm)
      startInit: false,
      tabValue: 1,
      isWatch: true, // 是否是观看端
      chatListInit: false, // 聊天滑动是否初始化
      sendBoxShow: false, // 是否显示聊天输入窗口
      isLogin: false, // 是否登录
      isMuteShow: false, // 是否被禁言
      allMuted: false // 是否是全体禁言
    }
  },
  computed: {
    ...mapState('liveMager', {
      activityInfo: state => state.activityInfo,
      roomPaas: state => state.roomPaas,
      joinInfo: state => state.joinInfo
    }),
    ...mapState('login', {
      loginInfo: state => state.loginInfo
    })
  },
  mounted () {
    this.storeLoginInfo(this.getLoginInfo())
    if (this.activityInfo.status === 'PREPARE') {
      if (this.activityInfo.warm && this.activityInfo.warm.enabled === 'Y' && this.activityInfo.warm.record && this.activityInfo.warm.record.list.length > 0 && this.activityInfo.warm.record.list[0].transcode_status === 1) {
        this.playType = 'warm'
      } else {
        this.playType = 'pre'
      }
    } else if (this.activityInfo.status === 'FINISH') {
      this.playType = 'end'
    } else {
      this.playType = 'live'
    }
    this.startInit = true
    this.initMsgServe()
  },
  created () {
    this.initToken()
    // let body = document.querySelector('body')
    // let _this = this
    // body.addEventListener('click', (e) => {
    //   if (e.target.id === 'sendBox' || e.target.className === 'v-chat-control' || e.target.className === 'v-showpsd' || e.target.className === 'v-chat-clickbox') {
    //     _this.sendBoxShow = true
    //   } else {
    //     _this.sendBoxShow = false
    //   }
    // }, false)
  },
  watch: {
    'loginInfo.consumerUserId': {// 观看端 是否已登陆
      handler (newValue) {
        if (newValue && this.isWatch) {
          this.isLogin = true
        }
      },
      deep: true
    }
  },
  methods: {
    ...mapMutations('login', {
      storeLoginInfo: types.LOGIN_INFO
    }),
    ...mapMutations('liveMager', {
      storeActivityInfo: types.ACTIVITY_INFO,
      storeJoinInfo: types.JOIN_INFO
    }),
    tabChange () {
      if (this.tabValue === 2) {
        if (!this.$refs.chatbox.aBScroll) {
          this.$refs.chatbox.initScroll()
          this.$refs.chatbox.getHistroy()
        }
        if (!this.$refs.chatbox.tipsShow) {
          const _that = this
          setTimeout(function () {
            _that.$refs.chatbox.scrollBtm()
          }, 200)
        }
      }
    },
    /* 初始化，获取权限 */
    initToken () {
      this.$nextTick(() => {
        this.startInit = true
      })
    },
    initMsgServe () {
      // ChatService.OBJ = new ChatService()
      ChatService.OBJ.init({
        accountId: this.roomPaas.accountId,
        token: this.roomPaas.token,
        appId: this.roomPaas.appId,
        channelId: this.roomPaas.channelRoom
      })
      /* 监听在线人数 */
      ChatService.OBJ.regHandler(ChatConfig.onLineNum, (msg) => {
        const temp = JSON.parse(JSON.stringify(this.liveInfo))
        temp.showOnlineNum = parseInt(temp.setting.initOnlineNum) + parseInt(msg.num)
        this.storeLiveInfo(temp)
      })
      /* 监听开始直播 */
      ChatService.OBJ.regHandler(ChatConfig.beginLive, (msg) => {
        this.playType = 'live'
        const temp = JSON.parse(JSON.stringify(this.activityInfo))
        console.log(temp)
        temp.status = 'LIVING'
        temp.statusName = '直播中'
        this.storeActivityInfo(temp)
      })
      /* 监听直播结束 */
      ChatService.OBJ.regHandler(ChatConfig.endLive, (msg) => {
        this.playType = 'end'
        const temp = JSON.parse(JSON.stringify(this.activityInfo))
        temp.status = 'FINISH'
        temp.statusName = '结束'
        this.storeActivityInfo(temp)
      })
    },
    isMute (val) {
      this.isMuteShow = val.isMute
      this.allMuted = val.type === 'allMuted'
    },
    chatClick () {
      // 点击弹出聊天窗口
      this.sendBoxShow = true
    },
    closeChatBox () {
      // 关闭聊天窗口
      this.sendBoxShow = false
    },
    loginSuccess (res) {
      this.storeLoginInfo(res)
      this.isLogin = true
      this.$router.go(0)
    },
    loginHandler () {
      this.$emit('showLogin')
    }
  }
}
</script>
<style lang="scss" scoped>
.v-video-box {
  width: 100%;
  height: 100%;
  position: relative;
  flex: 1;
}
.v-video /deep/ {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .v-text {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 2;
  }
  video {
    width: 100%;
    height: 422px;
  }
  #my-puller {
    width: 100%;
    height: 422px;
  }
  .v-controls {
    position: absolute;
    top: 0px;
    right: 0;
    left: 0;
    .el-slider {
      width: 500px;
      position: absolute;
      top: 360px;
      left: 60px;
      // top: 320px;
    }
    .v-fullScreen {
      position: absolute;
      top: 375px;
      // top: 320px;
      right: 50px;
      color: #ffffff;
    }
    .v-start {
      position: absolute;
      // top: 375px;
      top: 320px;
      right: 110px;
      color: #ffffff;
    }
  }
  video {
    width: 100%;
    height: 422px;
    object-fit: contain;
  }
  p {
    color: red;
  }
  .v-div {
    position: absolute;
    top: 422px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    overflow: auto;
  }
}
</style>
