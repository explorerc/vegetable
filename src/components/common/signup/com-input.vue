<template>
  <div class="input-form">
    <label class="v-label">
      {{label}}
    </label>
    <input type="text" :value="inputVal" class="v-input" :placeholder="placeholder">
  </div>
</template>
<script>
  export default {
    props: {
      label: String,
      inputVal: String,
      placeholder: String
    },
    data () {
      return {}
    },
    mounted () {
    },
    components: {
    },
    created () {
    },
    watch: {
    },
    methods: {
    }
  }
</script>
<style lang="scss" scoped>
.input-form {
  width: 100%;
  .v-label {
    display: block;
    text-align: left;
  }
  .v-input {
    display: block;
    height: 60px;
    line-height: 60px;
    width: 100%;
  }
}
</style>
