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
    padding: 50px 40px;
  }
}
</style>
