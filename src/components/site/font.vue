<template>
  <div class="font-container" v-if="value.enable">
    <div ref="target">
      <div class="font-content" v-html="value.content"></div>
    </div>
  </div>
</template>

<script>
import editMixin from './mixin'
export default {
  mixins: [editMixin],
  props: {
    offTop: {
      type: Number,
      default: -38
    }
  },
  data () {
    return {
      sizeEditor: false,
      height: 0
    }
  },
  methods: {
    showHandle (rect) {
      // this.$refs.target.style.cssText = 'visibility:hidden'
      // let height = this.$refs.editTarget.$el.querySelector('.vue-html5-editor .toolbar').offsetHeight
      // console.log(rect.height - height)
      // this.$refs.editTarget.$el.querySelector('.vue-html5-editor .content').style.cssText = `height:auto;min-height:300px`
    },
    hideHandle () {
      // this.$refs.target.style.cssText = ''
    }
  }
}
</script>

<style scoped lang="scss">
.font-container /deep/ {
  display: inline-block;
  position: relative;
  font-size: 14px;

  .font-content {
    width: 100%;
  }
  .font-edit {
    .font-editer {
      min-width: auto;
      height: 100%;
      .vue-html5-editor {
        min-height: 400px;
        line-height: inherit;
        background-color: transparent;
        position: relative;
        border-radius: 0px;
        .toolbar {
          background-color: white;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
        }
        .content {
          padding: 0;
          position: absolute;
          top: 37px;
          left: 0;
          overflow: auto;
          width: 100%;
          bottom: 0;
        }
      }
      li {
        padding: 0 10px;
        .icon {
          width: 16px;
          height: 16px;
        }
      }
      li[title='列表'],
      li[title='图片'],
      li[title='全屏'] {
        display: none;
      }
    }
  }
}
</style>
