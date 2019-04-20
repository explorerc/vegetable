<template>
  <div class="pay">
   <div class="user">
     <div class="info">
       <span class="name">{{userInfo.name}}</span><span class="tel">{{userInfo.tel}}</span>
     </div>
     <div>
       <div class="address"><i class="iconfont icon-dizhi"></i><span>{{userInfo.address}}</span></div>
     </div>
   </div>
   <div class="goods">
     <div class="item" v-for="good in selectedGoods" :key="good.id">
     <!--<div class="item">-->
       <div class="cover"><img :src="good.imgUrl" alt=""></div>
       <div class="name">{{good.name}}</div>
       <div class="sale">
         <p v-if="good.disPrice">￥{{good.disPrice}}</p>
         <p v-else>￥{{good.price}}</p>
         <p>X{{good.number}}</p>
       </div>
     </div>
   </div>
   <div class="pay-bottom clearfix">
      <div class="fr">
          <span class="total">共{{selectedGoods.length}}件，</span>
          <span>合计：¥{{cartTotalMoney}}</span>
          <button class="pay-btn" @click="payOrder">提交订单</button>
      </div>
  </div>
      <mt-popup
              v-model="popPayVisible"
              popup-transition="popup-fade">
          <div class="pop-con">
                这人是一个付钱的弹框
          </div>
      </mt-popup>
  </div>
</template>

<script>
  import goodInfo from 'src/components/good-info'
  // import cart from 'src/api/cart'
  import EventBus from 'src/utils/eventBus'
  import user from 'src/api/user-service'

  export default {
    name: 'index',
    components: {goodInfo},
    data () {
      return {
        selectedNum: 0, // 被选中的数量
        selectedGoods: [],
        userInfo: {},
        popPayVisible: false,
        timer: null
      }
    },
    methods: {
      queryUserInfo () {
        this.$http.get(user.GET_USER_INFO, {}).then((res) => {
          if (res.data.code === 200) {
            this.userInfo = res.data.data
            console.log(this.userInfo)
          }
        })
      },
      payOrder () {
        this.popPayVisible = true
      }
    },
    computed: {
      cartTotalMoney () {
        let total = 0
        this.selectedGoods.forEach((item, i) => {
          if (item.disPrice) {
            total += parseFloat(item.disPrice) * item.number
          } else {
            debugger
            total += parseFloat(item.price) * item.number
          }
        })
        return total.toFixed(2)
      }
    },
    created () {
      EventBus.$on('selectedGoods', (data) => {
        this.selectedGoods = data
        console.log(this.selectedGoods)
      })
      this.queryUserInfo()
    },
    watch: {
    }
  }
</script>

<style scoped lang="scss">
  @import '~assets/css/variable.scss';
  .pay {
    padding: 0 20px;
    .user {
        background-color: #fff;
        border-radius: 8px;
        padding: 30px 20px;
        .info {
            margin-bottom: 20px;
        }
        .name {
            font-size: 32px;
            color: #666;
        }
        .tel {
            margin-left: 20px;
            font-size: 28px;
            color: #999;
        }
        .icon-dizhi {
            margin-right: 15px;
            vertical-align: middle;
            font-size: 40px;
        }
        .address {
            font-size: 28px;
            color: #222;
        }
    }
    .goods {
        padding: 30px 20px;
        margin-top: 40px;
        background-color: #fff;
        border-radius: 4px;
        item {
            margin-bottom: 20px;
        }
        div {
            display: inline-block;
            vertical-align: middle;
        }
        .cover {

        }
        .name {
            width: 330px;
        }
        .sale {
            margin-left: 20px;
            text-align: right;
            max-width: 100px;
        }
        img {
            width: 180px;
            border-radius: 4px;
        }
    }
    .pay-bottom {
          position: fixed;
          display: block;
          width: calc(100% - 45px);
          height: 100px;
          bottom: 100px;
          left: 20px;
          background-color: #efefef;
          line-height: 100px;
        .pay-btn {
            height: 60px;
            background-color: $color-default;
            border: 1px solid $color-default;
            border-radius: 30px;
            color: #fff;
            padding: 0 20px;
            margin-left: 20px;
        }
        .total {
            color: #666;
        }
      }
  }
</style>
