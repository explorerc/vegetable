<template>
  <div class="v-success">
    <p>
      <span v-if="event.type === 'guide'">报名</span>
      <span v-else="event.type === 'normal'">预约</span>
      成功
    </p>
    <p>直播开始前我们会发送提醒消息，请注意查收</p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        event: {
          type: 'guide' // guide是报名活动 normal是无限制活动
        }
      }
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
.v-success {
}
</style>
