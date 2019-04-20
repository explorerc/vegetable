<template>
 <div class="coupon">
 <div class="" v-for="coupon in coupons">
 <!--<div class="" >-->
     <CouponCard :coupon="coupon"></CouponCard>
     <!--<CouponCard></CouponCard>-->
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
       this.$get(couponServer.GET_COUPON_INFO).then((res) => function () {
         if (res.code === 200) {
           this.coupons = res.data.data
           console.log(this.coupons)
         }
       })
       console.log(this.coupons)
     }
   },
   created () {
     debugger
     this.queryList()
   }
 }
</script>

<style scoped lang="scss">
 .coupon {
  padding: 0 20px;
 }

</style>