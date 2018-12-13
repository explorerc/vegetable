<template>
  <div class="play-container">
    <div class="play-video-box"
         :id="playBoxId"
         v-if="playType=='pre'">
      <img v-if="imageSrc"
           :src="imageSrc"
           class="v-mark-img">
    </div>
    <div class="play-video-box"
         :id="playBoxId"
         v-else-if="playType=='live'"></div>
    <div class="play-video-box"
         :id="playBoxId"
         v-else-if="playType=='vod'">
      <div v-html="this.outLineLink"
           style="width:100%;height: 100%;"></div>
    </div>
    <div class="play-video-box"
         :id="playBoxId"
         v-else-if="playType=='end'">
      <span class="end-box"
            v-if="role!=='master'">
        <img :src="require('assets/image/watch_liveEnd@2x.png')"
             alt="">
        <p>直播已结束，感谢观看</p>
      </span>
    </div>
    <div class="play-video-box"
         :id="playBoxId"
         v-else>
      <img v-if="imageSrc"
           :src="imageSrc"
           class="v-mark-img">
    </div>
    <i class="iconfont icon-bofang"
       v-if="playBtnShow"
       @click="playVideo"></i>
    <div class="v-click-modal"
         @click="modalClick"
         v-if="(playType=='vod'&&!outLineLink) || playType=='warm' || (playType=='live'&&role=='watcher')">
      <span class="end-box default-auto-box" v-if="isAuto">
        <i class="iconfont icon-yinpin"></i>
      </span>
    </div>
    <div class="control-box-div">
      <div class="control-video-box"
           v-if="(playType=='vod'&&!outLineLink) || playType=='warm' || (playType=='live'&&role=='watcher')">
        <video-control :currentTime="currentTime"
                       :totalTime="totalTime"
                       :qualitys="qualitys"
                       :playType="playType"
                       :playState="isPlayState"
                       ref="mychild"
                       :currentQuality="currentQuality"
                       @control="playControl"></video-control>
      </div>
    </div>

    <div v-if="!isPlay && (playType=='vod'||playType=='live' || playType=='warm')"
         class="v-mark"
         @click="startPlay">
      <div class="image-bg"
           v-if="imageSrc"
           :style="{backgroundImage:`url(${imageSrc})`}"></div>
      <i class="iconfont icon-bofang_anniu"></i>
    </div>
  </div>
</template>

<script>
import LivePuller from 'src/components/common/video/pull/LivePuller'
import { mapMutations, mapState } from 'vuex'
import VideoControl from './control'
import * as types from '../../../store/mutation-types'
import activityService from 'src/api/activity-service'
import EventBus from 'src/utils/eventBus'
// import HostPusher from 'src/components/common/video/push/HostPusher'

export default {
  name: 'index',
  components: { VideoControl },
  data () {
    return {
      playComps: {},
      playBtnShow: false,
      imageUrl: '',
      recordId: '', // 视频id
      outLineLink: '', // 外链
      playBoxId: `play-vides-${Math.random()}`,
      sdkPlayParam: {
        appId: '',
        accountId: '',
        token: ''
      },
      currentTime: 0,
      totalTime: 10000,
      stInterval: '',
      isPlay: false,
      isAutoPlay: false,
      controlPsoition: '1.333vw',
      qualitys: [], // 视频质量
      currentQuality: '',
      isPlayState: false,
      isAuto: false // 是否是音频
    }
  },
  props: {
    role: {
      type: String,
      default: 'watcher' // 发起端(master), 观看(watcher)
    },
    playType: {
      type: String,
      required: true,
      default: '' // 直播(live), 回放(vod), 暖场(warm)
    },
    startInit: {
      type: Boolean,
      required: true,
      default: false
    },
    paasParams: {
      appId: '',
      roomId: '',
      inavId: '',
      token: '',
      accountId: ''
    }
  },
  computed: {
    ...mapState('liveMager', {
      liveDevices: state => state.liveDevices,
      roomPaas: state => state.roomPaas,
      activityInfo: state => state.activityInfo
    }),
    imageSrc () {
      return this.imageUrl ? `${this.$imgHost}/${this.imageUrl}` : `${process.env.PUBLIC_PATH}${process.env.SUB_DIR}/img/default-zhike.jpg`
    }
  },
  created () {
    EventBus.$on('exitFullScreen', () => {
      this.isPlay = false
    })
  },
  mounted () {
    let that = this
    window.addEventListener(
      'onorientationchange' in window ? 'orientationchange' : 'resize',
      function () {
        if (window.orientation === 90 || window.orientation === -90) {
          // 想把下面的alert换成能够控制v-show的代码
          that.$emit('orientationchange', 'horizontalScreen')
          that.horizontalScreen() // 横屏

          // alert("123");仅alert纯文本可以正常运行
        } else {
          that.herticalScreen() // 竖屏
          that.$emit('orientationchange', 'herticalScreen')
        }
        // window.location.reload();
      },
      false
    )
  },
  watch: {
    startInit (newVal) {
      if (!newVal) {
        this.stopPlay()
      }
    },
    playType: {
      handler () {
        this.changePlayType()
      }
    },
    liveDevices () {
      this.changeLiveDevice()
    }
  },
  beforeDestroy () {
    console.log('--video-com--beforeDestroy')
    clearInterval(this.setIntervalHandler)
    // 发起端直播
    if (window.hostPusher) window.hostPusher.destroy()
    // 观看端直播
    if (window.playComps) window.playComps.destroy()
    // 回放和暖场视频
    if (window.VhallPlayer) window.VhallPlayer.destroy()
  },
  methods: {
    ...mapMutations('liveMager', {
      storeRoomPaas: types.ROOM_PAAS
    }),
    /* 初始组件 */
    initComponent () {
      this.isPlay = false
      this.destoryComs()
      if (this.playType === 'live') { // 直播
        this.initLivePlay()
      } else if (this.playType === 'pre') {
        this.imageUrl = this.activityInfo.imgUrl
      } else if (this.playType === 'warm') { // 暖场
        this.queryWarmInfo()
      } else if (this.playType === 'vod') { // 回放
        this.initPlayBack()
      } else if (this.playType === 'end') { // 结束
        this.playEnd()
      }
    },
    /* 改版播放类型 */
    changePlayType () {
      if (!this.startInit) return
      if ('live|warm|vod|end|pre'.indexOf(this.playType) !== -1) {
        this.isAutoPlay = false
        this.destoryComs()
        this.initComponent()
      }
    },
    playEnd () {
      clearInterval(this.setIntervalHandler)
      // 发起端直播
      if (window.hostPusher) window.hostPusher.destroy()
      // 观看端直播
      if (window.playComps) window.playComps.destroy()
      // 回放和暖场视频
      if (window.VhallPlayer) window.VhallPlayer.destroy()
    },
    playVideo () {
      if (this.playType === 'warm') { // 暖场
        this.playBackVideo()
      }
    },
    startPlay () {
      const warm = this.activityInfo.warm
      if (this.playType === 'warm' && warm.record.list.length <= 0) { /* 未上传视频或者未转码完成 */
        this.$messageBox({
          header: '提示',
          content: '此时没有暖场视频',
          confirmText: '确定',
          handleClick: (e) => {
            if (e.action === 'cancel') {
            } else if (e.action === 'confirm') {
            }
          }
        })
        return
      }
      this.isPlay = !this.isPlay
      this.imageUrl = ''
      this.qualitys = window.VhallPlayer.getQualitys()
      window.VhallPlayer.play()
      if (this.playType !== 'live') {
        this.dealWithVideo()
      }
    },
    /* 改变直播使用设备 */
    changeLiveDevice () {
      if (window.hostPusher) {
        window.hostPusher.changeSetting({
          conf: {
            video: {
              deviceId: this.liveDevices.camera
            },
            audio: {
              deviceId: this.liveDevices.mic
            },
            videoSize: [640, 480, 640, 480]
          }
        })
      }
    },
    /* 初始化直播 */
    initLivePlay () {
      if (this.role === 'watcher') { // 观看端
        this.initPuller()
      }
    },
    initPlayBack () {
      this.$config({ handlers: true }).$get(activityService.GET_DEFAULEREPLAY, {
        activityId: this.$route.params.id
      }).then((res) => {
        if (res.data) {
          this.imageUrl = res.data.cover
          if (res.data.replay.type === 'LINK') { // 外链
            this.outLineLink = res.data.replay.link
          } else if (res.data.replay.type === 'VIDEO' || res.data.replay.type === 'SLICE') { // 回放视频
            this.recordId = res.data.replay.video
            this.totalTime = res.data.replay.duration
            this.playBackVideo()
          }
        }
      }).catch(() => {
      })
    },
    /* 播放暖场视频 */
    playBackVideo () {
      this.$nextTick(() => {
        if (!this.recordId) return
        let _videoAttr = {}
        if (this.isX5()) {
          _videoAttr = {
            'x5-video-player-type': 'h5',
            'x5-video-orientation': 'landscape|portrait',
            'x5-video-player-fullscreen': true
          }
        }
        window.Vhall.ready(() => {
          window.VhallPlayer.init({
            recordId: this.recordId,
            type: 'vod',
            videoNode: this.playBoxId,
            videoAttr: _videoAttr,
            complete: () => {
              this.playBtnShow = false
              this.qualitys = window.VhallPlayer.getQualitys()
              if (this.isX5()) {
                document.getElementsByClassName('vjs-tech')[0].addEventListener('x5videoexitfullscreen', () => {
                  this.changeX5ExitFullScreen()
                })
                document.getElementsByClassName('vjs-tech')[0].addEventListener('x5videoenterfullscreen', () => {
                  this.changeX5EnterFullScreen()
                })
              } else {
                document.getElementsByClassName('vjs-tech')[0].style['height'] = '56.267vw'
                document.getElementsByClassName('vjs-tech')[0].style['margin-top'] = '18.667vw'
              }
              // window.VhallPlayer.play()
              // this.dealWithVideo()
            },
            end: () => {
              EventBus.$emit('play_back_video_completed')
            }
          })
        })
        /* 初始化配置 */
        window.Vhall.config({
          appId: this.roomPaas.appId, // 应用 ID ,必填
          accountId: this.roomPaas.accountId, // 第三方用户唯一标识,必填
          token: this.roomPaas.token // token必填
        })
      })
    },
    dealWithVideo () {
      clearInterval(this.setIntervalHandler)
      let _this = this
      _this.setIntervalHandler = setInterval(() => {
        _this.currentTime = window.VhallPlayer.getCurrentTime()
        if (_this.totalTime <= _this.currentTime) {
          clearInterval(_this.setIntervalHandler)
          if (_this.isAutoPlay) {
            window.VhallPlayer.play()
            _this.dealWithVideo()
          } else {
            _this.isPlay = false
            _this.currentTime = 0
            // if (window.VhallPlayer) window.VhallPlayer.destroy()
          }
        }
        if (_this.playType !== 'live' && window.VhallPlayer.getCurrentQuality) {
          _this.currentQuality = window.VhallPlayer.getCurrentQuality()
        }
      }, 1000)
    },
    queryWarmInfo () {
      const warm = this.activityInfo.warm
      this.imageUrl = warm.imgUrl
      this.playBtnShow = true
      this.filename = warm.filename
      this.recordId = warm.recordId
      this.isAutoPlay = warm.playType === 'AUTO'
      this.isPlayState = this.isAutoPlay
      this.totalTime = parseInt(warm.record.duration)
      this.playBackVideo()
    },
    /* 初始拉流播放插件 */
    initPuller () {
      if (window.playComps) {
        window.playComps.destroy()
      }
      this.$nextTick(() => {
        this.playComps = new LivePuller(this.roomPaas.appId, this.roomPaas.liveRoom, this.playBoxId, this.roomPaas.token)
        this.playComps.initLivePlayer(false, true, () => {
          document.querySelector('.vjs-tech').addEventListener('pause', () => {
            this.isPlay = false
          })
          if (this.isX5()) {
            document.getElementsByClassName('vjs-tech')[0].addEventListener('x5videoexitfullscreen', () => {
              this.changeX5ExitFullScreen()
            })
            document.getElementsByClassName('vjs-tech')[0].addEventListener('x5videoenterfullscreen', () => {
              this.changeX5EnterFullScreen()
            })
          } else {
            document.getElementsByClassName('vjs-tech')[0].style['height'] = '56.267vw'
            document.getElementsByClassName('vjs-tech')[0].style['margin-top'] = '18.667vw'
          }
          console.log('----------开始播放----------')
        })
        this.playComps.accountId = this.roomPaas.accountId
      })
    },
    pullBroadCast () {
      this.hostPusher.stopBroadCast().then(() => {
        this.hostPusher.startBroadCast().then(() => {
          console.log('----------旁路推流成功----------')
        }).catch(error => {
          console.error(`旁路推流失败:${error}`)
          // 旁路推流失败,延迟递归继续旁路推流
          let st = setTimeout(() => {
            clearTimeout(st)
            this.pullBroadCast()
          }, 500)
        })
      }).catch(error => {
        console.error(`停止旁路推流失败:${error}`)
      })
    },
    stopPlay () {
      if (this.playType === 'live') { // 直播
        window.hostPusher.stop()
      }
    },
    /* 开启，关闭 视频 */
    showVideo (e) {
      this.isShowVideo = e
      if (this.playType === 'live') { // 直播
        if (this.role === 'master') { // 主持人互动端
          window.hostPusher.showVideo(e)
        } else if (this.role === 'watcher') { // 观看端
          window.playComps.showVideo(e)
        }
      } else if (this.playType === 'warm') { // 暖场
      } else if (this.playType === 'vod') { // 回放
      }
    },
    /* 开启，禁止声音 */
    mutoAuto (e) {
      this.isMutoAuto = e
      if (this.playType === 'live') { // 直播
        if (this.role === 'master') { // 主持人互动端
          window.hostPusher.mute(e)
        } else if (this.role === 'watcher') { // 观看端
          window.playComps.volume = e ? 0 : 50
        }
      } else if (this.playType === 'warm') { // 暖场
      } else if (this.playType === 'vod') { // 回放
      }
    },
    formatTooltip (val) {
      return val / 10000
    },
    formatTime (val) {
      let showTime = {
        hour: '',
        min: '',
        sed: ''
      }
      showTime.hour = ((val / 3600 % 24 >> 0) + '').padStart(2, 0)
      showTime.min = ((val / 60 % 60 >> 0) + '').padStart(2, 0)
      showTime.sed = ((val % 60 >> 0) + '').padStart(2, 0)
      return `${showTime.hour}:${showTime.min}:${showTime.sed}`
    },
    fullScreen () {
      alert('请把手机横评放置')
    },
    horizontalScreen () {
      // 横屏
      this.isShowCover = false
      this.height = '100%'
      this.controlPsoition = '9.333vw'
    },
    herticalScreen () {
      // 竖屏
      this.isShowCover = true
      this.height = '56.267vw'
      this.controlPsoition = '1.333vw'
    },
    start () {
      this.isStart = true
      this.puller.play()
    },
    /* 开启，禁止声音 */
    play (e) {
      if (this.playType === 'warm' || this.playType === 'vod') { // 暖场，回放
        if (e) {
          window.VhallPlayer.play()
        } else {
          window.VhallPlayer.pause()
        }
      }
    },
    playControl (e) {
      const controlType = e.type
      if (controlType === 'progress') { // seek播放进度
        this.seekProgress(e.value)
      } else if (controlType === 'play') { // 播放控制
        this.play(e.value)
      } else if (controlType === 'mute') { // 是否禁音
        this.mutoAuto(e.value)
      } else if (controlType === 'volumeSize') { // 声音大小
        this.changeVolume(e.value)
      } else if (controlType === 'selectQuality') { // 画面质量
        this.isAuto = (e.value === 'a' || false)
        window.VhallPlayer.setQuality(e.value)
      } else if (controlType === 'fullScree') { // 全屏控制
        this.fullScree(e.value)
      } else if (controlType === 'fullBrowser') { // 浏览器全屏
        this.$emit('fullBrowser', e.value)
      }
    },
    seekProgress (progress) {
      if (window.VhallPlayer) {
        window.VhallPlayer.seek(this.totalTime * progress / 100)
      }
    },
    destoryComs () {
      clearInterval(this.setIntervalHandler)
      // 发起端直播
      if (window.hostPusher) window.hostPusher.destroy()
      // 观看端直播
      if (window.playComps) window.playComps.destroy()
      // 回放和暖场视频
      if (window.VhallPlayer) window.VhallPlayer.destroy()
    },
    modalClick () {
      this.$refs.mychild.changeControlStatus()
    },
    isX5 () {
      let u = navigator.userAgent
      let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
      if (!isiOS && (u.match(/MicroMessenger/i) || u.match(/QQ/i))) {
        return true
      }
      return false
    },
    changeX5EnterFullScreen () {
      EventBus.$emit('enterFullScreen', () => {
      })
    },
    changeX5ExitFullScreen () {
      EventBus.$emit('exitFullScreen', () => {
      })
    }
  }
}
</script>

<style scoped lang="scss">
.play-container /deep/ {
  position: relative;
  height: 100%;
  .end-box {
    position: absolute;
    display: block;
    color: #999999;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    p {
      margin-top: 20px;
      line-height: 24px;
    }
  }
  .default-auto-box{
    border: solid 2px #fff;
    border-radius: 50%;
    padding: 10px;
    width: 100px;
    height: 100px;
    line-height: 66px;
    text-align: center;
    background-color: rgba(0,0,0,.3);
    .icon-yinpin{
      color: #fff;
      font-size: 50px;
    }
  }
  .play-video-box {
    height: 100%;
    overflow: hidden;
    background-color: #313131;
    img {
      width: 100%;
      height: 422px;
      margin-top: 80px;
    }
    .vjs-big-play-button {
      display: none;
    }
    .end-box {
      position: absolute;
      display: block;
      color: #999999;
      text-align: center;
      top: 280px;
      left: 50%;
      transform: translate(-50%, -50%);
      img {
        width: 150px;
        height: 150px;
      }
      p {
        margin-top: 20px;
        line-height: 24px;
      }
    }
  }
  .icon-bofang {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    color: red;
    font-size: 60px;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
  .v-click-modal {
    position: absolute;
    top: 140px;
    left: 0;
    width: 100%;
    height: 422px;
    z-index: 2;
  }
  .control-box-div {
    position: absolute;
    left: 0;
    top: 482px;
    height: 80px;
    line-height: 80px;
    // background-color: rgba(0, 0, 0, 0.75);
    z-index: 3;
    width: 100%;
    // font-size: 14px;
    .el-slider {
      position: absolute;
      bottom: 0;
      left: 100px;
      z-index: 3;
      width: 500px;
      .el-slider__runway {
        margin: 16px 0;
      }
    }
    .v-fullScreen {
      position: absolute;
      bottom: 10px;
      right: 50px;
      z-index: 3;
      color: #fff;
    }
    .v-play {
      position: absolute;
      bottom: 10px;
      left: 10px;
      z-index: 3;
      color: #fff;
    }
  }

  .vjs-control-bar {
    display: none;
  }
  .v-mark {
    position: absolute;
    background-color: #222;
    top: 140px;
    left: 0;
    width: 100%;
    height: 422px;
    z-index: 3;
    text-align: center;
    .image-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      background-color: #fff;
    }
    i {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -65px;
      margin-left: -65px;
      width: 130px;
      height: 130px;
      text-align: center;
      padding-left: 8px;
      border-radius: 50%;
      background-color: #000;
      line-height: 130px;
      font-size: 75px;
      color: #fff;
    }
  }
}
</style>
