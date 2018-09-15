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
.v-select /deep/ {
  width: 100%;
  margin-bottom: 50px;
  .el-select {
    width: 100%;
    height: 90px;
    line-height: 88px;
    border: 1px solid #ccc;
    border-radius: 8px;
    .el-input__inner {
      color: #888;
      padding: 0 20px;
    }
  }
}
</style>
