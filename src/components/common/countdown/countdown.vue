<template>
  <div class="v-cundown">
    <span>{{showTime.day}}</span>天<span>{{showTime.hour}}</span>小时<span>{{showTime.minute}}</span>分<span>{{showTime.second}}</span>秒
  </div>
</template>
<script>
  // import Editor from './info-editor'
  export default {
    props: {
      time: Number // 数值
    },
    data () {
      return {
        showTime: {
          day: 0,
          hour: 0,
          minute: 0,
          second: 0
        },
        timer: 0
      }
    },
    mounted () {
    },
    components: {
    },
    created () {
      this.countDown(this.time)
    },
    watch: {
    },
    methods: {
      fomatDate (sec) {
        this.showTime.day = sec / 3600 / 24 >> 0
        if (this.showTime.day < 9) {
          this.showTime.day = '0' + this.showTime.day
        }
        this.showTime.hour = ((sec / 3600 % 24 >> 0) + '').padStart(2, 0)
        this.showTime.minute = ((sec / 60 % 60 >> 0) + '').padStart(2, 0)
        this.showTime.second = ((sec % 60 >> 0) + '').padStart(2, 0)
        if (sec === 0) {
          this.$emit('timeOut')
          clearInterval(this.timer)
        }
      },
      countDown (time) {
        let interval = setInterval(i => {
          this.fomatDate(time--)
          if (time < 0) {
            clearInterval(interval)
          }
        }, 1000)
      }
    }
  }
</script>
<style lang="scss" scoped>
.v-cundown {
  margin-bottom: 80px;
  span {
    display: inline-block;
    font-size: 63px;
    color: #fc5659;
    padding: 0 5px;
    text-align: center;
  }
}
</style>
