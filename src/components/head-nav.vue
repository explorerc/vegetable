<template>
  <div class="head">
    <mt-header :title="headTitle" class="is-fixed">
      <router-link to="/" slot="left">
        <mt-button class="iconfont icon-back" v-if="!isHeadClose"></mt-button>
        <mt-button @click="handleClose" v-if="isHeadClose"  class="iconfont icon-close"></mt-button>
      </router-link>
      <mt-button slot="right" v-if="headTitle==='购物车'" class="cart-manger" @click="cartMangerClick">管理</mt-button>
      <mt-button icon="more" slot="right" v-else></mt-button>
    </mt-header>
  </div>
</template>

<script>
  export default {
    name: 'head-nav',
    data () {
      return {}
    },
    props: {
      headTitle: {
        type: String
      },
      isHeadClose: {
        type: Boolean,
        default: true
      },
      isCart: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleClose () {
      },
      cartMangerClick () {
        this.$emit('cartMangerClick')
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
    .mint-button {
      line-height: 40px;
    }
    .cart-manger {
      font-size: 28px;
      color: #222;
    }
  }
}
</style>
