<template>
  <div class="cards-wrap">
    <i class="close" @click='close'>×</i>
    <img :src="imgHost+'/'+cardData.pic" >
    <div class="desc">{{cardData.desc}}</div>
    <a v-if="cardData.btn_display === 'Y'" :href="cardData.btn_link" target="_blank"><el-button @click='view(cardData.recommend_card_id)'>{{cardData.btn_text}}</el-button></a>
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
.cards-wrap {
  text-align: center;
  width: 400px;
  min-height: 400px;
  height: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -200px;
  margin-left: -200px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(34, 34, 34, 0.5);
  padding: 20px;
  z-index: 99;
  img {
    width: 100%;
    // height: auto;
  }
  a {
    display: inline-block;
  }
}
</style>
