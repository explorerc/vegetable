<template>

  <div class="footer">
    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        <i slot="icon" class="iconfont icon-shouye"></i>
        首页
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="">
        购买记录
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="">
        篮子
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="">
        个人中心
      </mt-tab-item>
    </mt-tabbar>
  </div>


</template>

<script>
    export default {
      name: 'footer'
    }
</script>

<style scoped lang="scss">
.footer {

}
</style>
