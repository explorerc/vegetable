<template>
  <div class="good-detail"  v-title data-title="商品详情">
    <div class="cover">
      <img :src='goodInfo.imgUrl' alt="">
      <!--<img alt="">-->
    </div>
    <div class="name">{{goodInfo.name}}</div>
    <div class="price-box">
      <span class="price" v-if="goodInfo.disPrice">¥{{goodInfo.disPrice}}</span>
      <span class="price" v-else>¥{{goodInfo.price}}</span>
      <span class="del-price" v-if="goodInfo.disPrice">原价¥<span class="del-line">{{goodInfo.price}}</span>份</span>
    </div>
    <div class="inventory">
      库存：{{goodInfo.inventory}}
    </div>
    <div class="number clearfix">
      <span class="fl">规格：</span>
      <NumberBtn :goodsAmount="number"
                 class="fr"
                 @minusNumberClick="minusNumberClick"
                 @addNumberClick="addNumberClick"
                 :maxNumber="goodInfo.inventory"
      ></NumberBtn>
    </div>
    <div class="buy">
      <button class="iconfont icon-ic_reserve" @click="bookClick(goodInfo.id)">预定</button>
      <button class="iconfont icon-goumai">立即购买</button>
      <button class="iconfont icon-cart" @click="addCart(goodInfo.id)">加入购物车</button>
    </div>
  </div>
</template>

<script>
  import EventBus from 'src/utils/eventBus'
  import goods from 'src/api/goods'
  import cart from 'src/api/cart'
  import NumberBtn from 'src/components/number-btn'
  export default {
    name: 'goodDetail',
    components: { NumberBtn },
    data () {
      return {
        goodId: this.$route.params.id,
        goodInfo: [],
        number: 1
      }
    },
    methods: {
      queryGood (id) {
        this.$get(goods.GET_GOOD_BYID, {
          'goodId': id
        }).then((res) => {
          if (res.code === 200) {
            this.goodInfo = res.data
            console.log(res.data)
          }
        })
      },
      addNumberClick () {
        this.number++
      },
      minusNumberClick () {
        this.number--
      },
      bookClick (id) {
        setTimeout(() => {
          EventBus.$emit('goodInfo', {
            goodId: this.goodId,
            ...this.goodInfo,
            number: this.number
          })
        }, 0)
        EventBus.$emit('currentTabComponent', 'Book')
      },
      addCart (goodId) {
        // alert(goodId)
        this.$get(cart.GET_CART_ADD, {
          'goodId': goodId,
          'number': 1
        }).then((res) => {
          if (res.code === 200) {
            // console.log(res)
            alert(res.data)
          }
        })
      }
    },
    created () {
      this.queryGood(this.goodId)
    },
    watch: {
      goodInfo: {
        handler (val, newVal) {
          console.log(val)
        },
        deep: true
      }
    }
  }
</script>

<style scoped lang="scss">
.good-detail {
  padding: 10px 40px 0;
  .cover {
    img {
      width: 100%;
      margin: 0 auto;
      border-radius: 10px;
    }
  }
  .name {
    margin-top: 20px;
    font-size: 36px;
    text-align: justify;
  }
  .price-box {
    margin-top: 15px;
    .price {
      display: inline-block;
      color: #E4393C;
      line-height: 55px;
      font-size: 38px;
      margin-right: 10px;
    }
  }
  .inventory {
    margin-top: 15px;
  }
  .number {
    margin-top: 15px;
    padding-top: 20px;
    border-top: 1px solid #999;
    span {
      display: inline-block;
      margin-top: 8px;
    }
  }
  .buy {
    display: flex;
    position: fixed;
    bottom: 110px;
    left: 20px;
    width: 100%;
    text-align: center;
    padding: 0 40px 10px 0;
    justify-content: space-between;
    button {
      display: inline-block;
      font-size: 36px;
      border-radius: 10px;
      padding: 10px 20px;
      &.icon-goumai{
        color: #E5511D;
        border: 1px solid #F0CAB6;
        background: #FFE4D0;
      }
      &.icon-cart {
        color: #FFF;
        border: 1px solid #F40;
        background: #F40;
      }
    }
  }
}
</style>
