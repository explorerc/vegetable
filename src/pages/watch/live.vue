<template>
  <div class="v-video">
    <play-video role="watcher" :play-type="playType" :startInit="startInit"></play-video>
  </div>
</template>
<script>
// import VodPuller from '../../components/common/video/pull/VodPuller'
// import Slider from '../../components/common/video-control/con-slider'
import PlayVideo from './video/index' // 直播推流回放组件
// import LiveHttp from 'src/api/manage'

export default {
  components: {PlayVideo},
  data () {
    return {
      activityId: '',
      playType: 'live', // 直播(live), 回放(vod), 暖场(warm)
      startInit: false
    }
  },
  mounted () {
  },
  created () {
    this.initToken()
  },
  methods: {
    /* 初始化，获取权限 */
    initToken () {
      this.$nextTick(() => {
        this.startInit = true
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.v-video /deep/ {
  width: 100%;
  height: 422px;
  position: relative;
  overflow: hidden;
  .v-text {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 2;
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
    object-fit: fill;
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
