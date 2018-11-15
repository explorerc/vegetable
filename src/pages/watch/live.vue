<template>
  <div class="v-video-box">
    <div class="v-video">
      <play-video role="watcher"
                  :play-type="playType"
                  :startInit="startInit"></play-video>
    </div>
    <div v-show="domShow"
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
                      :class="{showKeyboard:sendBoxShow}"
                       :type="playType"
                       :isWatch="isWatch"
                       :sendBoxShow="true"
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
    <!-- 推荐卡片 -->
    <transition name="top-bottom"  mode="out-in">
      <com-cards v-if="cardData.show" :cardData="cardData" @closeCards='closeCards'></com-cards>
    </transition>

    <!-- 问卷 -->
    66
    <comQuestions :dragData="dragData"> </comQuestions>
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
import comCards from './sales-tools/com-cards'
import comQuestions from './sales-tools/com-comQuestions'
import { types as QTypes } from 'components/questionnaire/types'
export default {
  props: {
    domShow: Boolean
  },
  mixins: [loginMixin],
  components: { PlayVideo, Chating, comCards, comQuestions },
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
      allMuted: false, // 是否是全体禁言
      cardData: {
        show: false,
        btn_display: 'Y',
        btn_link: 'www.baidu.com',
        btn_text: '地方的',
        desc: '打手犯规负担',
        pic: 'mp-test/9c/10/9c10d12e6f417d6bd29a911159420290.png',
        push_num: '0',
        recommend_card_id: '18',
        title: 'v风格方法',
        view_num: '0',
        visit_num: '0'
      },
      dragData: []
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
      if (this.activityInfo.warm && this.activityInfo.warm.enabled === 'Y') {
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
    this.getQuestions()
  },
  created () {
    // this.initToken()
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
        if (!this.$refs.chatbox.tipsShow) {
          const _that = this
          setTimeout(function () {
            _that.$refs.chatbox.scrollBottom(10)
          }, 200)
        }
      }
    },
    // /* 初始化，获取权限 */
    // initToken () {
    //   this.$nextTick(() => {
    //     this.startInit = true
    //   })
    // },
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
        let temp = JSON.parse(JSON.stringify(this.activityInfo))
        temp.setting.initOnlineNum = msg.num
        this.storeActivityInfo(temp)
      })
      /* 监听开始直播 */
      ChatService.OBJ.regHandler(ChatConfig.beginLive, (msg) => {
        setTimeout(() => {
          this.playType = 'live'
          const temp = JSON.parse(JSON.stringify(this.activityInfo))
          console.log(temp)
          temp.status = 'LIVING'
          temp.statusName = '直播中'
          this.storeActivityInfo(temp)
        }, 15000)
      })
      /* 监听直播结束 */
      ChatService.OBJ.regHandler(ChatConfig.endLive, (msg) => {
        setTimeout(() => {
          this.playType = 'end'
          const temp = JSON.parse(JSON.stringify(this.activityInfo))
          temp.status = 'FINISH'
          temp.statusName = '结束'
          this.storeActivityInfo(temp)
        }, 15000)
      })
      /* 监听真实人员进入直播间 */
      ChatService.OBJ.regHandler(ChatConfig.joinLive, (msg) => {
        console.log('--进入房间--消息--')
        let temp = JSON.parse(JSON.stringify(this.activityInfo))
        temp.onlineNum = parseInt(temp.onlineNum) + 1
        this.storeActivityInfo(temp)
      })
      /* 监听真实人员离开直播间 */
      ChatService.OBJ.regHandler(ChatConfig.leaveLive, (msg) => {
        console.log('--离开房间--消息--')
        let temp = JSON.parse(JSON.stringify(this.activityInfo))
        if (this.allMuted) {
          temp.setting.gag = this.isMuteShow ? 'Y' : 'N'
        }
        temp.onlineNum = parseInt(temp.onlineNum) - 1
        console.log(temp)
        this.storeActivityInfo(temp)
      })
      /* 监听推荐卡片 */
      ChatService.OBJ.regHandler(ChatConfig.cardPush, (msg) => {
        console.log('--推荐卡片--消息--')
        console.log(msg)
        const data = {
          show: true
        }
        this.cardData = { ...msg.recommend_card_id, ...data }
        console.log(this.cardData)
      })
    },
    isMute (val) {
      this.isMuteShow = val.isMute
      this.allMuted = val.type === 'allMuted'
    },
    chatClick () {
      // 点击弹出聊天窗口
      this.sendBoxShow = true
      document.getElementsByClassName('inp')[0].children[0].focus()
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
    },
    closeCards () {
      this.cardData.show = false
    },
    getQuestions () {
      this.questionsShow = true
      this.dragData = [
        {
          title: '单选题',
          errorTip: '',
          type: QTypes.RADIO,
          required: true,
          detail: {
            list: [
              {
                value: '选项'
              }
            ]
          },
          ext: {
            name: '单选题'
          }
        },
        {
          title: '多选题',
          errorTip: '',
          type: QTypes.CHECKBOX,
          value: [],
          required: true,
          detail: {
            list: [
              {
                value: '选项'
              }
            ]
          },
          ext: {
            name: '多选题'
          }
        },
        {
          title: '下拉题',
          errorTip: '',
          type: QTypes.SELECT,
          required: true,
          detail: {
            list: [
              {
                value: '选项'
              }
            ]
          },
          ext: {
            name: '下拉题'
          }
        },
        {
          title: '问答题',
          errorTip: '',
          type: QTypes.TEXT,
          style: '',
          required: false,
          detail: {
            format: 'textarea',
            max: 300
          },
          ext: {
            name: '问答题'
          },
          value: ''
        },
        {
          title: '姓名',
          errorTip: '',
          type: QTypes.TEXT,
          required: false,
          detail: {
            format: 'input',
            max: 10
          },
          ext: {
            name: '姓名'
          },
          value: ''
        },
        {
          title: '手机号',
          errorTip: '',
          type: QTypes.TEXT,
          required: true,
          detail: {
            format: 'mobile',
            max: 11
          },
          verification: 'Y',
          ext: {
            name: '手机号'
          },
          value: ''
        },
        {
          title: '邮箱',
          errorTip: '',
          type: QTypes.TEXT,
          required: false,
          detail: {
            format: 'email',
            max: 30
          },
          ext: {
            name: '邮箱'
          },
          value: ''
        },
        {
          title: '性别',
          errorTip: '',
          type: QTypes.SELECT,
          required: true,
          detail: {
            list: [
              {
                value: '男'
              },
              {
                value: '女'
              }
            ]
          },
          ext: {
            fixedness: true,
            name: '性别'
          }
        },
        {
          title: '生日',
          errorTip: '',
          type: QTypes.DATE,
          required: true,
          detail: {
            format: 'yyyy-MM-dd'
          },
          ext: {
            name: '生日'
          }
        },
        {
          title: '地域',
          errorTip: '',
          type: QTypes.AREA,
          required: true,
          detail: {
            level: 'address'
          },
          ext: {
            name: '地域'
          },
          value: ''
        },
        {
          title: '行业',
          errorTip: '',
          type: QTypes.SELECT,
          required: true,
          detail: {
            list: [
              {
                value: 'IT/互联网'
              },
              {
                value: '电子/通信/硬件'
              },
              {
                value: '金融'
              },
              {
                value: '交通/贸易/物流'
              },
              {
                value: '消费品'
              },
              {
                value: '机械/制造'
              },
              {
                value: '能源/矿产环保'
              },
              {
                value: '制药/医疗'
              },
              {
                value: '专业服务'
              },
              {
                value: '教育/培训'
              },
              {
                value: '广告/媒体/娱乐/出版'
              },
              {
                value: '房地产/建筑'
              },
              {
                value: '服务业'
              },
              {
                value: '政府/非盈利机构/其它'
              }
            ]
          },
          ext: {
            fixedness: true,
            name: '教育水平'
          }
        },
        {
          title: '职位',
          type: QTypes.TEXT,
          required: true,
          detail: {
            format: 'input',
            max: 10
          },
          ext: {
            name: '职位'
          },
          value: ''
        },
        {
          title: '教育水平',
          errorTip: '',
          type: QTypes.SELECT,
          required: true,
          detail: {
            list: [
              {
                value: '博士'
              },
              {
                value: '硕士'
              },
              {
                value: '本科'
              },
              {
                value: '大专'
              },
              {
                value: '高中'
              }
            ]
          },
          ext: {
            fixedness: true,
            name: '教育水平'
          }
        }
      ]
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
  background-color: #000000;
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
