<template>
  <div class="play-container">
    <div class="play-video-box" :id="playBoxId" v-if="playType=='live'"></div>
    <div class="play-video-box" :id="playBoxId" v-else-if="playType=='vod'">
      <div v-html="this.outLineLink" style="width:100%;height: 100%;"></div>
    </div>
    <div class="play-video-box" :id="playBoxId" v-else>
      <img v-if="imageSrc" :src="imageSrc">
    </div>
    <i class="iconfont icon-bofang" v-if="playBtnShow" @click="playVideo"></i>
    <div class="control-box">
      <a href="javascript:;" @click="play" class="v-play" :style="{'bottom':controlPsoition}"> <span v-if="isPlay">暂停</span><span v-else>播放</span></a>
      <el-slider v-model="playPosition" @change="sliderChange($event)" v-if="playType=='vod'" :style="{'bottom':controlPsoition}"></el-slider>
      <a href="javascript:;" @click="fullScreen" class="v-fullScreen" :style="{'bottom':controlPsoition}">全屏</a>
    </div>
  </div>
</template>

<script>
  import VideoHttp from 'src/api/video-manage'
  import LivePuller from 'src/components/common/video/pull/LivePuller'
  // import HostPusher from 'src/components/common/video/push/HostPusher'

  export default {
    name: 'index',
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
        paasParams: {
          appId: '',
          roomId: '',
          inavId: '',
          token: '',
          accountId: ''
        },
        videoDuration: 100000,
        currentTime: 0,
        playPosition: 0,
        stInterval: '',
        isPlay: false,
        controlPsoition: '1.333vw'
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
      }
    },
    computed: {
      imageSrc () {
        return `${this.$imgHost}/${this.imageUrl}`
      }
    },
    mounted () {
      let that = this
      window.addEventListener(
        'onorientationchange' in window ? 'orientationchange' : 'resize',
        function () {
          if (window.orientation === 90 || window.orientation === -90) {
          // 想把下面的alert换成能够控制v-show的代码
            that.horizontalScreen() // 横屏

          // alert("123");仅alert纯文本可以正常运行
          } else {
            that.herticalScreen() // 竖屏
          }
        // window.location.reload();
        },
        false
      )
    },
    watch: {
      startInit (newVal) {
        if (newVal) {
          this.initComponent()
        }
      },
      playPosition (newVal) {
        if (newVal === 100) {
          this.isPlay = false
        }
      }
    },
    methods: {
      /* 初始组件 */
      initComponent () {
        if (this.playType === 'live') { // 直播
          this.initLivePlay()
        } else if (this.playType === 'warm') { // 暖场
          this.queryWarmInfo()
        } else if (this.playType === 'vod') { // 回放
          this.initPlayBack()
        }
      },
      playVideo () {
        if (this.playType === 'warm') { // 暖场
          this.playBackVideo()
        }
      },
      /* 初始化直播 */
      initLivePlay () {
        let data = {
          'activityId': this.$route.params.id
        }
        VideoHttp.getActivityUserId(data).then((res) => {
          let dataGetToken = {
            'activityId': this.$route.params.id,
            'activityUserId': res.data.activityUserId
          }
          VideoHttp.getSdkToken(dataGetToken).then((res) => {
            this.paasParams = {
              appId: res.data.appId,
              roomId: res.data.liveRoom,
              inavId: res.data.hdRoom, // 互动id
              token: res.data.token,
              accountId: res.data.accountId
            }
            if (this.role === 'watcher') { // 观看端
              this.initPuller()
            }
          })
        })
      },
      initPlayBack () {
        VideoHttp.queryPlayBackInfoById(this.$route.params.id).then(res => {
          if (!(res.code === 200 && res.data)) return
          this.imageUrl = res.data.cover
          if (res.data.replay.type === 'LINK') { // 外链
            this.outLineLink = res.data.replay.link
          } else if (res.data.replay.type === 'VIDEO') { // 回放视频
            this.recordId = res.data.replay.video
            this.videoDuration = res.data.replay.duration
            this.playBackVideo()
          }
        })
      },
      /* 播放暖场视频 */
      playBackVideo () {
        let data = {
          'activityId': this.$route.params.id
        }
        VideoHttp.getActivityUserId(data).then((res) => {
          let dataGetToken = {
            'activityId': this.$route.params.id,
            'activityUserId': res.data.activityUserId
          }
          VideoHttp.getSdkToken(dataGetToken).then((res) => {
            this.sdkPlayParam.appId = res.data.appId
            this.sdkPlayParam.accountId = res.data.accountId
            this.sdkPlayParam.token = res.data.token
            this.$nextTick(() => {
              if (!this.recordId) return
              window.Vhall.ready(() => {
                window.VhallPlayer.init({
                  recordId: this.recordId,
                  type: 'vod',
                  videoNode: this.playBoxId,
                  complete: () => {
                    this.playBtnShow = false
                    // document.getElementsByClassName('vjs-tech')[0].setAttribute('muted', true)
                    // document.getElementsByClassName('vjs-tech')[0].setAttribute('autoplay', true)
                    // document.getElementsByClassName('vjs-tech')[0].play()
                    if (this.stInterval) {
                      clearInterval(this.stInterval)
                    }
                    this.stInterval = setInterval(() => {
                      this.playPosition = window.VhallPlayer.getCurrentTime() * 100 / this.videoDuration
                    }, 300)
                  }
                })
              })
              /* 初始化配置 */
              window.Vhall.config({
                appId: this.sdkPlayParam.appId, // 应用 ID ,必填
                accountId: this.sdkPlayParam.accountId, // 第三方用户唯一标识,必填
                token: this.sdkPlayParam.token // token必填
              })
            })
          })
        })
      },
      queryWarmInfo () {
        VideoHttp.queryWarmInfoById(this.$route.params.id).then((res) => {
          this.imageUrl = res.data.imgUrl
          this.recordId = res.data.recordId
          this.playBtnShow = true
        })
      },
      /* 初始拉流播放插件 */
      initPuller () {
        this.$nextTick(() => {
          this.playComps = new LivePuller(this.paasParams.appId, this.paasParams.roomId, this.playBoxId, this.paasParams.token)
          this.playComps.initLivePlayer(true, () => {
            console.log('----------开始播放----------')
          })
          this.playComps.accountId = this.paasParams.accountId
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
      formatTooltip (val) {
        return val / 100
      },
      fullScreen () {
        alert('请把手机横评放置')
      },
      horizontalScreen () {
        this.isShowCover = false
        this.height = '100%'
        this.controlPsoition = '9.333vw'
      },
      herticalScreen () {
        this.isShowCover = true
        this.height = '56.267vw'
        this.controlPsoition = '1.333vw'
      },
      start () {
        this.isStart = true
        this.puller.play()
      },
      sliderChange (val) {
        // console.log(val)
        window.VhallPlayer.seek(val / 100 * this.videoDuration)
        this.currentTime = val
        window.VhallPlayer.play()
        this.isPlay = true
      },
      play () {
        if (this.isPlay) {
          window.VhallPlayer.pause()
        } else {
          window.VhallPlayer.play()
        }
        this.isPlay = !this.isPlay
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
      height: 100%;
    }
    .vjs-big-play-button {
      display: none;
    }
  }
  .icon-bofang {
    display: block;
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
  .control-box {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
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
}
</style>
