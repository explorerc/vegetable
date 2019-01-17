<template>
  <div class="container">
    <headNav
      :headTitle="headTitle"
    ></headNav>
    <keep-alive>
      <component :is="currentTabComponent"></component>
    </keep-alive>
    <bottomNav @change="changMenu"></bottomNav>
  </div>
</template>

<script>
  import Home from './home/index'
  import Record from './record/index'
  import Cart from './cart/index'
  import User from './user/index'
  import bottomNav from '../components/bottom-nav'
  import headNav from '../components/head-nav'
  export default {
    components: { Home, User, Record, Cart, bottomNav, headNav },
    name: 'layout',
    props: {
    },
    data () {
      return {
        currentTabComponent: Home,
        headTitle: '商城首页'
      }
    },
    methods: {
      changMenu (data) {
        if (data === 'home') {
          this.currentTabComponent = Home
        } else if (data === 'user') {
          this.currentTabComponent = User
        } else if (data === 'record') {
          this.currentTabComponent = Record
        } else if (data === 'cart') {
          this.currentTabComponent = Cart
        }
      }
    }
  }
</script>

<style scoped lang="scss">
.container {
  overflow-y: auto;
  padding-top: 80px;
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
