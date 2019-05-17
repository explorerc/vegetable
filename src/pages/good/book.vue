<template>
  <div class="book"  v-title data-title="预定">
    <goodInfo
      :goodInfo="goodInfo"
      :isCartShow="isCartShow"
      @minusNumberClick="minusNumberClick(goodInfo.id)"
      @addNumberClick="addNumberClick(goodInfo.id)"></goodInfo>
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
        goodId: 0,
        goodInfo: [],
        number: 1
      }
    },
    methods: {
      queryGood (id) {
        this.$get(this.base_url + goods.GET_GOOD_BYID, {
          'id': id
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
      EventBus.$on('goodsId', (data) => {
        this.goodId = data
        this.queryGood(this.goodId)
      })
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
    width: 90%;
    text-align: center;
    padding: 0 40px 10px;
    justify-content: space-between;
    button {
      display: inline-block;
      font-size: 36px;
      border-radius: 10px;
      padding: 10px 20px;
      &.icon-goumai{
        color: #E5511D;
        border-color: #F0CAB6;
        background: #FFE4D0;
      }
      &.icon-cart {
        color: #FFF;
        border-color: #F40;
        background: #F40;
      }
    }
  }
}
</style>
