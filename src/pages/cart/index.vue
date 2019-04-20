<template>
  <div class="cart">
    <span>共有{{cartList.length}}件商品</span>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <li v-for="(item,idx) in cartList">
        <goodInfo
          :goodInfo="item"
          :isCartShow="isCartShow"
          @minusNumberClick="minusNumberClick(item.id)"
          @addNumberClick="addNumberClick(item.id)"
          @clickSelected="clickSelected(idx)"></goodInfo>
      </li>

    </ul>
    <div class="cart-bottom clearfix">
      <div class="fl">
        <input type="checkbox" name="goods" @click="allClickSelected" :checked="this.isAllChecked">
        <span>全选</span>
      </div>
      <div class="fr" v-if="!isCartMange">
        <span>合计：<span>¥{{cartTotalMoney.toFixed(1)}}</span></span>
        <button class="pay-btn" @click="payGoods">结算({{selectedNum}})</button>
      </div>
      <div class="fr" v-else>
        <button class="delete-btn" @click="deleteSelected">删除</button>
      </div>
    </div>
      <mt-popup
              v-model="popPayVisible"
              popup-transition="popup-fade">
          <div class="pop-con">{{popCon}}</div>
      </mt-popup>
  </div>
</template>

<script>
  import goodInfo from 'src/components/good-info'
  import cart from 'src/api/cart'
  import EventBus from 'src/utils/eventBus'

  export default {
    name: 'index',
    components: {goodInfo},
    data () {
      return {
        goodsNum: 0, // 购物车中有多少件商品
        cartList: [
          // {
          //   id: 101,
          //   name: '绿鲜知 三宝白菜 约1kg 火锅食材 新鲜蔬菜绿鲜知 三宝白菜 约1kg 火锅食材',
          //   price: '123',
          //   disprice: '111',
          //   imgUrl: 'https://gd2.alicdn.com/imgextra/i2/2604680124/O1CN011CmpaBtCRK980u7_!!2604680124.jpg_400x400.jpg_.webp',
          //   number: 1,
          //   isChecked: false
          // },
          // {
          //   id: 101,
          //   name: '绿鲜知 三宝白菜 约1kg 火锅食材 新鲜蔬菜绿鲜知 三宝白菜 约1kg 火锅食材',
          //   price: '123',
          //   disprice: '111',
          //   imgUrl: 'https://gd2.alicdn.com/imgextra/i2/2604680124/O1CN011CmpaBtCRK980u7_!!2604680124.jpg_400x400.jpg_.webp',
          //   number: 1,
          //   isChecked: false
          // }
        ],
        selectedGoods: [],
        cartTotalMoney: 0, // 勾选的商品总价格
        isAllChecked: false, // 不是全选
        selectedNum: 0, // 被选中的数量
        isCartShow: true,
        popPayVisible: false,
        timer: null,
        popCon: ''
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
      minusNumberClick (id) {
        // console.log(userId, goodId, number)
        // 根据id修改数据库中的数据
        // 然后返回购物车表数据库中的数据
        this.$get(cart.GET_CART_MINNUM, {
          id: id
        }).then((res) => {
          if (res.code === 200) {
            for (let i = 0; i < this.cartList.length; i++) {
              if (this.cartList[i].id === id) {
                this.cartList[i].number--
              }
            }
            this.totalMoney()
          }
        })
      },
      addNumberClick (id) {
        // 根据id修改数据库中的数据
        // 然后返回购物车表数据库中的数据
        this.$get(cart.GET_CART_ADDNUM, {
          params: {
            id: id
          }
        }).then((res) => {
          if (res.code === 200) {
            for (let i = 0; i < this.cartList.length; i++) {
              if (this.cartList[i].id === id) {
                this.cartList[i].number++
              }
            }
            this.totalMoney()
          }
        })
      },
      // 根据userid查询购物车中的商品信息
      queryCartList () {
        this.cartList = []
        this.$get(cart.GET_CART_INFO).then((res) => {
          if (res.code === 200) {
            // this.cartList = res.data
            // console.log(re)
            for (let i = 0; i < res.data.length; i++) {
              this.cartList.push({ ...res.data[i], 'isChecked': false })
            }
          }
        }).catch(function (error) {
          console.log(error)
        })
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
      // 计算总价
      totalMoney () {
        this.cartTotalMoney = 0
        this.selectedNum = 0
        this.selectedGoods = []
        for (let i = 0; i < this.cartList.length; i++) {
          if (this.cartList[i].isChecked) {
            this.selectedGoods.push(this.cartList[i])
            this.cartTotalMoney = this.cartList[i].price * this.cartList[i].number + this.cartTotalMoney
            this.selectedNum = this.selectedNum + 1
          }
        }
      },
      // 单选时计算价格
      clickSelected (idx) {
        this.cartList[idx].isChecked = !this.cartList[idx].isChecked
        // 计算被选中的数量
        // 判断是否被全选了
        this.totalMoney()
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
            this.selectedGoods = [...this.cartList]
            this.totalMoney()
          } else {
            this.selectedGoods = []
            this.cartTotalMoney = 0
            this.selectedNum = 0
          }
        }
      },
      deleteSelected () {
        let deleteCartId = []
        // this.cartList.forEach(function (item, ind) {
        //   if (item.isChecked) {
        //     deleteCartId.push(item.id)
        //   }
        // })
        if (this.selectedGoods.length <= 0) {
          this.popPayVisible = true
          this.popCon = '请选择需要删除的商品'
          this.timer = setTimeout(function () {
            clearTimeout(this.timer)
            this.timer = null
            this.popPayVisible = false
          }, 3000)
          return
        }
        this.selectedGoods.forEach(function (item, ind) {
          deleteCartId.push(item.id)
        })
        // 请求数据库操作购物车表中的数据
        this.$http.get(cart.GET_CART_DEL, {
          params: {
            'ids': deleteCartId
          }
        }).then((res) => {
          if (res.status === 200) {
            this.queryCartList()
          }
        })
      },
      // 结算商品
      payGoods () {
        if (this.selectedNum > 0) {
          console.log(this.selectedGoods)
          // setTimeout(function () {
          setTimeout(() => {
            EventBus.$emit('selectedGoods', this.selectedGoods)
          }, 0)
          EventBus.$emit('currentTabComponent', 'Pay')
        } else {
          this.popPayVisible = true
          this.popCon = '请选择结算的商品'
          // if (this.timer) return
          this.timer = setTimeout(function () {
            clearTimeout(this.timer)
            this.timer = null
            this.popPayVisible = false
          }, 3000)
        }
      }
    },
    created () {
      this.queryCartList()
    },
    watch: {
      cartList: {
        handler (val, oldVal) {
          console.log(this.cartList)
        },
        deep: true
      },
      'cartList.isClicked': {
        handler (val, oldVal) {
          console.log(val)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '~assets/css/variable.scss';
  .cart {
    position: relative;
    padding: 0 40px 60px;
    .pop-con {
      min-width: 400px;
      max-width: 500px;
      height: 100px;
      line-height: 80px;
      padding: 10px 20px;
      text-align: center;
      border-radius: 50px;
      background: rgba(0,0,0,0.8);
      color: #fff;
    }
  /deep/ {
      .v-modal {
          opacity: 0;
      }
      .mint-popup {
          background-color: transparent;
      }
  }
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
