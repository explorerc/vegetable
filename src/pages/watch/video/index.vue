<template>
  <div class="play-container">
    <div class="play-video-box"
         :id="playBoxId"
         v-if="playType=='pre'">
      <img v-if="imageSrc"
           :src="imageSrc">
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
      <img v-if="imageSrc"
           :src="imageSrc">
    </div>
    <div class="play-video-box"
         :id="playBoxId"
         v-else>
      <img v-if="imageSrc"
           :src="imageSrc">
    </div>
    <i class="iconfont icon-bofang"
       v-if="playBtnShow"
       @click="playVideo"></i>
    <div class="v-click-modal"
         @click="modalClick"></div>
    <div class="control-box-div">
      <div class="control-video-box"
           v-if="(playType=='vod'&&!outLineLink) || playType=='warm' || playType=='vod'">
        <video-control :currentTime="currentTime"
                       :totalTime="totalTime"
                       :qualitys="qualitys"
                       ref="mychild"
                       @control="playControl"></video-control>
      </div>
    </div>

    <img v-if="imageSrc && !isPlay && (playType=='live' || playType=='warm')"
         :src="imageSrc"
         class="v-mark"
         @click="startPlay">
  </div>
</template>

<script>
import LivePuller from 'src/components/common/video/pull/LivePuller'
import { mapMutations, mapState } from 'vuex'
import VideoControl from './control'
import * as types from '../../../store/mutation-types'
import activityService from 'src/api/activity-service'
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
      qualitys: [] // 视频质量
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
      return this.imageUrl ? `${this.$imgHost}/${this.imageUrl}` : '//cnstatic01.e.vhall.com/static/img/v35-webinar.png'
    }
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
    },
    playVideo () {
      if (this.playType === 'warm') { // 暖场
        this.playBackVideo()
      }
    },
    startPlay () {
      this.isPlay = !this.isPlay
      window.VhallPlayer.play()
      this.dealWithVideo()
    },
    /* 改变直播使用设备 */
    changeLiveDevice () {
      if (window.hostPusher) {
        window.hostPusher.changeSetting({
          video: {
            deviceId: this.liveDevices.camera
          },
          audio: {
            deviceId: this.liveDevices.mic
          },
          conf: {
            videoSize: [800, 450, 800, 450]
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
            'x5-video-orientation': 'portrait',
            'x5-video-player-fullscreen': false
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
                document.getElementsByClassName('vjs-tech')[0].style['object-position'] = '0 0'
                document.getElementsByClassName('vjs-tech')[0].addEventListener('x5videoexitfullscreen', function () {
                  document.getElementsByClassName('icon-zanting_icon')[0].click()
                })
              } else {
                document.getElementsByClassName('vjs-tech')[0].style['height'] = '56.267vw'
              }
              // window.VhallPlayer.play()
              // this.dealWithVideo()
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
      this.setIntervalHandler = setInterval(() => {
        this.currentTime = window.VhallPlayer.getCurrentTime()
        if (this.totalTime <= this.currentTime) {
          clearInterval(this.setIntervalHandler)
          if (this.isAutoPlay) {
            window.VhallPlayer.play()
            this.dealWithVideo()
          } else {
            this.isPlay = false
            if (window.VhallPlayer) window.VhallPlayer.destroy()
          }
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
          if (this.isX5()) {
            document.getElementsByClassName('vjs-tech')[0].style['object-position'] = '0 0'
            document.getElementsByClassName('vjs-tech')[0].addEventListener('x5videoexitfullscreen', function () {
              document.getElementsByClassName('icon-zanting_icon')[0].click()
            })
          } else {
            document.getElementsByClassName('vjs-tech')[0].style['height'] = '56.267vw'
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
      if (!isiOS && (u.match(/MicroMessenger/i) === 'micromessenger' || u.match(/QQ/i) === 'qq')) {
        return true
      }
      return false
    }
  }
}
</script>

<style scoped lang="scss">
.play-container /deep/ {
  position: relative;
  height: 100%;
  .play-video-box {
    height: 100%;
    overflow: hidden;
    background-color: #313131;
    img {
      width: 100%;
      height: 422px;
    }
    .vjs-big-play-button {
      display: none;
    }
    .end-box {
      position: absolute;
      display: block;
      color: red;
      text-align: center;
      width: 100%;
      top: 46%;
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
    top: 0;
    left: 0;
    width: 100%;
    height: 422px;
    z-index: 2;
  }
  .control-box-div {
    position: absolute;
    left: 0;
    top: 342px;
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
    top: 0;
    left: 0;
    width: 100%;
    height: 422px;
    z-index: 3;
  }
}
</style>
