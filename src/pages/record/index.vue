<template>
  <div class="record">
    <div class="head">
      <button><i class="iconfont icon-daifukuan"></i><span>待付款</span></button>
      <button><i class="iconfont icon-daifahuo"></i><span>待发货</span></button>
      <button><i class="iconfont icon-daishouhuo"></i><span>待收货</span></button>
      <button><i class="iconfont icon-quanbudingdan"></i><span>已完成</span></button>
    </div>
    <div class="content">
      <div class="order pay">
        <div class="title">待付款({{payOrder.length}})</div>
        <div class="good-info-box" v-for="goodInfo in payOrder">
          <goodInfo :goodInfo="goodInfo"></goodInfo>
        </div>
      </div>
      <div class="order">
        <div class="title">待发货({{sendOrder.length}})</div>
        <div class="good-info-box" v-for="goodInfo in sendOrder">
          <goodInfo :goodInfo="goodInfo"></goodInfo>
        </div>
      </div>
      <div class="order">
        <div class="title">待收货({{receiveOrder.length}})</div>
        <div class="good-info-box" v-for="goodInfo in receiveOrder">
          <goodInfo :goodInfo="goodInfo"></goodInfo>
        </div>
      </div>
      <div class="order"><div class="title">完成订单({{allOtherOrder.length}})</div>
        <div class="good-info-box" v-for="goodInfo in allOtherOrder">
          <goodInfo :goodInfo="goodInfo"></goodInfo>
        </div></div>
    </div>
  </div>
</template>

<script>
  import order from 'src/api/order'
  import goodInfo from 'src/components/good-info'
  export default {
    name: 'index',
    components: { goodInfo },
    data () {
      return {
        goodsInfo: [
          {
            id: 101,
            name: '绿鲜知 三宝白菜 约1kg 火锅食材 新鲜蔬菜绿鲜知 三宝白菜 约1kg 火锅食材',
            price: '123',
            disprice: '',
            imgUrl: 'https://gd2.alicdn.com/imgextra/i2/2604680124/O1CN011CmpaBtCRK980u7_!!2604680124.jpg_400x400.jpg_.webp',
            number: 1,
            isChecked: false
          },
          {
            id: 102,
            name: '绿鲜知三宝白菜约1kg火锅食材新鲜蔬菜绿鲜知三宝白菜约1kg 火锅食材 ',
            price: '123',
            disprice: '',
            imgUrl: 'https://gd2.alicdn.com/imgextra/i2/2604680124/O1CN011CmpaBtCRK980u7_!!2604680124.jpg_400x400.jpg_.webp',
            number: 2,
            isChecked: false
          },
          {
            id: 104,
            name: '商品3',
            price: '123',
            disprice: '',
            imgUrl: 'https://gd2.alicdn.com/imgextra/i2/2604680124/O1CN011CmpaBtCRK980u7_!!2604680124.jpg_400x400.jpg_.webp',
            number: 2,
            isChecked: false
          },
          {
            id: 105,
            name: '商品4',
            price: '123',
            disprice: '',
            imgUrl: 'https://gd2.alicdn.com/imgextra/i2/2604680124/O1CN011CmpaBtCRK980u7_!!2604680124.jpg_400x400.jpg_.webp',
            number: 3,
            isChecked: false
          },
          {
            id: 107,
            name: '商品5',
            price: '123',
            disprice: '',
            imgUrl: 'https://gd2.alicdn.com/imgextra/i2/2604680124/O1CN011CmpaBtCRK980u7_!!2604680124.jpg_400x400.jpg_.webp',
            number: 4,
            isChecked: false
          },
          {
            id: 107,
            name: '商品6',
            price: '123',
            disprice: '',
            imgUrl: 'https://gd2.alicdn.com/imgextra/i2/2604680124/O1CN011CmpaBtCRK980u7_!!2604680124.jpg_400x400.jpg_.webp',
            number: 4,
            isChecked: false
          }
        ],
        ordersInfo: [],
        payOrder: [],
        sendOrder: [],
        receiveOrder: [],
        allOtherOrder: []
      }
    },
    methods: {
      queryOrder () {
        this.$http.get(order.GET_ORDER_INFO, {
          userId: 1
        }).then(res => {
          this.ordersInfo = [
            {
              id: 101,
              name: '绿鲜知 三宝白菜 约1kg 火锅食材 新鲜蔬菜绿鲜知 三宝白菜 约1kg 火锅食材',
              price: '123',
              disprice: '',
              imgUrl: 'https://gd2.alicdn.com/imgextra/i2/2604680124/O1CN011CmpaBtCRK980u7_!!2604680124.jpg_400x400.jpg_.webp',
              number: 1,
              isChecked: false,
              isPay: 0,
              isSend: 0,
              isReceive: 0
            },
            {
              id: 102,
              name: '绿鲜知三宝白菜约1kg火锅食材新鲜蔬菜绿鲜知三宝白菜约1kg 火锅食材 ',
              price: '123',
              disprice: '',
              imgUrl: 'https://gd2.alicdn.com/imgextra/i2/2604680124/O1CN011CmpaBtCRK980u7_!!2604680124.jpg_400x400.jpg_.webp',
              number: 2,
              isChecked: false,
              isPay: 1,
              isSend: 0,
              isReceive: 0
            },
            {
              id: 104,
              name: '商品3',
              price: '123',
              disprice: '',
              imgUrl: 'https://gd2.alicdn.com/imgextra/i2/2604680124/O1CN011CmpaBtCRK980u7_!!2604680124.jpg_400x400.jpg_.webp',
              number: 2,
              isChecked: false,
              isPay: 0,
              isSend: 0,
              isReceive: 0
            },
            {
              id: 105,
              name: '商品4',
              price: '123',
              disprice: '',
              imgUrl: 'https://gd2.alicdn.com/imgextra/i2/2604680124/O1CN011CmpaBtCRK980u7_!!2604680124.jpg_400x400.jpg_.webp',
              number: 3,
              isChecked: false,
              isPay: 0,
              isSend: 0,
              isReceive: 0
            },
            {
              id: 107,
              name: '商品5',
              price: '123',
              disprice: '',
              imgUrl: 'https://gd2.alicdn.com/imgextra/i2/2604680124/O1CN011CmpaBtCRK980u7_!!2604680124.jpg_400x400.jpg_.webp',
              number: 4,
              isChecked: false,
              isPay: 1,
              isSend: 1,
              isReceive: 0
            },
            {
              id: 107,
              name: '商品6',
              price: '123',
              disprice: '',
              imgUrl: 'https://gd2.alicdn.com/imgextra/i2/2604680124/O1CN011CmpaBtCRK980u7_!!2604680124.jpg_400x400.jpg_.webp',
              number: 4,
              isChecked: false,
              isPay: 1,
              isSend: 1,
              isReceive: 1
            }
          ]
          for (let i = 0; i < this.ordersInfo.length; i++) {
            if (this.ordersInfo[i].isPay === 0) {
              this.payOrder.push(this.ordersInfo[i])
            } else if (this.ordersInfo[i].isSend === 0) {
              this.sendOrder.push(this.ordersInfo[i])
            } else if (this.ordersInfo[i].isReceive === 0) {
              this.receiveOrder.push(this.ordersInfo[i])
            } else if (this.ordersInfo[i].isReceive === 1) {
              this.allOtherOrder.push(this.ordersInfo[i])
            }
          }
          // for (let item in this.ordersInfo) {
          //   console.log(item)
          //   if (this.ordersInfo[item].isPay === 0) {
          //     this.payOrder.push(this.ordersInfo[item])
          //   } else if (this.ordersInfo[item].isSend === 0) {
          //     this.sendOrder.push(this.ordersInfo[item])
          //   } else if (this.ordersInfo[item].isReceive === 0) {
          //     this.receiveOrder.push(this.ordersInfo[item])
          //   }
          // }
        })
      }
    },
    created () {
      this.queryOrder()
    }
  }
</script>

<style scoped lang="scss">
  .record {
    margin: 10px 20px 0;
    .head {
      position: fixed;
      display: flex;
      top: 80px;
      left: 0;
      width: 100%;
      padding: 10px 0;
      background-color: #fff;
      border-radius: 10px;
      justify-content: space-around;
      button {
        color: #ef470f;
        border: none;
        background-color: #fff;
      }
      .iconfont {
        display: inline-block;
        width: 100%;
        text-align: center;
        font-size: 48px;
      }
    }
    .content {
      margin-top: 120px;
      .order {
        background-color: #fff;
        margin-top: 20px;
        padding: 10px;
        border-radius: 10px;
        .title {
          font-size: 36px;
          margin-bottom: 10px;
          border-bottom: 1px dashed #dcdfe6;
        }
      }
    }
  }

</style>
