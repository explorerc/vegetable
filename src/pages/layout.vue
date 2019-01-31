<template>
  <div class="container">
    <!--<headNav-->
      <!--:headTitle="headTitle"-->
      <!--@isHeadClose="isHeadClose"-->
    <!--&gt;</headNav>-->
    <div class="head">
      <mt-header :title="headTitle" class="is-fixed">
        <router-link to="/" slot="left">
          <mt-button class="iconfont icon-back" v-if="!isHeadClose"></mt-button>
          <mt-button @click="handleClose" v-if="isHeadClose"  class="iconfont icon-close"></mt-button>
        </router-link>
        <mt-button slot="right" v-if="headTitle==='购物车'&&!isCartMange" class="cart-manger" @click="cartManferClick">管理</mt-button>
        <mt-button slot="right" v-if="headTitle==='购物车'&&isCartMange" class="cart-manger" @click="cartManferClick">完成</mt-button>
        <mt-button icon="more" slot="right" v-if="headTitle!=='购物车'"></mt-button>
      </mt-header>
    </div>
    <keep-alive>
      <component
              :is="currentTabComponent"
              :isCartMange="isCartMange"></component>
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
  import Kind from './kind/kind'
  export default {
    components: { Home, User, Record, Cart, bottomNav, headNav, Kind },
    name: 'layout',
    props: {
    },
    data () {
      return {
        currentTabComponent: Home,
        headTitle: '商城首页',
        isHeadClose: true,
        isCartMange: false
      }
    },
    methods: {
      // 改变导航文字
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
          this.headTitle = '购物车'
        } else if (data === 'kind') {
          this.currentTabComponent = Kind
          this.headTitle = '商品分类'
        }
      },
      // 购物车是否处于管理状态
      cartManferClick () {
        this.isCartMange = !this.isCartMange
      },
      // 头部导航关闭按钮
      handleClose () {
      }
    }
  }
</script>

<style scoped lang="scss">
.container {
  overflow-y: auto;
  padding: 80px 0 120px;
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
