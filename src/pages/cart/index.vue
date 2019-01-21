<template>
  <div>
    <span>共有{{cartLIst.length}}件商品</span>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <li v-for="item in cartLIst">
        <div class="cart-item-top">
          <!--<input type="checkbox" name="goods" :value="item.goodId">-->
          <img :src="item.goodImg" alt="">
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
    export default {
      name: 'index',
      data () {
        return {
          goodsNum: 0, // 购物车中有多少件商品
          cartLIst: [
            { goodId: 101, goodName: '商品1', price: '123', goodImg: 'https://img10.360buyimg.com/n7/jfs/t18418/237/556658165/172846/929b317e/5a96c27bNa2c5453d.jpg', number: '2' },
            { goodId: 101, goodName: '商品1', price: '123', goodImg: 'https://img11.360buyimg.com/n7/jfs/t4048/252/288662110/127744/931a566e/58462cd6N653980df.jpg', number: '2' },
            { goodId: 102, goodName: '商品2', price: '123', goodImg: 'https://img13.360buyimg.com/n7/jfs/t4237/72/338884735/326271/fabe0f8d/58b3c666N4d3ff37e.jpg', number: '2' },
            { goodId: 104, goodName: '商品3', price: '123', goodImg: '', number: '2' },
            { goodId: 105, goodName: '商品4', price: '123', goodImg: '', number: '2' },
            { goodId: 107, goodName: '商品5', price: '123', goodImg: '', number: '2' }
          ]
        }
      },
      methods: {
        loadMore () {
          this.loading = true
          setTimeout(() => {
            let last = this.list[this.list.length - 1]
            for (let i = 1; i <= 10; i++) {
              this.list.push(last + i)
            }
            this.loading = false
          }, 2500)
        }
      }
    }
</script>

<style scoped>

</style>
