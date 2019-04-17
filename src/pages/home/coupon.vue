<template>
 <div class="coupon">
 <!--<div class="" v-for="coupon in coupons">-->
 <div class="" >
     <!--<CouponCard :coupon="coupon"></CouponCard>-->
     <CouponCard></CouponCard>
 </div>

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
       coupons: []
     }
   },
   methods: {
     queryList () {
       this.$http.get(couponServer.GET_COUPON_INFO, {}).then((res) => function () {
         debugger
         console.log(res)
         if (res.code === 200) {
           this.coupons = res.data
           console.log(this.coupons)
         }
       })
     }
   },
   created () {
     this.queryList()
   }
 }
</script>

<style scoped lang="scss">
 .coupon {
  padding: 0 20px;
 }

</style>