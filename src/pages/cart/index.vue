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
            { goodId: 101, goodName: '商品1', price: '123', goodImg: 'http://bpic.588ku.com/original_pic/18/06/22/a2867218d13f2358a3669d97670ec8c7.jpg!/fw/254/quality/90/unsharp/true/compress/true', number: '2' },
            { goodId: 102, goodName: '商品2', price: '123', goodImg: 'https://gd2.alicdn.com/imgextra/i2/2604680124/O1CN011CmpaBtCRK980u7_!!2604680124.jpg_400x400.jpg_.webp', number: '2' },
            { goodId: 104, goodName: '商品3', price: '123', goodImg: '', number: '2' },
            { goodId: 105, goodName: '商品4', price: '123', goodImg: '', number: '2' },
            { goodId: 107, goodName: '商品5', price: '123', goodImg: '', number: '2' }
          ]
        }
      }
    }
</script>

<style scoped>

</style>
