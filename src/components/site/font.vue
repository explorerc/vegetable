<template>
  <div class="font-container" v-if="value.enable">
    <div ref="target">
      <div class="font-content" v-html="value.content"></div>
    </div>
    <com-edit ref="editTarget" follow :offsetTop="-38" class="font-edit" @show="showHandle" @hide="hideHandle">
      <com-editer class="font-editer" v-model="value.content" ></com-editer>
    </com-edit>
  </div>
</template>

<script>
import ComEditer from 'src/components/ve-html5-editer'
import editMixin from './mixin'
import ComEdit from './edit'

export default {
  mixins: [editMixin],
  components: {
    ComEdit, ComEditer
  },
  data () {
    return {
      sizeEditor: false,
      height: 0
    }
  },
  methods: {
    showHandle (rect) {
      this.$refs.target.style.cssText = 'visibility:hidden'
      // let height = this.$refs.editTarget.$el.querySelector('.vue-html5-editor .toolbar').offsetHeight
      // console.log(rect.height - height)
      this.$refs.editTarget.$el.querySelector('.vue-html5-editor .content').style.cssText = `height:auto;min-height:100px`
    },
    hideHandle () {
      this.$refs.target.style.cssText = ''
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
        height: 100%;
        line-height: inherit;
        background-color: transparent;
        .toolbar {
          background-color: white;
        }
        .content {
          padding: 0;
          overflow: hidden;
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
