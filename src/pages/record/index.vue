<template>
  <div class="record">
    <div class="head">
      <button @click="orderKindClick('pay')"><i class="iconfont icon-daifukuan"></i><span>待付款</span></button>
      <button @click="orderKindClick('send')"><i class="iconfont icon-daifahuo"></i><span>待发货</span></button>
      <button @click="orderKindClick('receive')"><i class="iconfont icon-daishouhuo"></i><span>待收货</span></button>
      <button @click="orderKindClick('accomplish')"><i class="iconfont icon-quanbudingdan"></i><span>已完成</span></button>
    </div>
    <div class="content">
      <div class="order pay" ref="pay">
        <div class="title">待付款({{payOrder.length}})</div>
        <div class="good-info-box" v-for="goodInfo in payOrder">
          <goodInfo :goodInfo="goodInfo"></goodInfo>
        </div>
      </div>
      <div class="order send" ref="send">
        <div class="title">待发货({{sendOrder.length}})</div>
        <div class="good-info-box" v-for="goodInfo in sendOrder">
          <goodInfo :goodInfo="goodInfo"></goodInfo>
        </div>
      </div>
      <div class="order receive" ref="receive">
        <div class="title">待收货({{receiveOrder.length}})</div>
        <div class="good-info-box" v-for="goodInfo in receiveOrder">
          <goodInfo :goodInfo="goodInfo"></goodInfo>
        </div>
      </div>
      <div class="order accomplish" ref="accomplish"><div class="title">完成订单({{allOtherOrder.length}})</div>
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
          params: {
            userId: 1
          }
        }).then(res => {
          this.ordersInfo = res.data
          console.log(this.ordersInfo)
          for (let i = 0; i < this.ordersInfo.length; i++) {
            if (this.ordersInfo[i].isPayed === 0) {
              this.payOrder.push(this.ordersInfo[i])
            } else if (this.ordersInfo[i].isSend === 0) {
              this.sendOrder.push(this.ordersInfo[i])
            } else if (this.ordersInfo[i].isReceived === 0) {
              this.receiveOrder.push(this.ordersInfo[i])
            } else if (this.ordersInfo[i].isReceived === 1) {
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
      },
      // 顶部订单分类，点击滑动到指定位置
      orderKindClick (el) {
        let orderScrollTop
        if (el === 'pay') {
          orderScrollTop = this.$refs.pay.getBoundingClientRect().top
        } else if (el === 'send') {
          orderScrollTop = this.$refs.send.getBoundingClientRect().top
        } else if (el === 'receive') {
          orderScrollTop = this.$refs.receive.getBoundingClientRect().top
        } else if (el === 'accomplish') {
          orderScrollTop = this.$refs.accomplish.getBoundingClientRect().top
        }
        document.getElementsByClassName('container')[0].scrollTop = orderScrollTop
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
      height: 100%;
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
