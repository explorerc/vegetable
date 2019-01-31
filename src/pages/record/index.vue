<template>
  <div class="record">
    <div class="head">
      <button><i class="iconfont icon-daifukuan"></i><span>待付款</span></button>
      <button><i class="iconfont icon-daifahuo"></i><span>待发货</span></button>
      <button><i class="iconfont icon-daishouhuo"></i><span>待收货</span></button>
      <button><i class="iconfont icon-quanbudingdan"></i><span>已完成</span></button>
    </div>
    <div class="pay">待付款</div>
    <div>待发货</div>
    <div>待收货</div>
    <div>已完成</div>
  </div>
</template>

<script>
  import order from 'src/api/order'
  export default {
    name: 'index',
    data () {
      return {
      }
    },
    methods: {
      queryOrder () {
        this.$http.get(order.GET_ORDER_INFO, {
          userId: 1
        }).then(res => {
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .record {
    margin: 10px 20px 0;
    .head {
      display: flex;

      padding: 10px 0;
      background-color: #fff;
      border-radius: 10px;
      justify-content: space-around;
      button {
        color: #ef470f;
        border: none;
        background-color: #fff;
      }
      .iconfont {
        display: inline-block;
        width: 100%;
        text-align: center;
        font-size: 48px;
      }
    }
  }

</style>
