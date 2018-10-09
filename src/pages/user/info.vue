<template>
  <div class="v-video">
    <video src="http://www.vhall.com/public/static/images/index/new3/activity1.mp4?v=180702"
           x5-video-player-type="h5"
           x5-video-orientation="portrait"
           autoplay="autoplay"
           id="movie"></video>
    <a href="javascript:;"
       @click="play()">播放</a>
  </div>
</template>
<script>
import VConsole from 'vconsole/dist/vconsole.min.js' // 初始化
let vConsole = new VConsole()
export default {
  data () {
    return {
      mute: false, // 是否禁音
      isPlay: true,
      volumeSize: 100,
      fullScree: false,
      isFullBrowser: false,
      showQualityBlock: false,
      selectQuality: 0,
      current: 0,
      progress: 0
    }
  },
  created () {
    console.log(vConsole)
  },
  computed: {
  },
  props: {
  },
  watch: {
  },
  methods: {
    play () {
      var video = document.getElementById('movie')
      if (video.paused) { // 如果已暂停则播放
        video.play() // 播放控制
      } else { // 已播放点击则暂停
        video.pause() // 暂停控制
      }
      video.style['object-position'] = '0px 0px'
    }
  }
}
</script>
<style>
.v-video {
  width: 100%;
  height: 100%;
}
video {
  width: 100%;
  height: 100%;
}
</style>

