<template>
  <div class="container">
    <!--<div class="head">-->
      <!--<mt-header :title="headTitle" class="is-fixed">-->
        <!--<router-link to="/" slot="left">-->
          <!--<mt-button class="iconfont icon-back" v-if="!isHeadClose"></mt-button>-->
          <!--<mt-button @click="handleClose" v-if="isHeadClose"  class="iconfont icon-close"></mt-button>-->
        <!--</router-link>-->
        <!--<mt-button slot="right" v-if="headTitle==='购物车'&&!isCartMange" class="cart-manger" @click="cartManferClick">管理</mt-button>-->
        <!--<mt-button slot="right" v-if="headTitle==='购物车'&&isCartMange" class="cart-manger" @click="cartManferClick">完成</mt-button>-->
        <!--<mt-button icon="more" slot="right" v-if="headTitle!=='购物车'"></mt-button>-->
      <!--</mt-header>-->
    <!--</div>-->
    <!--<keep-alive include="Kind,Home">-->
      <!--<component-->
              <!--:is="currentTabComponent"-->
              <!--:isCartMange="isCartMange"-->
              <!--@kindClick="changMenu('Kind')"-->
              <!--@saveUserInfo="changMenu('My')"-->
      <!--&gt;</component>-->
    <!--</keep-alive>-->
    <router-view></router-view>
    <!--<bottomNav @change="changMenu"></bottomNav>-->
    <div class="bottom-nav" v-if="this.headTitle !== '联系卖家'">
      <mt-tabbar v-model="selected = bottomActive" class="is-fixed">
        <mt-tab-item @click.native.prevent="bottomActive = 'Home'" id="Home">
          <i slot="icon" class="iconfont icon-shouye"></i>
          首页
        </mt-tab-item>
        <mt-tab-item @click.native.prevent="bottomActive = 'Kind'" id="Kind">
          <i slot="icon" class="iconfont icon-leimupinleifenleileibie"></i>
          分类
        </mt-tab-item>
        <mt-tab-item  @click.native.prevent="bottomActive = 'Cart'" id="Cart">
          <i slot="icon" class="iconfont icon-gouwuche"></i>
          购物车
        </mt-tab-item>
        <mt-tab-item @click.native.prevent="bottomActive = 'Record'" id="Record">
          <i slot="icon" class="iconfont icon-goumaijilu"></i>
          订单
        </mt-tab-item>
        <mt-tab-item  @click.native.prevent="bottomActive = 'User'" id="User">
          <i slot="icon" class="iconfont icon-gerenzhongxin"></i>
          个人中心
        </mt-tab-item>
      </mt-tabbar>
    </div>

  </div>
</template>

<script>
  import Home from './home/index'
  import Coupon from './home/coupon'
  import Record from './record/index'
  import Cart from './cart/index'
  import User from './user/index'
  import Edit from './user/edit'
  import bottomNav from '../components/bottom-nav'
  import headNav from '../components/head-nav'
  import Kind from './kind/kind'
  import EventBus from 'src/utils/eventBus'
  import GoodDetail from 'src/pages/good/goodDetail'
  import SearchPage from 'src/pages/good/search'
  import Chat from 'src/pages/user/chat'
  import Pay from 'src/pages/cart/pay'
  import Book from 'src/pages/good/book'
  export default {
    components: { Home, User, Record, Cart, bottomNav, headNav, Kind, GoodDetail, Edit, SearchPage, Chat, Coupon, Pay, Book },
    name: 'layout',
    props: {
    },
    data () {
      return {
        currentTabComponent: Home,
        headTitle: '商城首页',
        isHeadClose: true,
        isCartMange: false,
        bottomActive: 'Home'
      }
    },
    methods: {
      // 改变导航文字
      changMenu (value) {
        // debugger
        if (value === 'Home') {
          this.bottomActive = 'Home'
          this.$router.replace('/home')
        } else if (value === 'User') {
          this.bottomActive = 'User'
          this.$router.replace('/user')
        } else if (value === 'Record') {
          this.headTitle = '购买记录'
          this.$router.replace('/record')
        } else if (value === 'Cart') {
          this.bottomActive = 'Cart'
          this.$router.replace('/cart')
        } else if (value === 'Kind') {
          this.bottomActive = 'Kind'
          this.$router.replace('/kind')
        } else if (value === 'GoodDetail') {
          this.currentTabComponent = GoodDetail
          this.headTitle = '商品详情'
          this.bottomActive = ''
        } else if (value === 'Edit') {
          // this.currentTabComponent = Edit
          // this.headTitle = '编辑个人信息'
          this.bottomActive = ''
          this.$router.replace('/edit')
        } else if (value === 'SearchPage') {
          // this.currentTabComponent = SearchPage
          // this.headTitle = '商品搜索'
          this.bottomActive = ''
          this.$router.replace('/search')
        } else if (value === 'Chat') {
          // this.currentTabComponent = Chat
          // this.headTitle = '联系卖家'
          this.bottomActive = ''
        } else if (value === 'Coupon') {
          // this.currentTabComponent = Coupon
          // this.headTitle = '优惠券'
          this.bottomActive = ''
          this.$router.replace('/coupon')
        } else if (value === 'Pay') {
          // this.currentTabComponent = Pay
          // this.headTitle = '支付'
          this.bottomActive = ''
          this.$router.replace('/pay')
        } else if (value === 'Book') {
          // this.currentTabComponent = Book
          // this.headTitle = '预定'
          this.bottomActive = ''
          this.$router.replace('/book')
        }
      },
      // 购物车是否处于管理状态
      cartManferClick () {
        this.isCartMange = !this.isCartMange
      },
      // 头部导航关闭按钮
      handleClose () {
      },
      kindClick () {
        this.bottomActive = 'Kind'
        this.changMenu('Kind')
      },
      saveUserInfo () {
        this.bottomActive = 'My'
        this.changMenu('User')
      }
    },
    created () {
      EventBus.$on('currentTabComponent', (data) => {
        this.changMenu(data)
      })
    },
    watch: {
      bottomActive: {
        handler (val, oldVal) {
          this.changMenu(val)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
.container {
  overflow-y: auto;
  padding: 0 0 120px;
  height: 100%;
  .head /deep/ {
    .mint-header {
      height: 40px;
      background-color: #efefef;
      color: #222;
      font-size: 18px;
      .mint-header-title {
        display: inline-block;
        height: 40px;
        line-height: 40px;
      }
      .mint-button {
        line-height: 40px;
      }
      .cart-manger {
        font-size: 14px;
        color: #222;
      }
    }
  }
}
.bottom-nav {
  /deep/ {
    .mint-tabbar {
      .mint-tab-item{
        padding-bottom: 8px;
      }
      .mint-tab-item-icon {
        width: 22px;
        height: 22px;
        margin-bottom: 8px;
        .iconfont {
          font-size: 22px;
        }
      }
      .mint-tab-item-label {
        font-size: 12px;
      }
    }
  }
}
</style>
