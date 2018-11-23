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
                       @magInfo ="magInfo"
                       @closeChatBox="closeChatBox"
                       @isMute="isMute($event)"
                       @clickTools="clickTools"></chating>
            </div>
            <template v-if='(playType === "live" || playType === "warm"  || playType === "pre") && isLogin'>
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
            <template v-else-if='(playType === "live" || playType === "warm" || playType === "pre") && !isLogin'>
              <div class="v-chat-control v-noLogin"
                   id="sendBoxBtn">
                需要登录才能参与聊天
                <span @click="doLogin">登录</span>
              </div>
            </template>
            <div class="msg-Box">
              <!--商品推送-->
              <transition name="goods-fade">
                <div class="goods_small_popover" v-if="goodsSmallPopoverShow">
                  <div @click="goInfo(goodsSmallDetails, 'push')">
                    <img class="cover_img" :src="`${$imgHost}/${goodsSmallDetails.image[0].name}`">
                    <div>
                      <p class="item-price">
                       <!-- <span>￥{{goodsSmallDetails.preferential}}</span>
                        <del>￥{{goodsSmallDetails.price}}</del>-->
                        <span v-show="goodsSmallDetails.preferential !== '0.00' && goodsSmallDetails.price !== '0.00'">￥{{goodsSmallDetails.preferential}}</span>
                        <span v-show="goodsSmallDetails.preferential === '0.00' && goodsSmallDetails.price !== '0.00'">￥{{goodsSmallDetails.price}}</span>
                        <span v-show="goodsSmallDetails.preferential === '0.00' && goodsSmallDetails.price === '0.00'">免费</span>
                        <del v-show="goodsSmallDetails.preferential !== '0.00'">￥{{goodsSmallDetails.price}}</del>
                        <i v-show="goodsSmallDetails.price === '0.00'"></i>
                      </p>
                      <h4 class="item-title">{{goodsSmallDetails.title}}</h4>
                    </div>
                    <i class="el-icon-close" @click.stop="goodsSmallPopoverShow = false"></i>
                  </div>
                  <i></i>
                </div>
              </transition>
              <!--商品推送-->
              <!--操作区-->
              <div class="icon-list">
                <span class='goods' @click="showGoods"  v-if="goodsLen" ><em>{{goodsLen}}</em>商品</span>
                <span class='redpack' v-if="downTimer" @click='clickRedpack'><em></em>红包</span>
                <span class='ques' v-if="questionStatus.iconShow" @click='clickQues'><em v-if="questionStatus.redIcon"></em>问卷</span>
              </div>
              <!--操作区-->
              <i></i>
            </div>
            <!--商品推送-->
          </com-tab>
        </com-tabs>
        <!-- <a class="v-subscribe"
           href="javascript:;">
          <i class="iconfont icon-dingyue"></i> 关注</a> -->
      </div>
      <!--商品祥情-->
      <transition name="fade">
        <div class="goodsInfo" v-if="goodsInfoShow">
          <p><span @click="goGoodsList">更多商品 </span><i class="el-icon-arrow-down" @click="closeGoods"></i></p>
          <div>
            <h4>{{goodsSmallDetails.title}}</h4>
            <el-carousel>
              <el-carousel-item v-for="(item,ind) in goodsSmallDetails.image">
                <img :src="`${$imgHost}/${item.name}`" alt="">
              </el-carousel-item>
            </el-carousel>
            <p>{{goodsSmallDetails.describe}}</p>
            <footer>
              <div>
                <!--<span>{{goodsSmallDetails.preferential}}</span> <del>{{goodsSmallDetails.price}}</del>-->
                <span v-show="goodsSmallDetails.preferential !== '0.00' && goodsSmallDetails.price !== '0.00'">￥{{goodsSmallDetails.preferential}}</span>
                <span v-show="goodsSmallDetails.preferential === '0.00' && goodsSmallDetails.price !== '0.00'">￥{{goodsSmallDetails.price}}</span>
                <span v-show="goodsSmallDetails.preferential === '0.00' && goodsSmallDetails.price === '0.00'">免费</span>
                <del v-show="goodsSmallDetails.preferential !== '0.00'">￥{{goodsSmallDetails.price}}</del>
                <i v-show="goodsSmallDetails.price === '0.00'"></i>
              </div>
              <span @click="goBuy({goods_id:goodsSmallDetails.goods_id,type:1})">立即购买</span>
            </footer>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <comGoods class="goodsList" :goodsMsg='goodsMsg' v-show="goodsListShow" @closeGoodList = 'closeGoodList' @goodsInfo="goInfo" @goodsCount="goodsCount"></comGoods>
      </transition>
    </div>
    <!-- 推荐卡片 -->
    <div class="wrap-cover" v-if="cardData.show"></div>
    <transition name="top-bottom"
                mode="out-in">
      <com-cards v-if="cardData.show"
                 :cardData="cardData"
                 @closeCards='closeCards'></com-cards>
    </transition>

    <!-- 问卷 -->
    <comQuestions :dragData="dragData"
                  v-if="questionsShow"
                  :naireId="naireId"
                  :visitorId="visitorId"
                  :questions="questions"
                  @questionSuccess="questionSuccess"> </comQuestions>
    <message-box v-if="questionsSubmissionShow"
                 header=''
                 confirmText='提交'
                 class="v-questions-submission-box"
                 @handleClick="hiddenQuestions">
      <div class="v-content">
        <img src="../../assets/image/success@2x.png" alt="">
        <p>已提交问卷，感谢您的参与</p>
      </div>
    </message-box>
    <com-login @login="loginSuccess"></com-login>
    <!--弹框-->
    <message-box v-if="taoShow"
                 width="100%"
                 header=''
                 confirmText=''
                 class="v-questions-box tao-show"
                 @handleClick="taoShowBox">
      <div class="v-content">
        <img src="~assets/image/tao.png" alt="">
        <p>
         请打开 <br><span style="color: #2878FF">{{goodsSmallDetails.tao}}</span> <br>购买商品
        </p>

      </div>
    </message-box>
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
import activityService from 'src/api/activity-service'
import comCards from './sales-tools/com-cards'
import comGoods from './sales-tools/com-goods'
import comQuestions from './sales-tools/com-questions'
import questionService from 'src/api/questionnaire-service'
export default {
  props: {
    domShow: Boolean
  },
  mixins: [loginMixin],
  components: { PlayVideo, Chating, comCards, comQuestions, comGoods },
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
      dragData: [],
      questionsShow: false,
      questionsSubmissionShow: false,
      naireId: '',
      questions: {
        imgUrl: '',
        title: '',
        description: ''
      }, // 问卷id
      visitorId: this.$parent.sdkVisitorId,
      currentQuestionId: '',
      questionShow: false,
      questionStatus: {
        iconShow: false,
        redIcon: false
      },
      goodsSmallPopoverShow: false, // 弹框显示
      goodsSmallDetails: {},
      goodsMsg: {},
      goodsInfoShow: false,
      goodsListShow: false,
      activityId: this.$route.params.id,
      taoShow: false,
      goodsLen: 0
    }
  },
  computed: {
    ...mapState('liveMager', {
      activityInfo: state => state.activityInfo,
      roomPaas: state => state.roomPaas,
      joinInfo: state => state.joinInfo,
      downTimer: state => state.downTimer
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
    this.getQuestionsStatus()
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
          _log.track(Vhall_User_Actions.LEAVE)
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
      ChatService.OBJ.regHandler(ChatConfig.MARKET_TOOL, (msg) => {
        console.log(msg)
        switch (msg.type) {
          case 'RECOMMEND_CARD_PUSH':
            console.log('--推荐卡片--消息--')
            this.getCardDetails(msg.recommend_card_id)
            break
          case 'NAIRE':
            console.log('--发送问卷--消息--')
            if (this.currentQuestionId === msg.id && this.questionsShow) {
            } else {
              this.currentQuestionId = msg.id
              this.getQuestions(msg.id)
            }
            break
          case 'GOODS_PUSH':
            console.log('--商品推送--消息--')
            // this.goodsLen += 1
            this.getGoodsDetails(msg.goods_id)
            break
          case 'GOODS_ADDED':
          case 'GOODS_TOP':
            console.log('--商品上架--消息--')
            this.goodsMsg = msg
            break
        }
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
    getQuestionsStatus () {
      this.$config({ handlers: true }).$get(questionService.GET_QUESTION, {
        activityId: this.$route.params.id,
        visitorId: this.visitorId
      }).then((res) => {
        if (res.code === 200 && res.data && res.data.id) {
          this.questionStatus.iconShow = true
          this.questionStatus.redIcon = true
        }
      }).catch((err) => {
        if (err.code === 15110) {
          this.questionStatus.iconShow = true
          this.questionStatus.redIcon = false
        }
      })
    },
    getQuestions () {
      this.questionsShow = false
      this.questionsSubmissionShow = false
      this.$config({ handlers: true }).$get(questionService.GET_QUESTION, {
        activityId: this.$route.params.id,
        visitorId: this.visitorId
      }).then((res) => {
        this.questionStatus.redIcon = true
        this.questions.imgUrl = res.data.imgUrl
        this.questions.title = res.data.title
        this.questions.description = res.data.description
        this.naireId = res.data.id
        this.dragData = res.data.detail
        this.questionsShow = true
      }).catch((err) => {
        if (err.code === 15110) {
          this.questionsSubmissionShow = true
          this.questionStatus.iconShow = true
          this.questionStatus.redIcon = false
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
    },
    questionSuccess (type) {
      debugger
      this.questionsShow = false
      this.questionStatus.redIcon = type
    },
    hiddenQuestions (e) {
      if (e.action === 'cancel') {
        this.questionsSubmissionShow = false
      }
    },
    getCardDetails (id) {
      this.$get(activityService.GET_VISITED_CARD_DETAIL, { recommend_card_id: id }).then((res) => {
        if (res.code === 200) {
          const data = {
            show: true
          }
          this.cardData = { ...res.data, ...data }
          console.log(this.cardData)
        }
      })
    },
    clickTools (res) {
      // console.log(res)
      // switch (res.type) {
      //   case 'goods':
      //     this.getGoodsDetails(res.id, 'info')
      //     this.goodsInfoShow = true
      //     break
      //   case 'cards':
      //     this.getCardDetails(res.id)
      //     break
      //   case 'ques':
      //     // this.getQuestions(res.id)
      //     break
      //   case 'redpack':
      //     // this.$parent.showDownTip()
      //     break
      // }
    },
    getGoodsDetails (id, type) {
      this.$get(activityService.GET_WATCH_GOODS_DETAIL, { goods_id: id }).then(res => {
        if (res.code === 200) {
          if (!type) {
            this.goodsSmallPopoverShow = true
          }
          res.data.image = JSON.parse(res.data.image)
          this.goodsSmallDetails = res.data
          console.log(this.goodsSmallDetails, 8888)
        }
      })
    },
    magInfo (type, id) {
      if (type === 'GOODS_PUSH') {
        console.log(type, id, '555555')
        // this.getGoodsDetails(id)
        // this.goodsInfoShow = true
      }
    },
    closeGoods () {
      this.goodsInfoShow = false
    },
    showGoods () {
      this.goodsListShow = true
    },
    closeGoodList () {
      this.goodsListShow = false
    },
    async goInfo (params, type) {
      // console.log(params, type)
      if (type === 'lists') {
        this.goodsListShow = false
      } else {
        this.goodsSmallPopoverShow = false
      }
      this.goodsInfoShow = true
      this.getDetails(params)
    },
    getDetails (params) {
      this.getGoodsDetails(params.goods_id, 'info')
      this.goodsVisit({ goods_id: params.goods_id, type: 0 })
    },
    goBuy (params) {
      // params.activity_id = this.activityId
      this.goodsVisit(params)
      if (this.goodsSmallDetails.tao) {
        this.taoShow = true
      } else {
        location.href = this.goodsSmallDetails.url
      }
    },
    taoShowBox (e) {
      if (e.action === 'cancel') {
        this.taoShow = false
      } else if (e.action === 'confirm') { // 点击确定
      }
    },
    goodsCount (res) {
      this.goodsLen = res
    },
    clickRedpack () {
      this.$parent.showDownTip()
    },
    goGoodsList () {
      this.goodsInfoShow = false
      this.goodsListShow = true
    },
    clickQues () {
      this.getQuestions()
    },
    goodsVisit (params) {
      params.activity_id = this.activityId
      this.$get(activityService.GOODS_VISIT, params)
    }
  }
}
</script>
<style lang="scss" scoped>
.wrap-cover {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9998;
  background: rgba(0, 0, 0, 0.7);
}
.v-video-box {
  width: 100%;
  height: 100%;
  position: relative;
  flex: 1;
  background-color: #000000;
}
.fade-enter-active {
  transition: all 0.5s ease;
}
.fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter, .fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(20px);
  opacity: 0;
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
.icon-list /deep/ {
  position: absolute;
  bottom: 90px;
  right: 22px;
  span {
    position: relative;
    color: transparent;
    width: 80px;
    height: 80px;
    display: block;
    border-radius: 200px;
    background: url('~assets/image/tools-circle-redpack.png') no-repeat center;
    background-size: 100%;
    margin-bottom: 30px;
    em {
      position: absolute;
      top: 3px;
      right: 3px;
      width: 20px;
      height: 20px;
      background: #fc5659;
      border-radius: 200px;
      color: #fff;
      font-size: 12px;
      text-align: center;
    }
  }
  .ques {
    background-image: url('~assets/image/tools-circle-ques.png');
  }
  .goods {
    background-image: url('~assets/image/tools-circle-good.png');
    em {
      width: 40px;
      height: 30px;
      line-height: 35px;
      top: 0;
    }
  }
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.goods-fade-enter-active {
  transition: all .1s ease;
  animation: goods-fade-in 0.1s;
}
.goods-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  animation: goods-fade-in .3s reverse;
}
.goods-fade-enter, .goods-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(30px);
  opacity: 0;
}
@keyframes goods-fade-in {
  0%{
    transform: scale(0);
  }
  100%{
    transform: scale(1);
  }
}
.goods_small_popover /deep/ {
  position: absolute;
  bottom: 105px;
  left: 0;
  border-radius: 4px;
  z-index: 1000;
  width: 470px;
  height: 140px;
  background-color: white;
  box-shadow: 2px 10px 20px 5px rgba(0, 0, 0, 0.15);
  div {
    .cover_img {
      width: 140px;
      height: 140px;
      float: left;
      margin-right: 4px;
    }
    i {
      position: absolute;
      top: 5px;
      right: 10px;
    }
    div {
      padding: 10px;
      height: 26px;
      line-height: 26px;
      .item-title {
        font-size: 14px;
        line-height: 30px;
        height: 60px;
        margin-top: 10px;
        overflow: hidden;
      }
      .item-price {
        span {
          font-size: 22px;
          color: #fc5659;
        }
        del {
          font-size: 18px;
          color: rgba(136, 136, 136, 1);
        }
      }
    }
  }
}
.goodsList /deep/ {
  background-color: white;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: auto;
}
.goodsInfo /deep/ {
  background-color: white;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: auto;
  > p {
    height: 80px;
    line-height: 80px;
    font-size: 30px;
    color: rgba(85, 85, 85, 1);
    border-bottom: 1px solid #cccccc;
    span {
      margin-left: 30px;
      cursor: pointer;
      font-weight: 400;
      color: #4b5afe;
    }
    i {
      margin-right: 30px;
      line-height: 80px;
      font-size: 28px;
      float: right;
    }
  }
  > div {
    padding: 0 50px 30px 50px;
    h4 {
      font-size: 32px;
      color: #222222;
      margin: 20px 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .el-carousel {
      border-radius: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    p {
      margin: 30px auto;
      word-wrap: break-word;
      font-size: 28px;
      font-weight: 400;
      color: rgba(136, 136, 136, 1);
      line-height: 40px;
    }
    footer {
      height: 80px;
      line-height: 80px;
      display: flex;
      border-radius: 40px;
      overflow: hidden;
      > div {
        display: inline-block;
        flex: 3;
        text-align: center;
        background-color: #555555;
        span {
          color: white;
          font-size: 36px;
        }
        del {
          margin-left: 5px;
          color: #888888;
        }
      }
      > span {
        text-align: center;
        flex: 2;
        display: inline-block;
        background-color: #ffd021;
      }
    }
  }
}
.tao-show /deep/ {
  .ve-message-box {
    .ve-message-box__container {
      .v-content {
        text-align: center;
        img {
          margin: 80px auto 20px auto;
        }
        p {
          font-size: 30px;
          color: #333333;
        }
      }
      .ve-message-box__btns {
        display: none;
      }
    }
  }
}
.v-questions-submission-box /deep/ {
  img {
    display: block;
    width: 122px;
    margin: 90px auto 0;
  }

  p {
    font-size: 14px;
    color: #222;
    text-align: center;
    margin: 30px auto 100px;
  }

  .ve-message-box {
    &:before {
      background-color: rgba(0, 0, 0, 0);
    }

    .ve-message-box__btns {
      display: none;
    }
  }
}
</style>
