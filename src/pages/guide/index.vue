<template>
  <div class="v-guid">
    <p class="v-title">
      这里显示引导标题
    </p>
    <div class="v-summary">
      是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介
      是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介
      是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介
      是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介
    </div>
    <div class="v-operation">
      <com-countdown :time="time" @timeOut="timeOut"></com-countdown>
      <a :href="goUrl" class="v-submit">立即报名</a>
    </div>
  </div>
</template>
<script>
  import comCountdown from '../../components/common/countdown/countdown'
  export default {
    data () {
      return {
        time: 864000 + 0 + 0 + 5, // 距离活动开始时间（秒）
        type: 'guide', // guide是报名活动 normal是无限制活动
        goUrl: ''
      }
    },
    mounted () {
    },
    components: {
      'com-countdown': comCountdown
    },
    created () {
      switch (this.type) {
        case 'guide' : this.goUrl = '/SignUp'
          break
        case 'normal' : this.goUrl = 'javacript:;'
      }
    },
    watch: {
      time: function () {
        console.log(this.time)
      }
    },
    methods: {
      timeOut () {
        console.log('活动开始啦')
      }
    }
  }
</script>
<style lang="scss" scoped>
.liveguide-container {
  width: 100%;
  height: 100%;
  img {
    display: block;
    width: 100%;
    height: 320px;
  }
  .v-frame-container {
    width: 100%;
    position: absolute;
    top: 320px;
    bottom: 0px;
    left: 0px;
    overflow-y: auto;
  }
}
</style>
