<template>
  <div class="coupon-card">
      <div class="stamp stamp01">
          <div class="par">
              <!--<p>XXXXXX折扣店</p>-->
              <sub class="sign">￥</sub><span>50.00</span><sub>优惠券</sub><p>订单满100.00元</p></div>
          <div class="copy">副券<p>2015-08-13<br>2016-08-13</p></div>
          <i></i>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'coupon-card',
    props: {
      coupon: {
        default: null,
        type: Object
      }
    }
  }
</script>

<style scoped lang="scss">
    .coupon-card {
        /*padding: 0 20px;*/
        width: 100%;
    }
    .stamp {
        width: 100%;
        height: 200px;
        padding: 0 20px;
        position: relative;
        overflow: hidden;
        background: #F39B00;
        border-radius: 4px;
        &.stamp01 {
            background: radial-gradient(rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 5px, #F39B00 5px);

        }
        background-size: 15px 15px;
        background-position: 9px 3px;

        &:before {
            content: '';
            position: absolute;
            top:0;
            bottom:0;
            left:10px;
            right:10px;
            z-index: -1;
            background-color:#F39B00;
        }
        &:after {
            content: '';
            position: absolute;
            left: 10px;
            top: 10px;
            right: 10px;
            bottom: 10px;
            box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.5);z-index: -2;
        }
        i{
            position: absolute;
            left: 28%;
            top: 45px;
            height: 360px;
            width: 900px;
            background-color: rgba(255,255,255,.15);
            transform: rotate(-30deg);
        }
        .par{
            float: left;
            padding: 46px 15px;
            width:60%;
            border-right:2px dashed rgba(255,255,255,.3);
            text-align: left;
            height: 100%;
            p{
                color:#fff;
                margin-bottom: 10px;
            }
            span{
                font-size: 50px;
                color:#fff;
                margin-right: 10px;}
            .sign{
                font-size: 34px;
            }
            sub{
                position: relative;
                top:-5px;
                color:rgba(255,255,255,.8);
            }
        }
        .copy{
            display: inline-block;
            padding:21px 28px;
            width:40%;
            text-align: center;
            vertical-align: text-bottom;
            font-size: 36px;
            color: rgb(255,255,255);
            p{
                font-size: 30px;
                margin-top: 15px;
            }
        }
    }

</style>