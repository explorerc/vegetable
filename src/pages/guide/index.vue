<template>
  <div class="v-guid">
    <p class="v-title">
      这里显示引导标题
    </p>
    <div class="v-summary" v-if="!isCountdown">
      是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介
    </div>
    <div class="v-operation" v-if="toStartTime >= 1800">  <!-- 距离活动开始大于30min -->
      <template v-if="event.type === 'guide'">  <!-- 报名活动 -->
        <com-countdown :time="toStartTime" @timeOut="timeOut" v-if="isCountdown"></com-countdown>
        <template v-if="event.isSignup"> <!-- 已报名 -->
          <a :href="goUrl" class="v-submit" v-if="event.isSignup">立即报名</a>
          <a href="/CheckState" class="v-registered" v-if="event.isSignup">已报名</a>
        </template>
        <template v-else> <!-- 未报名 -->
          <a :href="goUrl" class="v-submit" v-if="!event.isSignup">立即报名</a>
        </template>
      </template>
      <template v-if="event.type === 'normal'">  <!-- 无限制活动 -->
        <com-countdown :time="toStartTime" @timeOut="timeOut" v-if="isCountdown"></com-countdown>
        <a :href="goUrl" class="v-submit" v-if="event.isSignup">预约</a>
        <a :href="goUrl" class="v-submit" v-if="!event.isSignup">预约</a>
        <a href="/CheckState" class="v-registered" v-if="event.isSignup">已报名</a>
      </template>
    </div>
    <div class="v-operation" v-else> <!-- 距离活动开始小于30min -->
      <template v-if="event.type === 'guide'">  <!-- 报名活动 -->
        <com-countdown :time="toStartTime" @timeOut="timeOut" v-if="isCountdown"></com-countdown>
        <template v-if="event.isSignup"> <!-- 已报名 -->
          <a :href="goUrl" class="v-submit">立即报名</a>
          <a href="/CheckState" class="v-registered">已报名</a>
        </template>
        <template v-else>  <!-- 未报名 -->
          <a :href="goUrl" class="v-submit" v-if="!event.isSignup">立即报名</a>
        </template>
      </template>
      <template v-if="event.type === 'normal'">  <!-- 无限制活动 -->
        <a :href="goUrl" class="v-submit">进入直播</a>
      </template>
    </div>
  </div>
</template>
<script>
  import comCountdown from '../../components/common/countdown/countdown'
  export default {
    data () {
      return {
        goUrl: '',
        goRegisteredUrl: '', // 已报名检验页面
        toStartTime: 0 + 0 + 1800 + 5, // 距离活动开始时间（秒）
        event: {
          type: 'guide', // guide是报名活动 normal是无限制活动
          isSignup: true // 是否已报名
        },
        isCountdown: false
      }
    },
    mounted () {
    },
    components: {
      'com-countdown': comCountdown
    },
    created () {
      switch (this.event.type) {
        case 'guide' : this.goUrl = '/SignUp'
          break
        case 'normal' : this.goUrl = 'javacript:;'
      }
    },
    watch: {
      toStartTime: function () {
        console.log(this.toStartTime)
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
.v-guid {
  width: 100%;
  .v-title {
    font-size: 40px;
    text-align: center;
    color: #222;
    padding-bottom: 20px;
  }
  .v-summary {
    text-align: left;
    font-size: 28px;
    line-height: 40px;
    color: #555;
  }
  .v-operation {
    text-align: center;
  }
  img {
    display: block;
    width: 100%;
    height: 320px;
  }
}
</style>
