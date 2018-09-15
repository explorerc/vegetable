<template>
  <div class="v-guid">
    <p class="v-title">
      {{activity.title}}
    </p>
    <div class="v-summary" v-if="!activity.isCountdown">
      {{activity.description}}
    </div>
    <div class="v-operation" v-if="activity.countDown >= 1800">  <!-- 距离活动开始大于30min -->
      <template v-if="activity.viewCondition === 'APPOINT'">  <!-- 报名活动 -->
        <com-countdown :time="activity.countDown" @timeOut="timeOut" v-if="activity.isCountdown"></com-countdown>
        <template v-if="activity.isApplay"> <!-- 已报名 -->
          <a href="javascript:;" class="v-submit">已报名</a>
        </template>
        <template v-else> <!-- 未报名 -->
          <a :href="goUrl" class="v-submit">立即报名</a>
          <a href="/CheckState" class="v-registered">已报名</a>
        </template>
      </template>
      <template v-else>  <!-- 无限制活动 -->
        <com-countdown :time="activity.countDown" @timeOut="timeOut" v-if="activity.isCountdown"></com-countdown>
        <a href="javascript:;" class="v-submit" v-if="activity.isOrder">已预约</a>
        <template v-else>
          <a :href="goUrl" class="v-submit">预约</a>
          <a href="/CheckState" class="v-registered">已预约</a>
        </template>
      </template>
    </div>
    <div class="v-operation" v-else> <!-- 距离活动开始小于30min -->
      <template v-if="activity.viewCondition === 'APPOINT'">  <!-- 报名活动 -->
        <com-countdown :time="activity.countDown" @timeOut="timeOut" v-if="activity.isCountdown"></com-countdown>
        <template v-if="activity.isApplay"> <!-- 已报名 -->
          <!-- ！！！跳转观看页面 -->
        </template>
        <template v-else>  <!-- 未报名 -->
          <a :href="goUrl" class="v-submit">立即报名</a>
          <a href="/CheckState" class="v-registered">已报名</a>
        </template>
      </template>
      <!-- 无限制活动 -->
      <!-- ！！！跳转观看页面 -->
    </div>
  </div>
</template>
<script>
  import comCountdown from '../../components/common/countdown/countdown'
  import activityManage from '../../api/activity-manage.js'
  export default {
    data () {
      return {
        goUrl: '',
        goRegisteredUrl: '', // 已报名检验页面
        activity: {
          viewCondition: '', // APPOINT是报名活动 ''是无限制活动
          isApplay: true, // 是否已报名
          isOrder: true, // 是否已预约
          title: '', // 活动标题
          description: '', // 活动简介
          isCountdown: false, // 是否显示倒计时
          countDown: ''// 距离活动开始时间（秒）
        }
      }
    },
    mounted () {
    },
    components: {
      'com-countdown': comCountdown
    },
    created () {
      this.goUrl = '/SignUp/' + this.$route.params.id
      let data = {
        'activityId': this.$route.params.id
      }
      activityManage.getLiveInfo(data).then((res) => {
        if (res.code === 200) {
          this.activity.viewCondition = res.data.activity.viewCondition
          this.activity.title = res.data.activity.title
          this.activity.countDown = res.data.activity.countDown
          this.activity.isCountdown = res.data.guide.showType === 'COUNTDOWN'
          this.activity.isApplay = res.data.joinInfo.isApplay
          this.activity.isOrder = res.data.joinInfo.isOrder

          if (this.activity.countDown < 1800) {
            if (this.activity.viewCondition === 'APPOINT') {
              if (this.activity.isApplay) {
                this.$router.replace('http://www.baidu.com')
              }
            } else {
              this.$router.replace('http://www.baidu.com')
            }
          }
        }
      })
    },
    watch: {
      countDown: function () {
        console.log(this.activity.countDown)
      }
    },
    methods: {
      timeOut () {
        console.log('活动开始啦')
      }
    }
  }
</script>
<style lang="scss" scoped>
.v-guid {
  width: 100%;
  .v-title {
    font-size: 40px;
    text-align: center;
    color: #222;
    padding-bottom: 20px;
  }
  .v-summary {
    text-align: left;
    font-size: 28px;
    line-height: 40px;
    color: #555;
  }
  .v-operation {
    text-align: center;
  }
  img {
    display: block;
    width: 100%;
    height: 320px;
  }
}
</style>
