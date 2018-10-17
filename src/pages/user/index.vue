<template>
  <div class="v-user">
    <div class="header">
      <img src="../../assets/image/avatar@2x.png"
           alt="">
      <p>

      </p>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      user: {
        name: '', // 姓名
        balance: '0', // 余额
        activityQuantity: 0 // 活动数量
      }
    }
  },
  created () {
  },
  computed: {
  },
  props: {
  },
  watch: {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.v-user /deep/ {
}
</style>
