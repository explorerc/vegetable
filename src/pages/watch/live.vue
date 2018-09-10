<template>
  <div class="v-video">
    <div class="v-text">
      6666666
    </div>
    <video id="myVideo" src="../../assets/image/activity3.mp4" x5-video-player-type="h5" playsinline x5-video-player-fullscreen="false" x5-video-orientation="landscape|portrait" controls style="object-position: 0px 0px;"></video>
    <p>
      adfdsaffffffffffffffffffffffffffffffffasdfdasf
    </p>
  </div>
</template>
<script>
import LivePuller from '../../components/common/video/pull/LivePuller'
export default {
  data () {
    return {
      event: {
        type: 'guide' // guide是报名活动 normal是无限制活动
      }
    }
  },
  mounted () {
    this.init()
  },
  components: {
  },
  created () {
    let appId = '499279ae'
    let roomId = 'lss_5b3c9d9d'
    let rootEleId = 'my-pusher'
    let token = 'access:499279ae:885ba973a5d6ad10'
    rootEleId = 'my-puller'
    this.puller = new LivePuller(appId, roomId, rootEleId, token)
    this.puller.initLivePlayer(true)
    this.puller.accountId = 'xiao2'
  },
  watch: {
  },
  methods: {
    init: function () {
      // document.querySelector('#myVideo').style['object-position'] = '0px 0px'
    }
  }
}
</script>
<style lang="scss" scoped>
.v-video {
  width: 100%;
  height: 100%;
  position: relative;
  .v-text {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 2;
  }
  video {
    width: 100%;
    height: 100%;
  }
  p {
    color: red;
  }
}
</style>
