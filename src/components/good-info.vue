<!--suppress ALL -->
<template>
  <div class="good-info">
    <div class="cart-top">
      <!--<input type="checkbox" name="goods" :value="goodInfo.isChecked" :checked.async="goodInfo.isChecked"-->
      <input type="checkbox" name="goods" :checked="goodInfo.isChecked"
             @click="clickSelected()"
             v-if="isCartShow">
      <img :src="goodInfo.imgUrl" alt="" class="good-img" @click="goodDetail()">

      <div class="good-des" @click="goodDetail()">
        <p class="good-name">{{goodInfo.name}}</p>
        <div class="price-box clearfix">
          <span class="price" v-if="goodInfo.disprice===0||!goodInfo.disprice">¥{{goodInfo.price}}</span>
          <span class="price" v-else>¥{{goodInfo.disprice}}</span>
          <span class="del-price del-line" v-if="goodInfo.disprice">¥{{goodInfo.price}}</span>
          <div class="clearfix choose-btn fr" style="display: inline-block" @click.stop="" v-if="isCartShow">
            <div class="choose-amount">
              <button class="minus" @click="minusNumberClick" :disabled="goodInfo.number<=1">-</button><input type="number" :value="goodInfo.number"><button class="add" @click="addNumberClick">+</button>
            </div>
          </div>
          <div v-else-if="isNumberShow" class="fr info">
            <span>共{{goodInfo.number}}商品</span>
            <span v-if="goodInfo.disprice">合计¥{{(parseFloat(goodInfo.number)*parseFloat(goodInfo.disprice)).toFixed(1)}}</span>
            <span v-else>合计 ¥{{(parseFloat(goodInfo.number)*parseFloat(goodInfo.price)).toFixed(1)}}</span>
          </div>
          <div v-else class="fr cart"> <span class="iconfont icon-cart" @click.stop="addCart"></span></div>
        </div>
      </div>
    </div>
    <!--未付款-->
    <div class="cart-bottom" v-if="isPayShow">
      <button @click="cancelOrder">取消订单</button>
      <button>付款</button>
    </div>
    <!--待发货-->
    <div class="cart-bottom" v-if="isSendShow">
      <button>提醒发货</button>
      <button @click="cancelSendOrder">取消订单</button>
    </div>
    <!--待收货-->
    <div class="cart-bottom" v-if="isReceiveShow">
      <button>查看物流</button>
      <button>确认收获</button>
    </div>
  </div>
</template>

<script>
  // import ChooseBtn from 'src/components/choose-btn'
  import EventBus from 'src/utils/eventBus'
  export default {
    name: 'good-info',
    // components: { ChooseBtn }
    props: {
      goodInfo: {},
      isCartShow: {
        default: false,
        type: Boolean
      }
    },
    data () {
      return {
        goodsAmount: 0,
        isNumberItemShow: false,
        isPayShow: false,
        isSendShow: false,
        isReceiveShow: false,
        isNumberShow: false,
        goodsId: 0
      }
    },
    methods: {
      minusNumberClick () {
        this.$emit('minusNumberClick')
      },
      addNumberClick () {
        this.$emit('addNumberClick')
      },
      clickSelected () {
        this.$emit('clickSelected')
      },
      isItemShow () {
        for (var item in this.goodInfo) {
          if (item === 'isPayed') {
            if (this.goodInfo.isPayed === 0) {
              this.isPayShow = true
            } else if (this.goodInfo.isSend === 0) {
              this.isSendShow = true
            } else if (this.goodInfo.isReceived === 0) {
              this.isReceiveShow = true
            }
          }
          if (item === 'number') {
            this.isNumberShow = true
          }
        }
      },
      addCart () {
        this.$emit('addCart')
      },
      goodDetail () {
        this.goodsId = this.goodInfo.goodId ? this.goodInfo.goodId : this.goodInfo.id
        EventBus.$emit('currentTabComponent', 'GoodDetail')
        setTimeout(() => {
          EventBus.$emit('goodsId', this.goodsId)
        }, 0)
      },
      // 未付款时，取消订单
      cancelOrder () {
        this.$emit('cancelOrder')
      },
      cancelSendOrder () {
        this.$emit('cancelSendOrder')
      }
    },
    created () {
      this.isItemShow()
    },
    watch: {
      goodInfo: {
        handler (val, oldVal) {
          console.log(val)
        },
        deep: true
      },
      'goodInfo.isClicked': {
        handler (val, oldVal) {
          console.log(val)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .good-info {
    margin-bottom: 20px;
    input {
      margin-right: 20px;
    }
    .cart-top {
      display: flex;
      align-items: center;
      .good-img {
        display: inline-block;
        width: 25%;
        margin-right: 15px;
        border-radius: 10px;
      }
      .good-des {
        display: inline-block;
        width: 100%;
        border-bottom: 1px dashed #FAFAFA;
        padding-bottom: 10px;
        .good-name {
          margin-bottom: 20px;
          /* 商品名字超过两行进行隐藏 */
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          text-align: justify;
        }
        .price {
          display: inline-block;
          color: #E4393C;
          line-height: 55px;
          font-size: 30px;
          margin-right: 10px;
        }
        .choose-btn {
          display: inline-block;
          font-size: 32px;
          background-color: #fff;
          border-radius: 10px;
          input, button {
            border: none;
            padding: 10px 20px;
            background-color: transparent;
            margin: 0;
          }
          .choose-amount {
            .minus {
              border: 1px solid #8E9198;
              border-radius: 10px 0 0 10px;
              &[disabled] {
                opacity: 0.5;
              }
            }
            input {
              border: 1px solid #8E9198;
              border-left: none;
              border-right: none;
              display: inline-block;
              width: 80px;
              text-align: center;
            }
            .add {
              border: 1px solid #8E9198;
              border-radius: 0 10px 10px 0;
            }
          }
        }
        .info {
          line-height: 56px;
        }
        .cart {
          color: #E4393C;
          span {
            border: 1px dashed #E45A5D;
            padding: 5px;
            border-radius: 50%;
          }
        }
      }
    }
    .cart-bottom {
      text-align: right;
      button {
        display: inline-block;
        height: 60px;
        padding: 0 20px;
        border: 1px solid #b8b7bd;
        background-color: #fff;
        border-radius: 25px;
        margin-left: 8px;
      }
    }

  }

</style>
