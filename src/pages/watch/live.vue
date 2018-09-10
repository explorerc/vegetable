<template>
  <div class="v-video">
    <div class="v-text">
      6666666
    </div>
    <video id="myVideo" src="../../assets/image/activity3.mp4" x5-video-player-type="h5"  x5-video-player-fullscreen="false" x5-video-orientation="landscape|portrait" controls style="object-position: 0px 0px;"></video>
    <p>
      adfdsaffffffffffffffffffffffffffffffffasdfdasf
    </p>
  </div>
</template>
<script>
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
  }
  p {
    color: #fff;
  }
}
</style>
