<template>
  <div class="panel-container" v-if="value.enable">
    <div ref="target" class="panel" >
      <div class="media-container" v-if="value.bgType==='video'" >
        <video  autoplay loop muted ></video>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import editMixin from './mixin'

export default {
  mixins: [editMixin],
  data () {
    return {
      pro: '0%',
      host: process.env.IMGHOST + '/'
    }
  },
  mounted () {
    this.analysisData(this.value)
  },
  watch: {
    value: {
      handler (data) {
        if (data.bgType) {
          if (!this.value.color) {
            this.value.color = 'rgba(0, 0, 0, 1)'
          }
          this.$nextTick(() => {
            this.analysisData(this.value)
          })
        }
      },
      deep: true
    },
    color (value) {
      this.$refs.target.style.cssText = `background-color:${value}`
    },
    img (value) {
      this.$refs.target.style.cssText = `background-image:url(${value})`
    }
  },
  methods: {
    analysisData (data) {
      if (!this.$refs.target) return
      if (data.bgType === 'color') {
        this.$refs.target.style.cssText = `background-color:${data.color}`
      } else if (data.bgType === 'img') {
        this.$refs.target.style.cssText = `background-image:url(${data.img.indexOf('mp') === 0 ? this.host + data.img : data.img})`
      } else if (data.bgType === 'video' && data.video) {
        if (data.videoType === 'upload') {
          if (!(/^(http|https|<iframe):\/\//.test(data.video))) {
            this.$refs.target.querySelector('.media-container video').setAttribute('src', `${data.video.indexOf('mp') === 0 ? this.host + data.video : data.video}`)
          }
        } else {
          if (/^(http|https):\/\//.test(data.video)) {
            this.$refs.target.querySelector('.media-container video').setAttribute('src', `${data.video}`)
          }
        }
      }
    },
    progress (data) {
      this.pro = data.percent
    },
    uploadLoad (data) {
      let ret = JSON.parse(data.data)
      if (ret.code === 200) {
        if (this.value.bgType === 'img') {
          this.value.img = `${ret.data.name}`
        } else {
          this.value.video = `${ret.data.name}`
        }
        this.analysisData(this.value)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.panel-container /deep/ {
  position: relative;
  .panel {
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-origin: border-box;
    .media-container {
      height: 100%;
      overflow: hidden;
      video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
      iframe {
        video {
          object-fit: cover;
        }
      }
    }
  }
}
</style>
