<template>
  <div class="input-form">
    <label class="v-label">
      {{label}}
    </label>
    <com-input :value.sync="val"
               :placeholder="placeholder"
               :class="{warning: errorMsg}"
               :type="type"
               :max-length="maxLength"
               :error-tips="errorMsg"
               @focus="inputFocus"
               :disabled="isDisabled"></com-input>
  </div>
</template>
<script>
export default {
  props: {
    label: String,
    inputVal: String,
    placeholder: String,
    errorMsg: String,
    maxLength: Number,
    isDisabled: String,
    type: {
      type: String,
      default: 'input'
    }
  },
  data () {
    return {
      val: ''
    }
  },
  mounted () {
  },
  components: {
  },
  created () {
  },
  watch: {
    val: {
      handler (n) {
        this.$emit('update:inputVal', n)
      },
      immediate: true
    },
    inputVal: {
      handler (n) {
        this.val = n
      },
      immediate: true
    }
  },
  methods: {
    inputFocus () {
      this.$emit('update:errorMsg', '')
    }
  }
}
</script>
<style lang="scss" scoped>
.input-form /deep/ {
  width: 100%;
  height: 90px;
  margin-bottom: 50px;
  position: relative;
  .v-label {
    display: block;
    text-align: left;
  }
  .v-input {
    display: block;
    height: 90px;
    line-height: 88px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 30px;
    padding: 0 20px;
    font-size: 28px;
    color: #888;
    &.warning {
      border-color: #fc5659;
    }
    &:hover {
      border-color: #4b5afe;
    }
  }
  .error-msg {
    position: absolute;
    font-size: 14px;
    color: #fc5659;
    top: 98px;
    left: 0;
  }
}
</style>
