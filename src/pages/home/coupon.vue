<template>
 <div class="coupon" v-title data-title="优惠券">
 <div class="" v-for="coupon in coupons">
     <CouponCard :coupon="coupon" @couponClick="couponClick"></CouponCard>
 </div>
  <mt-popup
          v-model="popupVisible"
          popup-transition="popup-fade">
   <div class="pop-con">{{popContent}}</div>
  </mt-popup>
 </div>
</template>

<script>
 import CouponCard from '../../components/coupon-card'
 import couponServer from '../../api/coupon'

 export default {
   name: 'coupon',
   components: { CouponCard },
   data () {
     return {
       coupons: [],
       popupVisible: false,
       popContent: ''
     }
   },
   methods: {
     queryCoupon () {
       // alert(goodId)
       this.$get(couponServer.GET_COUPON_INFO).then((res) => {
         if (res.code === 200) {
           this.coupons = res.data
         }
       })
     },
     // 用户 获取优惠券
     couponClick (id) {
       this.$get(couponServer.GET_COUP_USER_ADD, {'couponId': id}).then((res) => {
         debugger
         if (res.code === 200) {
           this.popContent = '领取成功'
         } else if (res.code === 300) {
           this.popContent = '你已经领取过优惠券'
         } else {
           this.popContent = '领取失败'
         }
         this.popupVisible = true
         setTimeout(function () {
           clearTimeout(this.timer)
           this.timer = null
           this.popupVisible = false
         }, 3000)
       })
     }
   },
   created () {
     this.queryCoupon()
   }
 }
</script>

<style scoped lang="scss">
 .coupon {
  padding: 0 20px;
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
 }

</style>