<template>
  <div class="search-result"  v-title data-title="搜索商品">
      <Search :isSearchPage=true @search="search"></Search>
      <div class="good-list">
          <div v-for="item in goodInfo">
              <GoodInfo :goodInfo="item" @addCart="addCart(item.id)"></GoodInfo>
          </div>
      </div>
  </div>

</template>

<script>
  import Search from '../../components/search'
  import goods from 'src/api/goods'
  import GoodInfo from 'src/components/good-info'
  import cart from 'src/api/cart'
  export default {
    name: 'goodDetail',
    components: { Search, GoodInfo },
    props: {
      isSearchPage: {
        default: true,
        type: Boolean
      }
    },
    data () {
      return {
        goodId: 0,
        goodInfo: [],
        number: 1
      }
    },
    methods: {
      search (key) {
        this.$get(goods.GET_GOOD_KEY, {
          'key': key
        }).then(res => {
          if (res.code === 200) {
            this.goodInfo = res.data
          }
        })
      },
      addCart (goodId) {
        // alert(goodId)
        this.$get(cart.GET_CART_ADD, {
          'userId': 1,
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
    mounted () {
      // debugger
      document.getElementsByClassName('searchInput')[0].focus()
    },
    created () {
      // EventBus.$on('goodsId', (data) => {
      //   this.goodId = data
      //   this.queryGood(this.goodId)
      // })
    },
    watch: {
      isSearchPage: {
        handler (val, newVal) {
          if (!val) {

          }
        },
        deep: true
      }
    }
  }
</script>

<style scoped lang="scss">
.search-result {
    .good-list {
        padding: 0 20px;
    }
}
</style>
