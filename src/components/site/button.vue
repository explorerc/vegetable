<template>
  <div class="btn-container" v-if="value.enable">
    <div ref="target" class="btn-content">
      <a target="_black" :href="value.link | voidLink"><com-button :styles="styles">{{value.text}}</com-button></a>
    </div>
    <com-edit ref="editTarget">
      <div>
        背景色
        <el-color-picker show-alpha v-model="value.bgColor"></el-color-picker>
      </div>
      <div>
        文字色
        <el-color-picker show-alpha v-model="value.fontColor"></el-color-picker>
      </div>
      <div>
        <com-input placeholder="按钮文字" v-model="value.text"></com-input>
      </div>
      <div>
        <com-input placeholder="按钮链接" v-model="value.link"></com-input>
      </div>
    </com-edit>
  </div>
</template>

<script>
import editMixin from './mixin'
import ComEdit from './edit'

export default {
  mixins: [editMixin],
  components: {
    ComEdit
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
