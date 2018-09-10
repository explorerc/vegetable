<template>
  <button
  class="com-button"
  :disabled="loading||disabled"
  :style="styles"
  :class="[{primary:type==='primary'},{loading:loading||disabled}]"
  @click="handleClick"
  >
    <i v-if="loading" class="iconfont icon-Loading"></i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ComButton',
  props: {
    type: String,
    loading: Boolean,
    disabled: Boolean,
    styles: Object
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style lang="scss" scoped>
.com-button {
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid transparent;
  border-color: #dcdfe6;
  border-radius: 4px;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: all 0.1s;
  user-select: none;
  padding: 10px 20px;
  font-size: 14px;
  &:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  &.primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &:hover {
      color: #fff;
      background-color: #66b1ff;
      border-color: #66b1ff;
    }
    &.loading {
      color: #fff;
      background-color: #66b1ff;
      border-color: #66b1ff;
    }
  }
  &.loading {
    cursor: default;
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  .icon-Loading {
    font-size: 12px;
    display: inline-block;
    margin-right: 2px;
    animation: com-rotating 1s linear infinite;
  }
}

@keyframes com-rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
