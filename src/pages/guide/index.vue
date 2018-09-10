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
    <div class="v-operation" v-if="toStartTime >= 1800">  <!-- 距离活动开始大于30min -->
      <template v-if="event.type === 'guide'">  <!-- 报名活动 -->
        <com-countdown :time="toStartTime" @timeOut="timeOut"></com-countdown>
        <template v-if="event.isSignup"> <!-- 已报名 -->
          <a :href="goUrl" class="v-submit" v-if="event.isSignup">立即报名</a>
          <a href="/CheckState" class="v-registered" v-if="event.isSignup">已报名</a>
        </template>
        <template v-else> <!-- 未报名 -->
          <a :href="goUrl" class="v-submit" v-if="!event.isSignup">立即报名</a>
        </template>
      </template>
      <template v-if="event.type === 'normal'">  <!-- 无限制活动 -->
        <com-countdown :time="toStartTime" @timeOut="timeOut"></com-countdown>
        <a :href="goUrl" class="v-submit" v-if="event.isSignup">预约</a>
        <a :href="goUrl" class="v-submit" v-if="!event.isSignup">预约</a>
        <a href="/CheckState" class="v-registered" v-if="event.isSignup">已报名</a>
      </template>
    </div>
    <div class="v-operation" v-else> <!-- 距离活动开始小于30min -->
      <template v-if="event.type === 'guide'">  <!-- 报名活动 -->
        <com-countdown :time="toStartTime" @timeOut="timeOut"></com-countdown>
        <template v-if="event.isSignup"> <!-- 已报名 -->
          <a :href="goUrl" class="v-submit">立即报名</a>
          <a href="/CheckState" class="v-registered">已报名</a>
        </template>
        <template v-else>  <!-- 未报名 -->
          <a :href="goUrl" class="v-submit" v-if="!event.isSignup">立即报名</a>
        </template>
      </template>
      <template v-if="event.type === 'normal'">  <!-- 无限制活动 -->
        <a :href="goUrl" class="v-enter">进入直播</a>
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
        }
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
  height: 100%;
  .v-title {
    font-size: 14px;
    height: 80px;
    line-height: 80px;
    text-align: left;
    padding: 0 5px;
    color: #222;
    border: 1px solid #666;
    border-left: none;
    border-right: none;
  }
  .v-summary {
    text-align: left;
    font-size: 14px;
    line-height: 50px;
    padding: 0 5px;
    color: #222;
    border-bottom: 1px solid #666;
  }
  .v-operation {
    text-align: center;
    .v-submit {
      display: block;
      width: 250px;
      height: 50px;
      line-height: 48px;
      border: 1px solid #666;
      text-align: center;
      text-decoration: none;
      margin: 0 auto;
    }
  }
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
