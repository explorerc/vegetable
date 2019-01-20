<template>
  <div class="cart">
    <span>共有{{cartLIst.length}}件商品</span>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <li v-for="item in cartLIst">
        <div class="cart-item-top">
          <input type="checkbox" name="goods" :value="item.goodId">
          <img :src="item.goodImg" alt="" class="good-img">
          <div class="good-des">
            <p class="good-name">{{item.goodName}}</p>
            <p class="price-box clearfix">
              <span class="price">￥{{item.price}}</span>
              <ChooseBtn
                  :goodsAmount="item.number"
                  @addNumberClick="addNumberClick(item.goodId,item.number)"
                  @minusNumberClick="minusNumberClick(item.goodId,item.number)"
                  class="fr"></ChooseBtn>
            </p>
          </div>
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
  import ChooseBtn from '../../components/choose-btn'
  export default {
    name: 'index',
    components: { ChooseBtn },
    data () {
      return {
        goodsNum: 0, // 购物车中有多少件商品
        cartLIst: [
          { goodId: 101, goodName: '绿鲜知 三宝白菜 约1kg 火锅食材 新鲜蔬菜绿鲜知 三宝白菜 约1kg 火锅食材', price: '123', goodImg: 'https://gd2.alicdn.com/imgextra/i2/2604680124/O1CN011CmpaBtCRK980u7_!!2604680124.jpg_400x400.jpg_.webp', number: 2 },
          { goodId: 102, goodName: '绿鲜知三宝白菜约1kg火锅食材新鲜蔬菜绿鲜知三宝白菜约1kg 火锅食材 ', price: '123', goodImg: 'https://gd2.alicdn.com/imgextra/i2/2604680124/O1CN011CmpaBtCRK980u7_!!2604680124.jpg_400x400.jpg_.webp', number: 2 },
          { goodId: 104, goodName: '商品3', price: '123', goodImg: 'https://gd2.alicdn.com/imgextra/i2/2604680124/O1CN011CmpaBtCRK980u7_!!2604680124.jpg_400x400.jpg_.webp', number: 2 },
          { goodId: 105, goodName: '商品4', price: '123', goodImg: 'https://gd2.alicdn.com/imgextra/i2/2604680124/O1CN011CmpaBtCRK980u7_!!2604680124.jpg_400x400.jpg_.webp', number: 3 },
          { goodId: 107, goodName: '商品5', price: '123', goodImg: 'https://gd2.alicdn.com/imgextra/i2/2604680124/O1CN011CmpaBtCRK980u7_!!2604680124.jpg_400x400.jpg_.webp', number: 4 },
          { goodId: 107, goodName: '商品6', price: '123', goodImg: 'https://gd2.alicdn.com/imgextra/i2/2604680124/O1CN011CmpaBtCRK980u7_!!2604680124.jpg_400x400.jpg_.webp', number: 4 }
        ]
      }
    },
    methods: {
      // 修改购物车中商品的数量
      minusNumberClick (goodid, number) {
        // 根据id修改数据库中的数据
        // 然后返回购物车表数据库中的数据

      },
      addNumberClick (goodid, number) {
        // 根据id修改数据库中的数据
        // 然后返回购物车表数据库中的数据
      },
      // 根据userif查询购物车中的商品信息
      queryCartList (usreid) {}
    },
    created () {
    }
  }
</script>

<style scoped lang="scss">
  .cart {
    padding: 0 40px;
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
  }
</style>
