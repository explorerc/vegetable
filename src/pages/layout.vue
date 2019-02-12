<template>
  <div class="container">
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
    <keep-alive include="Kind,Home">
      <component
              :is="currentTabComponent"
              :isCartMange="isCartMange"
              @kindClick="kindClick"
      ></component>
    </keep-alive>
    <!--<bottomNav @change="changMenu"></bottomNav>-->
    <div class="bottom-nav">
      <mt-tabbar v-model="selected = bottomActive" class="is-fixed">
        <mt-tab-item @click.native.prevent="bottomActive = 'home'" id="home">
          <i slot="icon" class="iconfont icon-shouye"></i>
          首页
        </mt-tab-item>
        <mt-tab-item @click.native.prevent="bottomActive = 'kind'" id="kind">
          <i slot="icon" class="iconfont icon-leimupinleifenleileibie"></i>
          分类
        </mt-tab-item>
        <mt-tab-item  @click.native.prevent="bottomActive = 'cart'" id="cart">
          <i slot="icon" class="iconfont icon-gouwuche"></i>
          购物车
        </mt-tab-item>
        <mt-tab-item @click.native.prevent="bottomActive = 'record'" id="record">
          <i slot="icon" class="iconfont icon-goumaijilu"></i>
          订单
        </mt-tab-item>
        <mt-tab-item  @click.native.prevent="bottomActive = 'my'" id="my">
          <i slot="icon" class="iconfont icon-gerenzhongxin"></i>
          个人中心
        </mt-tab-item>
      </mt-tabbar>
    </div>

  </div>
</template>

<script>
  import Home from './home/index'
  import Record from './record/index'
  import Cart from './cart/index'
  import User from './user/index'
  import Edit from './user/edit'
  import bottomNav from '../components/bottom-nav'
  import headNav from '../components/head-nav'
  import Kind from './kind/kind'
  import EventBus from 'src/utils/eventBus'
  import GoodDetail from 'src/pages/good/goodDetail'
  export default {
    components: { Home, User, Record, Cart, bottomNav, headNav, Kind, GoodDetail, Edit },
    name: 'layout',
    props: {
    },
    data () {
      return {
        currentTabComponent: Home,
        headTitle: '商城首页',
        isHeadClose: true,
        isCartMange: false,
        bottomActive: 'home'
      }
    },
    methods: {
      // 改变导航文字
      changMenu (value) {
        if (value === 'home') {
          this.currentTabComponent = Home
          this.headTitle = '商城首页'
        } else if (value === 'my') {
          this.currentTabComponent = User
          this.headTitle = '个人中心'
        } else if (value === 'record') {
          this.currentTabComponent = Record
          this.headTitle = '购买记录'
        } else if (value === 'cart') {
          this.currentTabComponent = Cart
          this.headTitle = '购物车'
        } else if (value === 'kind') {
          this.currentTabComponent = Kind
          this.headTitle = '商品分类'
        } else if (value === 'goodDetail') {
          this.currentTabComponent = GoodDetail
          this.headTitle = '商品详情'
          this.bottomActive = ''
        } else if (value === 'edit') {
          this.currentTabComponent = Edit
          this.headTitle = '编辑个人信息'
          this.bottomActive = ''
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
        this.bottomActive = 'kind'
        this.changMenu('kind')
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
  padding: 80px 0 120px;
  height: 100%;
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
