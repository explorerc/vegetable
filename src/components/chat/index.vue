<template>
  <div class="chat-wrap"
       @click='boxClick'>
    <div class="bscroll"
         ref="bscroll"
         :class="type !== 'live'? 'vod' : 'live'"
         @mouseover="stopScroll = true"
         @mouseout="stopScroll = false">
      <ol class='chat-list bscroll-container'>
        <li v-for='(item,idx) in chatData'
            :data-joinId="item.id"
            :class="{'right': joinInfo.activityUserId*1 == item.id*1}">
          <dl class='clearfix'>
            <dt v-if="item.avatar !== ''"><img :src="`${imgHost}/${item.avatar}`"></dt>
            <dt class='avatar'
                v-else>{{item.name.substr(0,1)}}</dt>
            <dd>
              <!-- <div class="name" v-if='type === "live"'>{{item.name}} <em v-if="item.detail.role">{{item.detail.role}}</em> <i class='handle' v-if='!isWatch && item.detail.role !== "主持人"'>
                <ol>
                  <li class='mute' v-if="item.isGag === 'N'" @click='handleMuted(0,item.id)'><i></i>禁言</li>
                  <li class='mute' v-else @click='handleMuted(1,item.id)'><i></i>取消禁言</li>
                  <li class='kick' v-if="item.isKick === 'N'" @click='handleKicked(0,item.id)'><i></i>踢出</li>
                  <li class='kick' v-else @click='handleKicked(1,item.id)'><i></i>允许参会</li>
                </ol>
              </i>
              </div> -->
              <!-- <div class="name" v-else>{{item.name}} <em v-if="item.detail.role">{{item.detail.role}}</em></div> -->
              <div class="name">{{item.name}} <em v-if="item.detail.role">{{item.detail.role}}</em></div>
              <div class="txt"
                   v-html="item.detail.txt"></div>
            </dd>
          </dl>
        </li>
      </ol>
      <transition v-if="tipsShow && tipsCount > 0">
        <span class="msg-tips"
              @click='scrollBtm'>有{{tipsCount}}条新消息 <i class="iconfont icon-xiangxia"></i> </span>
      </transition>
      <transition name="left-right"
                  mode="out-in">
        <div class="announce-box"
             v-if="announceShow">
          <svg class="icon"
               style="width: 6.667vw; height: 6.667vw;vertical-align: middle;fill: currentColor;overflow: hidden;"
               viewBox="0 0 1305 1024"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               p-id="3285">
            <path d="M236.3648 689.6384a102.4 102.4 0 0 1 144.6144 7.5776l119.9104 133.1712a102.4 102.4 0 1 1-152.2176 137.0368l-119.9104-133.1712a102.4 102.4 0 0 1 7.6032-144.64z"
                  fill="#222222"
                  p-id="3286"></path>
            <path d="M277.4528 734.4384a25.6 25.6 0 0 0-1.8944 36.1472l119.9104 133.1968a25.6 25.6 0 0 0 38.0672-34.2784l-119.9104-133.1712a25.6 25.6 0 0 0-36.1728-1.8944z"
                  fill="#FFD021"
                  p-id="3287"></path>
            <path d="M144.5888 482.4832l47.2064-12.416a464.8448 464.8448 0 0 0 278.3744-207.104l72.832-119.1168c-15.3088 169.7024-7.9104 291.7888 22.1696 366.208 30.08 74.4704 107.52 162.304 232.2944 263.6032l-138.3168-37.7088a456.064 456.064 0 0 0-342.9376 42.1376l-42.5472 23.8336a173.6704 173.6704 0 0 1-245.9392-86.4256 173.6704 173.6704 0 0 1 116.864-233.0112z"
                  fill="#222222"
                  p-id="3288"></path>
            <path d="M211.328 544.3328l-47.2064 12.4416a96.8448 96.8448 0 0 0-59.904 141.056 96.8704 96.8704 0 0 0 131.8656 37.12l42.5472-23.8336a532.8384 532.8384 0 0 1 389.632-52.1472L528.896 313.9328a541.7728 541.7728 0 0 1-317.5424 230.4z"
                  fill="#FFD021"
                  p-id="3289"></path>
            <path d="M819.5072 795.9552c-94.4896 38.1696-217.088-93.1072-293.3248-281.856-76.2624-188.7232-79.2832-368.3072 15.2064-406.5024 94.5152-38.144 217.088 93.1328 293.3504 281.856 76.2368 188.7232 79.2576 368.3072-15.232 406.5024z"
                  fill="#222222"
                  p-id="3290"></path>
            <path d="M790.7328 724.736c12.9792-5.248 24.2944-35.7888 23.424-88.0384-1.024-61.3888-18.7904-139.6736-50.6368-218.496s-73.472-147.456-115.3536-192.3072c-35.6608-38.1952-65.024-52.3264-78.0032-47.104s-24.2688 35.8144-23.3984 88.064c1.024 61.3888 18.7648 139.6736 50.6112 218.496s73.472 147.456 115.3792 192.3328c35.6608 38.1696 65.024 52.3008 77.9776 47.0528z"
                  fill="#FFD021"
                  p-id="3291"></path>
            <path d="M668.8256 525.4912a76.8 76.8 0 1 1-57.5488-142.3872 76.8 76.8 0 0 1 57.5488 142.3872zM840.9088 233.2928a38.4 38.4 0 1 1-50.176-58.1376l172.544-148.8896a38.4 38.4 0 1 1 50.1504 58.1376l-172.544 148.8896zM951.04 575.1552a38.4 38.4 0 0 1-3.712-76.7232l256.9472-12.3648a38.4 38.4 0 0 1 3.6864 76.7232l-256.9472 12.3648zM902.4 407.9872a38.4 38.4 0 1 1-31.9488-69.8368l370.0736-169.344a38.4 38.4 0 1 1 31.9488 69.8368L902.4 407.9872zM201.3696 637.8496a25.6 25.6 0 1 1-12.1856-49.7152c14.08-3.456 24.576-6.144 31.488-8.0128a25.6 25.6 0 1 1 13.5936 49.3312c-7.4752 2.0736-18.4064 4.864-32.896 8.3968z m111.1552-35.4048a25.6 25.6 0 1 1-20.864-46.7712c40.2688-17.9712 84.7872-42.5216 133.4272-73.6256a25.6 25.6 0 1 1 27.5712 43.136c-50.688 32.4096-97.3568 58.1632-140.1344 77.2608z"
                  fill="#222222"
                  p-id="3292"></path>
          </svg>
          <div class="txt-box">
            <p class="txt">{{receiveAnnounce}}</p>
          </div>
          <i class="iconfont icon-close"
             @click='announceShow = false'></i>
        </div>
      </transition>
    </div>
    <div class="v-send-box-bg"
         v-if='type === "live" && isLogin && sendBoxShow'>
      <div class="send-box clearfix"
           id="sendBox">
        <div class="top">
          <template v-if='swapAnnounce'>
            <com-input :value.sync="value"
                       :placeholder="chatPlaceholder"
                       :max-length="140"
                       class='inp'
                       type="textarea"></com-input>
          </template>
          <template v-else>
            <com-input :value.sync="valueAnnounce"
                       :placeholder="announcePlaceholder"
                       :max-length="140"
                       class='inp'
                       type="textarea"></com-input>
          </template>
        </div>
        <div class="bottom clearfix">
          <i class='icon-emoji'
             @click='faceOpen = !faceOpen'
             title='表情'></i>
          <div class="face-box"
               v-if="faceOpen">
            <img :src="`//cnstatic01.e.vhall.com/static/img/arclist/Expression_${index+1}@2x.png`" @click.stop="inFace(index)" v-for="(item,index) in faceArr" :key="index">
          </div>
            <template v-if='swapAnnounce'>
              <template v-if='(mute || allMuted) && isWatch'>
                <div class='mute-box'>{{allMuted ? '已开启全体禁言' : '您已被禁言'}}</div>
              </template>
              <template v-else>
                <span @click='sendAction'
                      class='send-btn fr'>发送</span>
              </template>
            </template>
            <template v-else>
              <span @click='sendAnnounce'
                    class='send-btn fr'>发送</span>
            </template>
            <div class="fr"
                 v-if="joinInfo.roleName === 'HOST' && !isWatch">
              <i class='icon-swap'
                 title='切换发送聊天/公告'
                 @click='swapAnnounce ? swapAnnounce = false : swapAnnounce = true'></i>
              <div class='switch-box'>
                <span>全体禁言</span>
                <el-switch class='switch'
                           v-model="allMuted"
                           inactive-color="#DEE1FF"
                           :width="32"
                           active-color="#FFD021"
                           @change="muteAll"></el-switch>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class='send-box not-login' v-else-if='type === "live" && !isLogin'>
      需要登录才能参与聊天 <span @click='loginHandler'>登录</span>
    </div> -->

    </div>
</template>

<script>
// import LiveHttp from '../../api/Live-manage.js'
import ChatService from './ChatService.js'
import { mapMutations, mapState } from 'vuex'
import * as types from 'src/store/mutation-types'
import BScroll from 'better-scroll'
import activityService from 'src/api/activity-service'
export default {
  name: 'chat',
  data () {
    return {
      vhallParams: {
        token: '',
        appId: '',
        channelId: '',
        accountId: ''
      },
      activityId: this.$route.params.id,
      value: '',
      valueAnnounce: '',
      receiveAnnounce: '',
      service: null,
      chatData: [],
      tipsShow: false,
      announceShow: false,
      faceOpen: false,
      swapAnnounce: true,
      mute: false,
      allMuted: false,
      tipsCount: 0,
      timer: null,
      isLogin: false,
      stopScroll: false,
      chatPlaceholder: '请输入聊天内容',
      announcePlaceholder: '请输入公告内容',
      aBScroll: null,
      // imgHost: process.env.IMGHOST + '/'
      imgHost: 'http://dev-zhike.oss-cn-beijing.aliyuncs.com/',
      /* 表情数组 */
      faceArr: [
        {
          '[微笑]': '1'
        },
        {
          '[撇嘴]': '2'
        },
        {
          '[色]': '3'
        },
        {
          '[发呆]': '4'
        },
        {
          '[得意]': '5'
        },
        {
          '[流泪]': '6'
        },
        {
          '[害羞]': '7'
        },
        {
          '[闭嘴]': '8'
        },
        {
          '[睡]': '9'
        },
        {
          '[哭]': '10'
        },
        {
          '[尴尬]': '11'
        },
        {
          '[发怒]': '12'
        },
        {
          '[调皮]': '13'
        },
        {
          '[呲牙]': '14'
        },
        {
          '[惊讶]': '15'
        },
        {
          '[难过]': '16'
        },
        {
          '[酷]': '17'
        },
        {
          '[汗]': '18'
        },
        {
          '[抓狂]': '19'
        },
        {
          '[吐]': '20'
        },
        {
          '[偷笑]': '21'
        },
        {
          '[愉快]': '22'
        },
        {
          '[白眼]': '23'
        },
        {
          '[傲慢]': '24'
        },
        {
          '[饥饿]': '25'
        },
        {
          '[困]': '26'
        },
        {
          '[惊恐]': '27'
        },
        {
          '[流汗]': '28'
        },
        {
          '[憨笑]': '29'
        },
        {
          '[悠闲]': '30'
        },
        {
          '[奋斗]': '31'
        },
        {
          '[咒骂]': '32'
        },
        {
          '[疑问]': '33'
        },
        {
          '[嘘]': '34'
        },
        {
          '[晕]': '35'
        },
        {
          '[疯了]': '36'
        },
        {
          '[衰]': '37'
        },
        {
          '[骷髅]': '38'
        },
        {
          '[敲打]': '39'
        },
        {
          '[再见]': '40'
        },
        {
          '[擦汗]': '41'
        },
        {
          '[抠鼻]': '42'
        },
        {
          '[鼓掌]': '43'
        },
        {
          '[糗大了]': '44'
        },
        {
          '[坏笑]': '45'
        },
        {
          '[左哼哼]': '46'
        },
        {
          '[右哼哼]': '47'
        },
        {
          '[哈欠]': '48'
        },
        {
          '[鄙视]': '49'
        },
        {
          '[委屈]': '50'
        },
        {
          '[快哭了]': '51'
        },
        {
          '[阴险]': '52'
        },
        {
          '[亲亲]': '53'
        },
        {
          '[吓]': '54'
        },
        {
          '[可怜]': '55'
        },
        {
          '[菜刀]': '56'
        },
        {
          '[西瓜]': '57'
        },
        {
          '[啤酒]': '58'
        },
        {
          '[篮球]': '59'
        },
        {
          '[乒乓]': '60'
        },
        {
          '[咖啡]': '61'
        },
        {
          '[饭]': '62'
        },
        {
          '[猪头]': '63'
        },
        {
          '[玫瑰]': '64'
        },
        {
          '[凋谢]': '65'
        },
        {
          '[嘴唇]': '66'
        },
        {
          '[爱心]': '67'
        },
        {
          '[心碎]': '68'
        },
        {
          '[蛋糕]': '69'
        },
        {
          '[闪电]': '70'
        },
        {
          '[炸弹]': '71'
        },
        {
          '[刀]': '72'
        },
        {
          '[足球]': '73'
        },
        {
          '[瓢虫]': '74'
        },
        {
          '[便便]': '75'
        },
        {
          '[月亮]': '76'
        },
        {
          '[太阳]': '77'
        },
        {
          '[礼物]': '78'
        },
        {
          '[拥抱]': '79'
        },
        {
          '[强]': '80'
        },
        {
          '[弱]': '81'
        },
        {
          '[握手]': '82'
        },
        {
          '[胜利]': '83'
        },
        {
          '[抱拳]': '84'
        },
        {
          '[勾引]': '85'
        },
        {
          '[拳头]': '86'
        },
        {
          '[差劲]': '87'
        },
        {
          '[爱你]': '88'
        },
        {
          '[NO]': '89'
        },
        {
          '[OK]': '90'
        }
      ]
    }
  },
  props: {
    type: { // 活动状态 LIVE直播 VOD回放
      type: String,
      default: 'live'
    },
    isWatch: { // 是否是观看端
      type: Boolean,
      default: false
    },
    sendBoxShow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState('liveMager', {
      roomPaas: state => state.roomPaas,
      activityInfo: state => state.activityInfo, // 活动信息
      joinInfo: state => state.joinInfo // 参会信息
    }),
    ...mapState('tokenMager', {
      chatParams: state => state.chatParams
    }),
    ...mapState('login', {
      loginInfo: (state) => state.loginInfo
    })
  },
  mounted () {
    if (!this.isWatch) {
      this.isLogin = true
    }
    // 拉取最近聊天纪律
    // this.getHistroy()
    // this.initSdk()
    // const _that = this
    // setTimeout(function () {
    //   _that.initInfo()
    // }, 500)
    // this.service.regHandler('BEGIN_LIVE', this.listenAnnounce)
    // this.service.regHandler('FINISH_LIVE', this.listenAnnounce)
    // this.service.regHandler('INCREMENT_ONLINE', this.listenIncrease)
  },
  methods: {
    ...mapMutations('tokenMager', {
      setChatParams: types.CHAT_PARAMS
    }),
    ...mapMutations('liveMager', {
      storeJoinInfo: types.JOIN_INFO
    }),
    initSdk () {
      // ChatService.OBJ = new ChatService()
      let obj = { channelId: this.roomPaas.channelRoom }
      Object.assign(this.roomPaas, obj)
      ChatService.OBJ.init(this.roomPaas)
      ChatService.OBJ.regHandler('chat', this.listenChat)
      ChatService.OBJ.regHandler('ANNOUNCEMENT', this.listenAnnounce)
      ChatService.OBJ.regHandler('KICK', this.listenKick)
      ChatService.OBJ.regHandler('DISABLE_KICK', this.listenCancelkick)
      ChatService.OBJ.regHandler('GAG', this.listenMute)
      ChatService.OBJ.regHandler('DISABLE_GAG', this.listenCancelmute)
      ChatService.OBJ.regHandler('GAG_ALL', this.listenAllmute)
      ChatService.OBJ.regHandler('DISABLE_GAG_ALL', this.listenCancelallmute)
    },
    sendAction () {
      if (!this.value.replace(/\n/g, '').length) {
        this.chatPlaceholder = '聊天内容不能为空'
        return false
      }
      const role = this.joinInfo.roleName === 'HOST' ? '主持人' : '' // 主持人发送
      ChatService.OBJ.activityId = this.activityId
      const obj = {
        // avatar: this.joinInfo.avatar, // 头像
        role: role, // 角色
        txt: this.value // 输入内容
      }
      ChatService.OBJ.sendChat(JSON.stringify(obj))
      this.value = ''
      this.chatPlaceholder = '请输入聊天内容'
      this.faceOpen = false
      this.$emit('closeChatBox', true)
    },
    // handleKicked (flag, id) {
    //   const data = {
    //     activityId: this.activityId,
    //     userId: id,
    //     cancel: flag ? 'Y' : 'N' // 取消
    //   }
    //   this.$post(activityService.POST_KICK, data).then((res) => {
    //     this.$toast({
    //       content: flag ? '允许参会成功' : '踢出成功'
    //     })
    //   })
    // },
    // handleMuted (flag, id) {
    //   const data = {
    //     activityId: this.activityId,
    //     userId: id,
    //     cancel: flag ? 'Y' : 'N' // 取消
    //   }
    //   this.$post(activityService.POST_GAG, data).then((res) => {
    //     this.$toast({
    //       content: flag ? '取消禁言成功' : '禁言成功'
    //     })
    //   })
    // },
    listenChat (msg) {
      console.log('接收 聊天消息', msg)
      this.reArrange(msg)
      if (this.tipsShow) {
        this.tipsCount++
      }
    },
    listenAnnounce (msg) {
      console.log('接收 公告消息', msg)
      // 如果是发起端 则弹窗公告
      this.announceShow = true
      this.receiveAnnounce = msg.content
      const _that = this
      clearTimeout(_that.timer)
      _that.timer = setTimeout(function () {
        _that.announceShow = false
        this.receiveAnnounce = ''
        clearTimeout(_that.timer)
      }, 15000)
    },
    listenKick (msg) {
      console.log('接收 踢出消息', msg)
      this.refreshList(msg.activityUserId, 'isKick', 'Y')
      if (this.isSelf(msg.activityUserId)) {
        this.$router.push({
          path: `/kicked`
        })
      }
    },
    listenCancelkick (msg) {
      console.log('接收 取消踢出消息' + msg)
      this.refreshList(msg.activityUserId, 'isKick', 'N')
    },
    listenMute (msg) {
      console.log('接收 禁言消息', msg)
      this.refreshList(msg.activityUserId, 'isGag', 'Y')
      if (this.isSelf(msg.activityUserId)) {
        this.mute = true
      }
    },
    listenCancelmute (msg) {
      this.refreshList(msg.activityUserId, 'isGag', 'N')
      console.log('接收 取消禁言消息', msg)
      // 如果是自己 的相关操作
      if (this.isSelf(msg.activityUserId)) {
        this.mute = false
      }
    },
    listenAllmute (msg) {
      console.log('接收 全体禁言消息', msg)
      this.allMuted = true
    },
    listenCancelallmute (msg) {
      console.log('接收 取消全体禁言消息', msg)
      this.allMuted = false
    },
    isSelf (id) {
      if (this.joinInfo.activityUserId === id) {
        return true
      } else {
        return false
      }
    },
    refreshList (id, type, status) {
      this.chatData.forEach(item => {
        if (item.id * 1 === id * 1) {
          item[type] = status
        }
      })
    },
    reArrange (msg) {
      const obj = {}
      obj.id = msg.third_party_user_id
      obj.avatar = msg.avatar
      obj.name = msg.nick_name
      obj.isGag = msg.isGag
      obj.isKick = msg.isKick
      obj.detail = JSON.parse(msg.data)

      // if (this.joinInfo && this.joinInfo.activityUserId * 1 === msg.third_party_user_id * 1) { // 如果消息里参会id是自己的id
      //   obj.isSelf = true
      // } else {
      //   obj.isSelf = false
      // }

      /* 替换表情图片 */
      this.faceArr.forEach((index, item) => {
        for (let key in item) {
          let test = key.replace(/\[/, '\\[').replace(/\]/, '\\]')
          let reg = new RegExp(test, 'g')
          obj.detail.txt = obj.detail.txt.replace(
            reg,
            "<img src='//cnstatic01.e.vhall.com/static/img/arclist/Expression_" +
            item[key] +
            "@2x.png'>"
          )
        }
      })

      this.chatData.push(obj)
      if (!this.tipsShow && !this.stopScroll) {
        const _that = this
        setTimeout(function () {
          _that.scrollBtm()
        }, 200)
      }
      if (this.stopScroll) {
        this.tipsShow = true
      }
    },
    sendAnnounce () {
      if (!this.valueAnnounce.replace(/\n/g, '').length) {
        this.announcePlaceholder = '公告内容不能为空'
        return false
      }
      const data = {
        activityId: this.activityId,
        message: this.valueAnnounce
      }
      this.$get(activityService.GET_SENDANNOUNCEMENT, data).then((res) => {
        this.$toast({
          'content': '公告发送成功'
        })
        this.valueAnnounce = ''
        this.announcePlaceholder = '请输入公告内容'
        this.$emit('closeChatBox', true)
      })
    },
    scrollBtm () {
      this.aBScroll.scrollTo(0, this.aBScroll.maxScrollY, 500, 'bounce')
      setTimeout(() => {
        this.tipsCount = 0
      }, 500)
    },
    /* 选择表情 */
    inFace (index) {
      for (let key in this.faceArr[index]) {
        this.value += key
      }
    },
    boxClick (e) {
      if (e.target.className !== 'icon-emoji') {
        this.faceOpen = false
      }
    },
    getHistroy () {
      this.$get(activityService.GET_MESSAGELIST, {
        activityId: this.activityId
      }).then((res) => {
        res.data.reverse().forEach(item => {
          this.reArrange(item)
        })
      })
    },
    muteAll () {
      const data = {
        'activityId': this.activityId,
        'cancel': this.allMuted ? 'N' : 'Y'
      }
      this.$post(activityService.POST_GAGALL, data).then((res) => {
        this.$toast({
          content: data.cancel === 'Y' ? '已取消全体禁言' : '已开启全体禁言'
        })
      })
    },
    /* 初始化，获取权限 */
    initToken () {
      if (!this.isWatch) { // 发起端
        // return LiveHttp.getLiveTtoken(this.activityId)
      } else { // 观看端
        return this.roomPaas
      }
    },
    initScroll () {
      this.$nextTick(() => {
        let bscrollDom = this.$refs.bscroll
        this.aBScroll = new BScroll(bscrollDom, {
          'scrollbar': true,
          'click': true,
          'mouseWheel': true,
          'probeType ': 3
          // 当 probeType 为 1 的时候，会非实时（屏幕滑动超过一定时间后）派发scroll 事件；当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件；当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件。
        })
        // 滚动结束触发
        this.aBScroll.on('scrollEnd', (pos) => {
          // scrollY接收变量
          let height = document.getElementsByClassName('chat-list')[0].offsetHeight
          let wrapHeight = document.getElementsByClassName('bscroll')[0].offsetHeight
          if ((height * 0.5 > wrapHeight) && (height * 0.5 > pos.y * -1)) {
            this.tipsShow = true
          } else {
            this.tipsShow = false
          }
        })
      })
    },
    async initInfo () {
      this.initSdk()
    },
    loginHandler () {
      this.$emit('showLogin')
    }
  },
  watch: {
    'loginInfo.consumerUserId': {// 观看端 是否已登陆
      handler (newValue) {
        if (newValue && this.isWatch) {
          this.isLogin = true
        }
      },
      deep: true,
      immediate: true
    },
    allMuted: {
      handler (newValue) {
        // 是否全体禁言
        if (newValue) {
          this.$emit('isMute', { isMute: true, type: 'allMuted' })
        } else {
          this.$emit('isMute', { isMute: false, type: 'allMuted' })
        }
      },
      deep: true
    },
    mute: {
      handler (newValue) {
        // 是否全体禁言
        if (newValue) {
          this.$emit('isMute', { isMute: true, type: 'mute' })
        } else {
          this.$emit('isMute', { isMute: false, type: 'mute' })
        }
      },
      deep: true
    },
    activityInfo: {
      handler (newValue) {
        // 是否全体禁言
        if (newValue.setting.gag === 'Y') {
          this.allMuted = true
        } else {
          this.allMuted = false
        }
      },
      deep: true
    },
    'roomPaas.channelId': { // 发起端
      handler (val) {
        if (val) {
          console.log(val)
          this.initInfo()
        }
      },
      immediate: true,
      deep: true
    },
    'joinInfo.isGag': {
      handler (newValue) {
        if (newValue === 'Y' && this.isWatch) {
          this.mute = true
        }
      },
      deep: true,
      immediate: true
    },
    'joinInfo.isKick': {
      handler (newValue) {
        if (newValue === 'Y' && this.isWatch) {
          this.$router.push({
            path: `/kicked`
          })
        }
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style lang='scss' scoped src="./chat.scss">
</style>
