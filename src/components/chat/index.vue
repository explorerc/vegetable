<template>
  <div class="chat-wrap" @click='boxClick'>
    <div class="bscroll" ref="bscroll" :class="type !== 'LIVE'? 'vod' : 'live'">
      <ol class='chat-list bscroll-container'>
        <li v-for='(item,idx) in chatData' :data-joinId="item.id" :class="{'right': joinInfo.activityUserId == item.id}">
          <dl class='clearfix'>
            <dt v-if="item.avatar !== ''"><img :src="`${imgHost}/${item.avatar}`"></dt>
            <dt class='avatar' v-else >{{item.name.substr(0,1)}}</dt>
            <dd>
              <div class="name" v-if='type === "LIVE"'><em v-if="item.detail.role">{{item.detail.role}}</em> {{item.name}} <i class='handle' v-if='!isWatch'>
                <ol>
                  <li class='mute' v-if="item.isGag === 'N'" @click='handleMuted(0,item.id)'><i></i>禁言</li>
                  <li class='mute' v-else @click='handleMuted(1,item.id)'><i></i>取消禁言</li>
                  <li class='kick' v-if="item.isKick === 'N'" @click='handleKicked(0,item.id)'><i></i>踢出</li>
                  <li class='kick' v-else @click='handleKicked(1,item.id)'><i></i>允许参会</li>
                </ol>
              </i>
              </div>
              <div class="name" v-else>{{item.name}} <em v-if="item.detail.role">{{item.detail.role}}</em></div>
              <div class="txt" v-html="item.detail.txt"></div>
            </dd>
          </dl>
        </li>
      </ol>
      <transition v-if="tipsShow && tipsCount > 0" >
        <span class="msg-tips"  @click='scrollBtm'>有{{tipsCount}}条新消息</span>
      </transition>
      <transition name='top'  mode="out-in" appear>
        <div class="announce-box" v-if="announceShow" >
          <i class='icon-speak'></i>
          <div class="txt-box">
            <p class="txt">{{receiveAnnounce}}</p>
          </div>
          <span class="close" @click='announceShow = false'>×</span>
        </div>
      </transition>
    </div>
    <div class="send-box clearfix" v-if='type === "LIVE" && isLogin'>
      <div class="top">
        <i class='icon-emoji' @click='faceOpen = true' title='表情'></i>
        <div class="face-box" v-if='faceOpen'>
            <img :src="`//cnstatic01.e.vhall.com/static/img/arclist/Expression_${index+1}@2x.png`" @click.stop="inFace(index)" v-for="(item,index) in faceArr" :key="index">
        </div>
        <div class="fr">
          <i class='icon-swap' title='切换发送聊天/公告' @click='swapAnnounce ? swapAnnounce = false : swapAnnounce = true'></i>
          <i class='mute-all' @click='muteAll' title='全体禁言'></i>
        </div>
      </div>
      <div class="bottom">
        <template v-if='swapAnnounce'>
          <template v-if='mute || allMuted'>
            <div class='mute-box'>{{allMuted ? '已开启全体禁言' : '您已被禁言'}}</div>
          </template>
          <template v-else>
            <textarea name="" class='inp' v-model.sync="value" @keydown.prevent.13='sendAction' :placeholder="chatPlaceholder"></textarea>
            <span @click='sendAction' class='send-btn'>发送</span>
          </template>
        </template>
        <template v-else>
          <textarea name="" class='inp' v-model.sync="valueAnnounce" @keydown.prevent.13='sendAnnounce' :placeholder="announcePlaceholder"></textarea>
          <span @click='sendAnnounce' class='send-btn'>发送</span>
        </template>
      </div>
    </div>
    <div class='send-box not-login' v-else>
      需要登录才能参与聊天 <span @click='loginHandler'>登录</span>
    </div>

  </div>
</template>

<script>
import LiveHttp from 'src/api/Live-manage.js'
import ChatService from './ChatService.js'
import { mapMutations, mapState } from 'vuex'
import * as types from 'src/store/mutation-types'
import authManage from 'src/api/auth-manage'
import BScroll from 'better-scroll'
export default {
  inject: ['chat/getHistroychat'],
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
      chatPlaceholder: '请输入聊天内容',
      announcePlaceholder: '请输入公告内容',
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
      default: 'LIVE'
    },
    isWatch: { // 是否是观看端
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState('liveMager', {
      roomPaas: state => state.roomPaas,
      liveInfo: state => state.liveInfo, // 活动信息
      joinInfo: state => state.joinInfo // 参会信息
    }),
    ...mapState('login', {
      loginInfo: (state) => state.loginInfo
    })
  },
  mounted () {
    // 拉取最近聊天纪律
    this.getHistroy()

    // this.initSdk()

    // this.service.regHandler('BEGIN_LIVE', this.listenAnnounce)
    // this.service.regHandler('FINISH_LIVE', this.listenAnnounce)
    // this.service.regHandler('INCREMENT_ONLINE', this.listenIncrease)
  },
  methods: {
    ...mapMutations('liveMager', {
      storeJoinInfo: types.JOIN_INFO
    }),
    initSdk () {
      this.service = new ChatService()
      let obj = { channelId: this.roomPaas.channelRoom }
      Object.assign(this.roomPaas, obj)
      this.service.init(this.roomPaas)

      this.service.regHandler('chat', this.listenChat)
      this.service.regHandler('ANNOUNCEMENT', this.listenAnnounce)
      this.service.regHandler('KICK', this.listenKick)
      this.service.regHandler('DISABLE_KICK', this.listenCancelkick)
      this.service.regHandler('GAG', this.listenMute)
      this.service.regHandler('DISABLE_GAG', this.listenCancelmute)
      this.service.regHandler('GAG_ALL', this.listenAllmute)
      this.service.regHandler('DISABLE_GAG_ALL', this.listenCancelallmute)
    },
    sendAction () {
      if (!this.value.replace(/\n/g, '').length) {
        this.chatPlaceholder = '聊天内容不能为空'
        return false
      }
      const role = this.joinInfo.roleName === 'HOST' ? '主持人' : '' // 主持人发送
      this.service.activityId = this.activityId
      const obj = {
        // avatar: this.joinInfo.avatar, // 头像
        role: role, // 角色
        txt: this.value // 输入内容
      }
      this.service.sendChat(JSON.stringify(obj))
      this.value = ''
      this.chatPlaceholder = '请输入聊天内容'
      this.faceOpen = false
    },
    sendCustom () {
      // 调用接口 发公告
    },
    handleKicked (flag, id) {
      const data = {
        activityId: this.activityId,
        userId: id,
        cancel: flag ? 'Y' : 'N' // 取消
      }
      LiveHttp.kickMember(data).then((res) => {
        // console.log(res)
        if (res.code === 200) {
          this.$toast({
            content: flag ? '允许参会成功' : '踢出成功'
          })
        }
      })
    },
    handleMuted (flag, id) {
      const data = {
        activityId: this.activityId,
        userId: id,
        cancel: flag ? 'Y' : 'N' // 取消
      }
      LiveHttp.muteMember(data).then((res) => {
        // console.log(res)
        if (res.code === 200) {
          this.$toast({
            content: flag ? '取消禁言成功' : '禁言成功'
          })
        }
      })
    },
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
      if (!this.isWatch) {
        this.announceShow = true
        this.receiveAnnounce = msg.content
      }
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
        alert('您已被踢出')
      }
    },
    listenCancelkick (msg) {
      console.log('接收 取消踢出消息' + msg)
      this.refreshList(msg.activityUserId, 'isKick', 'N')
      // if (this.isSelf(msg.activityUserId)) {

      // }
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
    // isSelf (id) {
    //   if (this.joinInfo.activityUserId === id) {
    //     return true
    //   } else {
    //     return false
    //   }
    // },
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
      for (let i = 0; i < this.faceArr.length; i++) {
        for (let key in this.faceArr[i]) {
          let test = key.replace(/\[/, '\\[').replace(/\]/, '\\]')
          let reg = new RegExp(test, 'g')
          obj.detail.txt = obj.detail.txt.replace(
            reg,
            "<img src='//cnstatic01.e.vhall.com/static/img/arclist/Expression_" +
                this.faceArr[i][key] +
                "@2x.png'>"
          )
        }
      }

      this.chatData.push(obj)
      if (!this.tipsShow) {
        const _that = this
        setTimeout(function () {
          _that.scrollBtm()
        }, 200)
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
      LiveHttp.sendAnn(data).then((res) => {
        this.$toast({
          'content': '公告发送成功'
        })
        this.valueAnnounce = ''
        this.announcePlaceholder = '请输入公告内容'
      })
    },
    scrollBtm () {
      const _that = this
      _that.aBScroll.scrollTo(0, _that.aBScroll.maxScrollY, 500, 'bounce')
      setTimeout(() => {
        _that.tipsCount = 0
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
      this['chat/getHistroychat'](this.activityId).then((res) => {
        res.data.reverse().forEach(item => {
          this.reArrange(item)
        })
      })
    },
    muteAll () {
      const data = {
        'activityId': this.activityId,
        'cancel': this.allMuted ? 'Y' : 'N'
      }
      LiveHttp.muteAll(data).then((res) => {
        if (res.code === 200) {
          this.$toast({
            content: data.cancel === 'Y' ? '已取消全体禁言' : '已开启全体禁言'
          })
        }
      })
    },
    /* 初始化，获取权限 */
    initToken () {
      return LiveHttp.getLiveTtoken(this.activityId)
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
      this.isLogin = true
      // joininfo是否有
      if (this.joinInfo) {
        this.initSdk()
        this.initScroll()
      } else {
        // 初始才会权限
        await this.initToken()
        /* 获取参会信息 */
        authManage.getMasterInfo().then((res) => {
          // 存储到vuex
          this.storeJoinInfo(res.data)
          this.initSdk()
          this.initScroll()
        })
      }
    },
    loginHandler () {
      this.$emit('showLogin')
    }
  },
  watch: {
    liveInfo: {
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
    loginInfo: {
      handler () {
        this.initInfo()
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style lang='scss' scoped src="./chat.scss">
</style>
