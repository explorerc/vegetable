<template>
  <div class="pay">
   <div class="user">
     <div class="info">
       <span>名字</span><span>电话</span>
     </div>
     <div>
       <div><i class="iconfont"></i></div>
       <div class="address">收货地址</div>
     </div>
   </div>
   <div class="goods">
     <div class="item" v-for="good in selectedGoods">
       <div class="cover"><img src="" alt=""></div>
       <div class="name">商品名称</div>
       <div class="sale">
         <p>￥50</p>
         <p>X2</p>
       </div>
     </div>
   </div>
  </div>
</template>

<script>
  import goodInfo from 'src/components/good-info'
  // import cart from 'src/api/cart'
  import EventBus from 'src/utils/eventBus'

  export default {
    name: 'index',
    components: {goodInfo},
    data () {
      return {
        selectedNum: 0, // 被选中的数量
        selectedGoods: []
      }
    },
    methods: {
      // 计算总价
      totalMoney () {
        this.cartTotalMoney = 0
        this.selectedNum = 0
        for (let i = 0; i < this.cartList.length; i++) {
          if (this.cartList[i].isChecked) {
            this.cartTotalMoney = this.cartList[i].price * this.cartList[i].number + this.cartTotalMoney
            this.selectedNum = this.selectedNum + 1
          }
        }
      }
    },
    created () {
      EventBus.$on('selectedGoods', (data) => {
        this.selectedGoods = data
        console.log(this.selectedGoods)
      })
    },
    watch: {
    }
  }
</script>

<style scoped lang="scss">
  @import '~assets/css/variable.scss';
  .cart {
    position: relative;
    padding: 0 40px 60px;
    li {
      margin-top: 40px;
      input {
        border-radius: 50%;
      }
      .cart-item-top {
        display: flex;
        align-items: center;
        .good-img {
          display: inline-block;
          width: 25%;
          margin: 0 15px 0 20px;
          border-radius: 10px;
        }
        .good-des {
          display: inline-block;
          width: 100%;
          .good-name {
            margin-bottom: 20px;
            /* 商品名字超过两行进行隐藏 */
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .price {
            color: #E4393C;
            line-height: 55px;
          }
        }
      }

    }
    .cart-bottom {
      position: fixed;
      display: block;
      width: calc(100% - 45px);
      height: 100px;
      bottom: 100px;
      left: 20px;
      background-color: #efefef;
      line-height: 100px;
      .fl {
        input {
          position: relative;
          top: 4px;
        }
      }
      .fr {
        .pay-btn {
          height: 60px;
          background-color: $color-default;
          border: 1px solid $color-default;
          border-radius: 30px;
          color: #fff;
          padding: 0 20px;
          margin-left: 20px;
        }
        .delete-btn {
          display: inline-block;
          color: $color-default;
          /*width: 96px;*/
          margin-left: 20px;
          padding: 0 34.5px;
          background-color: transparent;
          border: none;
        }
      }
    }
  }
</style>
