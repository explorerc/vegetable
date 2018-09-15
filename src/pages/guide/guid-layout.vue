<template>
  <div class="container">
    <img src="../../assets/image/1.png" alt="" class="v-guid-img">
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
  overflow: auto;
  .v-guid-img {
    display: block;
    width: 100%;
    height: 790px;
  }
  .app-view /deep/ {
    display: block;
    width: 100%;
    padding: 30px;
    .v-submit {
      display: block;
      font-size: 32px;
      width: 490px;
      height: 90px;
      line-height: 90px;
      background-color: #ffd021;
      color: #222;
      border-radius: 50px;
      text-align: center;
      text-decoration: none;
      margin: 30px auto 0;
    }
    .v-registered {
      font-size: 22px;
      text-align: center;
      display: block;
      margin: 15px auto 0;
      color: #555;
    }
  }
}
</style>
