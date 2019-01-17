<template>
  <div class="head">
    <mt-header :title="headTitle" class="is-fixed">
      <router-link to="/" slot="left">
        <mt-button icon="back" v-if="!isFirstPage">返回</mt-button>
        <mt-button @click="handleClose" v-if="isFirstPage"  class="iconfont icon-close"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>
  export default {
    name: 'head-nav',
    data () {},
    props: {
      headTitle: {
        type: String
      },
      isFirstPage: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style scoped lang="scss">
.head /deep/ {
  .mint-header {
    height: 80px;
    background-color: #efefef;
    color: #222;
    font-size: 36px;
    .mint-header-title {
      display: inline-block;
      height: 80px;
      line-height: 80px;
    }
  }
}
</style>
