<template>
  <div class="cart">
    <span>共有{{cartList.length}}件商品</span>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <li v-for="(item,idx) in cartList">
        <div class="cart-item-top">
          <input type="checkbox" name="goods" :value="item.goodId" :checked="item.isChecked"  @click="clickSelected(idx)">
          <img :src="item.goodImg" alt="" class="good-img">
          <div class="good-des">
            <p class="good-name">{{item.goodName}}</p>
            <div class="price-box clearfix">
              <span class="price">￥{{item.price}}</span>
              <div class="clearfix choose-box fr" style="display: inline-block" @click.stop="">
                <ChooseBtn
                  :goodsAmount="item.number"
                  @addNumberClick="addNumberClick(item.goodId,item.number)"
                  @minusNumberClick="minusNumberClick(item.goodId,item.number)"
                  class=""></ChooseBtn>
              </div>
            </div>
          </div>
        </div>
      </li>

    </ul>
    <div class="cart-bottom clearfix">
      <div class="fl"> <input type="checkbox" name="goods" @click="allClickSelected" :checked="this.isAllChecked"><span>全选</span></div>
      <div class="fr">
        <span>合计：<span>¥{{cartTotalMoney}}</span></span>
        <button class="pay-btn">结算</button>
      </div>
    </div>
  </div>
</template>

<script>
  import ChooseBtn from '../../components/choose-btn'

  export default {
    name: 'index',
    components: {ChooseBtn},
    data () {
      return {
        goodsNum: 0, // 购物车中有多少件商品
        cartList: [
          {
            goodId: 101,
            goodName: '绿鲜知 三宝白菜 约1kg 火锅食材 新鲜蔬菜绿鲜知 三宝白菜 约1kg 火锅食材',
            price: '123',
            goodImg: 'https://gd2.alicdn.com/imgextra/i2/2604680124/O1CN011CmpaBtCRK980u7_!!2604680124.jpg_400x400.jpg_.webp',
            number: 1,
            isChecked: false
          },
          {
            goodId: 102,
            goodName: '绿鲜知三宝白菜约1kg火锅食材新鲜蔬菜绿鲜知三宝白菜约1kg 火锅食材 ',
            price: '123',
            goodImg: 'https://gd2.alicdn.com/imgextra/i2/2604680124/O1CN011CmpaBtCRK980u7_!!2604680124.jpg_400x400.jpg_.webp',
            number: 2,
            isChecked: false
          },
          {
            goodId: 104,
            goodName: '商品3',
            price: '123',
            goodImg: 'https://gd2.alicdn.com/imgextra/i2/2604680124/O1CN011CmpaBtCRK980u7_!!2604680124.jpg_400x400.jpg_.webp',
            number: 2,
            isChecked: false
          },
          {
            goodId: 105,
            goodName: '商品4',
            price: '123',
            goodImg: 'https://gd2.alicdn.com/imgextra/i2/2604680124/O1CN011CmpaBtCRK980u7_!!2604680124.jpg_400x400.jpg_.webp',
            number: 3,
            isChecked: false
          },
          {
            goodId: 107,
            goodName: '商品5',
            price: '123',
            goodImg: 'https://gd2.alicdn.com/imgextra/i2/2604680124/O1CN011CmpaBtCRK980u7_!!2604680124.jpg_400x400.jpg_.webp',
            number: 4,
            isChecked: false
          },
          {
            goodId: 107,
            goodName: '商品6',
            price: '123',
            goodImg: 'https://gd2.alicdn.com/imgextra/i2/2604680124/O1CN011CmpaBtCRK980u7_!!2604680124.jpg_400x400.jpg_.webp',
            number: 4,
            isChecked: false
          }
        ],
        cartTotalMoney: 0, // 勾选的商品总价格
        isAllChecked: false, // 不是全选
        selectedNum: 0 // 被选中的数量
      }
    },
    props: {
      isCartMange: {
        default: false,
        type: Boolean
      }
    },
    methods: {
      // 修改购物车中商品的数量
      minusNumberClick (goodid, number) {
        debugger
        console.log(goodid, number)
        // 根据id修改数据库中的数据
        // 然后返回购物车表数据库中的数据
      },
      addNumberClick (goodid, number) {
        // 根据id修改数据库中的数据
        // 然后返回购物车表数据库中的数据
      },
      // 根据userif查询购物车中的商品信息
      queryCartList (usreid) {
      },
      loadMore () {
        // this.loading = true
        // setTimeout(() => {
        //   let last = this.cartLIst[this.cartLIst.length - 1]
        //   for (let i = 1; i <= 10; i++) {
        //     this.cartLIst.push(last + i)
        //   }
        //   this.loading = false
        // }, 2500)
      },
      // 单选时计算价格
      clickSelected (idx) {
        this.cartList[idx].isChecked = !this.cartList[idx].isChecked
        // 计算被选中的数量
        // 判断是否被全选了
        if (this.cartList[idx].isChecked) {
          this.selectedNum++
          this.cartTotalMoney = this.cartList[idx].price * this.cartList[idx].number + this.cartTotalMoney
        } else {
          this.selectedNum--
          this.cartTotalMoney = this.cartTotalMoney - this.cartList[idx].price * this.cartList[idx].number
        }
        if (this.selectedNum === this.cartList.length) {
          this.isAllChecked = true
        } else {
          this.isAllChecked = false
        }
      },
      // 全选时计算价格
      allClickSelected () {
        this.isAllChecked = !this.isAllChecked
        for (let idx = 0; idx < this.cartList.length; idx++) {
          this.cartList[idx].isChecked = this.isAllChecked
          if (this.isAllChecked) {
            this.cartTotalMoney = this.cartList[idx].price * this.cartList[idx].number + this.cartTotalMoney
            this.selectedNum = this.cartList.length
          } else {
            this.cartTotalMoney = 0
            this.selectedNum = 0
          }
        }
      }
    },
    created () {
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
      height: 60px;
      bottom: 100px;
      left: 20px;
      background-color: #efefef;
      line-height: 60px;
      .fl {
        input {
          position: relative;
          top: 5px;
        }
      }
      .fr {
        button {
          background-color: $color-default;
          border: 1px solid $color-default;
          border-radius: 20px;
          color: #fff;
          padding: 0 20px;
          margin-left: 20px;
        }
      }
    }
  }
</style>
