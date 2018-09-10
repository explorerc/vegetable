<template>
  <div class="v-select">
    <el-select v-model="val" placeholder="请选择">
      <el-option
        v-for="item in selectOptions"
        :key="item.value"
        :label="item.label"
        :value="item.label">
      </el-option>
    </el-select>
  </div>
</template>
<script>
  export default {
    props: {
      selectOptions: Array,
      selectValue: String
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
      selectValue: function () {
        this.val = this.selectValue
      },
      val: function () {
        this.$emit('selected', this.val)
      }
    },
    methods: {
    }
  }
</script>
<style lang="scss" scoped>
.v-select {
  width: 100%;
  .el-select {
    width: 100%;
  }
}
</style>
