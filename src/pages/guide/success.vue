<template>
  <div class="v-success" v-if="isStart">
    <img src="../../assets/image/success@2x.png" alt="" class="v-img">
    <p class="v-success-title">
      <span v-if="event.type === 'guide'">报名成功</span>
      <span v-else-if="event.type === 'normal'">预约成功</span>
    </p>
    <p>活动将于<span class="v-red">2018-9-8 14:54:00</span>准时开播</p>
  </div>
  <div class="v-success" v-else>
    <img src="../../assets/image/success@2x.png" alt="" class="v-img">
    <p class="v-start-title">
      <span>直播已经开始啦</span>
    </p>
    <button class="primary-button" @click="accountSubmit">提交</button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        event: {
          type: 'guide', // guide是报名活动 normal是无限制活动
          isStart: true
        }
      }
    },
    mounted () {
    },
    components: {
    },
    created () {
    },
    watch: {
    },
    methods: {
    }
  }
</script>
<style lang="scss" scoped>
@import '~assets/css/mixin.scss';
.v-success {
  .v-img {
    display: block;
    width: 224px;
    margin: 0 auto;
  }
  p {
    text-align: center;
    margin-top: 22px;
    font-size: 28px;
    color: #222;
    &.v-success-title,
    &.v-start-title {
      font-size: 40px;
    }
    .v-red {
      color: #fc5659;
    }
  }
  .primary-button {
    width: 490px;
    height: 90px;
    border-radius: 50px;
    display: block;
    margin: 25px auto 5px;
  }
}
</style>
