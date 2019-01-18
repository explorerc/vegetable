<template>

  <div class="bottom-nav">
    <mt-tabbar v-model="selected = active" class="is-fixed">
      <mt-tab-item @click.native.prevent="home" id="home">
        <i slot="icon" class="iconfont icon-shouye"></i>
        首页
      </mt-tab-item>
      <mt-tab-item @click.native.prevent="active = 'record'" id="record">
        <i slot="icon" class="iconfont icon-goumaijilu"></i>
        购买记录
      </mt-tab-item>
      <mt-tab-item  @click.native.prevent="active = 'cart'" id="cart">
        <i slot="icon" class="iconfont icon-gouwuche"></i>
        篮子
      </mt-tab-item>
      <mt-tab-item  @click.native.prevent="active = 'my'" id="my">
        <i slot="icon" class="iconfont icon-gerenzhongxin"></i>
        个人中心
      </mt-tab-item>
    </mt-tabbar>
  </div>


</template>

<script>
    export default {
      name: 'bottomNav',
      data () {
        return {
          active: 'home'
        }
      },
      watch: {
        active (newVal) {
          this.$emit('change', newVal)
        }
      }
    }
</script>

<style scoped lang="scss">
.bottom-nav {
  /deep/ {
    .mint-tabbar {
      .mint-tab-item{
        padding-bottom: 16px;
      }
      .mint-tab-item-icon {
        width: 44px;
        height: 44px;
        margin-bottom: 15px;
        .iconfont {
          font-size: 44px;
        }
      }
      .mint-tab-item-label {
        font-size: 24px;
      }
    }
  }
}
</style>
