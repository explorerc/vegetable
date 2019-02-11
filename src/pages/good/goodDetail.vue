<template>
  <div class="good-detail">
    <div class="cover">
      <img :src='goodInfo[0].imgUrl' alt="">
      <!--<img alt="">-->
    </div>
    <div>{{goodInfo[0].name}}</div>
    <div class="price-box">
      <span class="price" v-if="goodInfo[0].disprice">¥{{goodInfo[0].disprice}}</span>
      <span class="price" v-else>¥{{goodInfo[0].price}}</span>
      <span class="del-price" v-if="goodInfo[0].disprice">原价¥<span class="del-line">{{goodInfo[0].price}}</span>份</span>
    </div>
    <div class="number clearfix">
      <span class="fl">规格：</span>
      <NumberBtn :goodsAmount="number"
                 class="fr"
                 @minusNumberClick="minusNumberClick"
                 @addNumberClick="addNumberClick"
      ></NumberBtn>
    </div>
  </div>
</template>

<script>
  import EventBus from 'src/utils/eventBus'
  import goods from 'src/api/goods'
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
        this.$http.get(goods.GET_GOOD_BYID, {
          params: {
            'id': id
          }
        }).then((res) => {
          if (res.status === 200) {
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
}
</style>
