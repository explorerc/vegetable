<template>
  <div class="btn-container" v-if="value.enable">
    <div ref="target" class="btn-content">
      <a target="_black" :href="value.hrefType === '_sub' ? `${MOBILE_HOST}subscribe/${id}` : value.link | voidLink" ><com-button :styles="styles">{{value.text}}</com-button></a>
    </div>
  </div>
</template>

<script>
import editMixin from './mixin'

export default {
  mixins: [editMixin],
  data () {
    return {
      id: this.$route.params.id,
      MOBILE_HOST: process.env.MOBILE_HOST
    }
  },
  computed: {
    styles () {
      return {
        'background-color': this.value.bgColor,
        'color': this.value.fontColor
      }
    }
  }

}
</script>

<style scoped lang="scss">
.btn-container {
  display: block;
  position: relative;
  font-size: 14px;
  text-align: center;
  button {
    border: 0;
  }
}
</style>
