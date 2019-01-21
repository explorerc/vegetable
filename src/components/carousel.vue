<template>
  <div class="block">
    <span class="demonstration"></span>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in imgList" :key="item.id">
        <img :src="item.idView" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    name: 'carousel',
    data () {
      return {
        imgList: [
          { id: 0, idView: require('../assets/image/carousel1.jpg') },
          { id: 1, name: '详情', idView: require('../assets/image/carousel2.jpg') },
          { id: 2, name: '推荐', idView: require('../assets/image/carousel3.jpg') }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .mint-swipe {
    height: 300px;
    img {
      height: 100%;
      width: 100%;
    }
  }

</style>
