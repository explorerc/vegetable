<template>
  <div class="container">
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="index">
        <!--<mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>-->
        <Home></Home>
      </mt-tab-container-item>
      <mt-tab-container-item id="record">
        <Record></Record>
      </mt-tab-container-item>
      <mt-tab-container-item id="cart">
        <Cart></Cart>
      </mt-tab-container-item>
      <mt-tab-container-item id="my">
        <User></User>
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="selected = active" class="is-fixed">
      <mt-tab-item @click.native.prevent="active = 'index'" id="index">
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
  import Home from './home/index'
  import Record from './record/index'
  import Cart from './cart/index'
  import User from './user/index'
  export default {
    components: { Home, User, Record, Cart },
    name: 'layout',
    props: {
      keyType: {
        type: Number
      }
    },
    data () {
      return {
        active: 'index'
      }
    }
  }
</script>

<style scoped lang="scss">
.container {
  overflow-y: auto;
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
