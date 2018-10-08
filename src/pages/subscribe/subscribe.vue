<template>
  <div class="v-guid">
    <p class="v-title">
      {{activity.title}}
    </p>
    <component :is="currentView"
               @changeView='changeView'></component>
  </div>
</template>
<script>
import loginMixin from 'components/login-mixin'
import activityService from 'src/api/activity-service'
import comApply from './com-apply'
import comSuccess from './com-success'
import comStart from './com-start'
import comForm from './com-form'
import comValid from './com-valid'
import comInit from './com-init'
export default {
  mixins: [loginMixin],
  data () {
    return {
      currentView: 'comInit', // 当前渲染页面
      activity: {
        viewCondition: '', // APPOINT是报名活动 ''是无限制活动
        title: '', // 活动标题
        description: '', // 活动简介
        isCountdown: false, // 是否显示倒计时
        countDown: '', // 距离活动开始时间（秒）
        status: '' // 当前活动状态
      }
    }
  },
  mounted () {
    this.getInfo()
  },
  created () {
  },
  components: {
    comInit, // 初始化页面
    comForm, // 报名页面
    comApply, // 预约页面
    comSuccess, // 预约成功页面
    comValid, // 报名验证
    comStart // 已经开始页面
  },
  methods: {
    changeView (res) {
      this.currentView = res
    },
    async getInfo () {
      await this.$config({ handlers: true }).$get(activityService.GET_LIVEINFO, {
        activityId: this.$route.params.id
      }).then((res) => {
        this.activity.title = res.data.activity.title
      }).catch((err) => {
        this.$messageBox({
          header: '提示',
          content: err.msg,
          confirmText: '确定',
          handleClick: (e) => {
            if (e.action === 'cancel') {
            } else if (e.action === 'confirm') {
            }
          }
        })
      })
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
