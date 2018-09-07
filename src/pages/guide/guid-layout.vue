<template>
  <div class="container">
    <img src="../../assets/image/1.jpg" alt="" class="v-guid-img">
    <router-view class="app-view"></router-view>
  </div>
</template>

<script>

// import menu from './menu'

export default {
  data () {
    return {
      name: ''
    }
  },
  created: function () {
  },
  components: {
    // 'com-menu': menu
  },
  methods: {
  }
}
</script>


<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .v-guid-img {
    display: block;
    width: 100%;
    height: 320px;
  }
  .app-view /deep/ {
    display: block;
    width: 100%;
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
      padding: 50px 40px;
      text-align: center;
      .v-cundown {
        margin-bottom: 80px;
        span {
          display: inline-block;
          width: 65px;
          height: 65px;
          line-height: 65px;
          border: 1px solid #666;
          text-align: center;
        }
      }
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
  }
}
</style>
