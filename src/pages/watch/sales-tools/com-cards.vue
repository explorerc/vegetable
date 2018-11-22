<template>
  <div class="cards-wrap">
    <img :src="imgHost+'/'+cardData.pic" >
    <div class="desc">{{cardData.desc}}</div>
    <a v-if="cardData.btn_display === 'Y'" :href="cardData.btn_link" target="_blank"><el-button  round class='btn primary-button' @click='view(cardData.recommend_card_id)'>{{cardData.btn_text}}</el-button></a>
    <i class="close" @click='close'></i>
  </div>
</template>

<script>
import salesService from 'src/api/activity-service'
export default {
  data () {
    return {
      activityId: this.$route.params.id,
      imgHost: process.env.IMGHOST + '/'
    }
  },
  props: {
    cardData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    view (id) {
      this.$get(salesService.GET_VISITED_CARD, {
        recommend_card_id: id,
        activity_id: this.activityId
      }).then((res) => {
        console.log(res)
      })
    },
    close () {
      this.$emit('closeCards')
    }
  }
}
</script>

<style lang='scss' scoped>
@import '~assets/css/mixin.scss';
.cards-wrap {
  text-align: center;
  width: 552px;
  height: 460px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  height: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -221px;
  margin-left: -276px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(34, 34, 34, 0.5);
  z-index: 9999;
  padding-bottom: 40px;
  border-radius: 4px;
  img {
    width: 100%;
    height: 250px;
  }
  a {
    display: inline-block;
  }
  .desc {
    word-break: break-all;
    color: $color-font-sub;
    padding: 30px;
    font-size: 12px;
    text-align: left;
  }
  .btn {
    padding: 0;
    width: 180px;
    height: 60px;
    line-height: 60px;
  }
  .close {
    cursor: pointer;
    z-index: 99;
    width: 53px;
    height: 53px;
    border-radius: 200px;
    position: absolute;
    bottom: -69px;
    left: 50%;
    margin-left: -26.6px;
    background: url('~assets/image/card-close.png') no-repeat center;
    background-size: contain;
  }
}
</style>
