<template>
  <div class="logo-container" v-if="value.enable">
    <div ref="target" class="logo-content">
      <a target="_blank" :href=" value.link | voidLink "><img class="left" :src="url"></a>
    </div>
  </div>
</template>

<script>
import editMixin from './mixin'
export default {
  mixins: [editMixin],
  data () {
    return {
      host: process.env.IMGHOST + '/'
    }
  },
  mounted () {
    console.log(this.url)
    console.log(this.host)
    console.log(this.value.url)
  },
  methods: {
    uploadLoad (data) {
      let ret = JSON.parse(data.data)
      if (ret.code === 200) {
        this.value.url = `${ret.data.name}`
      }
    }
  },
  computed: {
    url () {
      if (this.value.url.indexOf('mp') === 0) {
        return this.host + this.value.url
      } else {
        return `https://${this.value.url}`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.logo-container /deep/ {
  display: inline-block;
  width: 100%;
  height: 100%;
  position: relative;
  .logo-content {
    width: 100%;
    height: 100%;
    display: inline-block;
    max-height: 100%;
    img {
      width: 100%;
      max-width: 100%;
      max-height: 100%;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }
}
</style>
