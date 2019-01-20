<template>
  <div class="container">
    <headNav
      :headTitle="headTitle"
      :isHeadClose="isHeadClose"
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
        headTitle: '商城首页',
        isHeadClose: true
      }
    },
    methods: {
      changMenu (data) {
        if (data === 'home') {
          this.currentTabComponent = Home
          this.headTitle = '商城首页'
        } else if (data === 'my') {
          this.currentTabComponent = User
          this.headTitle = '个人中心'
        } else if (data === 'record') {
          this.currentTabComponent = Record
          this.headTitle = '购买记录'
        } else if (data === 'cart') {
          this.currentTabComponent = Cart
          this.headTitle = '篮子'
        }
      }
    }
  }
</script>

<style scoped lang="scss">
.container {
  overflow-y: auto;
  padding: 80px 0 120px;
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
