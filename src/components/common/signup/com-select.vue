<template>
  <div class="v-select">
    <select v-model="val">
      <option key="请选择" value="请选择">请选择</option>
      <option v-for="item in selectOptions" :key="item.id" :value="item.key">{{item.value}}</option>
    </select>
    <i class="iconfont icon-wenjuan_xialatixialajiantou-"></i>
  </div>
</template>
<script>
  export default {
    props: {
      selectOptions: Array
    },
    data () {
      return {
        val: '请选择'
      }
    },
    mounted () {
    },
    components: {
    },
    created () {
    },
    watch: {
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
  position: relative;
  width: 100%;
  margin-bottom: 50px;
  select {
    display: inline-block;
    width: 100%;
    height: 90px;
    line-height: 1.2 !important;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    transition: all 0.3s;
    padding: 0 10px;
    -webkit-appearance: none;
    font-size: 28px;
    &:focus {
      border: 1px solid #888;
    }
  }
  .iconfont {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    width: 30px;
    height: 30px;
    transition: transform 0.3s;
    transform: translateY(-50%);
    transform-origin: 50% 20%;
    color: #ccc;
  }
  select:focus + i.iconfont {
    transform: rotate(180deg);
  }
}
</style>
