<template>
  <div class="template-container">
    <component class="template-content" :editAble="false" v-model="data" v-bind:is="com"></component>
  </div>
</template>

<script>
import siteService from 'src/api/site-manage'
import activityManage from 'src/api/activity-manage.js'

import temp1 from './template1.vue'
import temp2 from './template2.vue'
import temp4 from './template4.vue'

export default {
  components: {
    't0478320': temp1,
    't0478321': temp2,
    't0478323': temp4
  },
  data () {
    return {
      com: '',
      isPreview: true,
      share: {
        des: '',
        title: '',
        imgUrl: '',
        link: location.href
      },
      data: {},
      tid: this.$route.params.id
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      activityManage.getLiveInfo({
        activityId: this.tid
      }).then(res => {
        this.share.title = res.data.activity.title
        this.share.des = res.data.activity.description
        this.share.imgUrl = res.data.activity.imgUrl
        activityManage.getShareInfo({
          route: 'officia_route'
        }).then((res) => {
          if (res.data && res.data.title) {
            this.share.title = res.data.title
            this.share.des = res.data.description
            this.share.imgUrl = res.data.imgUrl
          }
        })
        siteService.getSiteData({
          __loading: true,
          activityId: this.tid
        }).then(res => {
          let data = JSON.parse(res.data.value)
          this.com = `t${data.tid}`
          data.editAble = true
          let dataStr = JSON.stringify(data).replace(/font-size:\s(\d+)px;/g, function ($0, $1) {
            return $0.replace($1, $1 / 2)
          })
          data = JSON.parse(dataStr)
          this.data = data
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
.template-container {
  overflow: auto;
  height: 100%;
  .header {
    height: 54px;
    line-height: 54px;
    text-align: center;
    border-bottom: 1px solid #999;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    background-color: white;
    .title {
      font-size: 18px;
      span {
        font-size: 14px;
      }
    }
    .back {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 110px;
      text-align: center;
      border-left: 1px solid #999;
      border-right: 1px solid #999;
      cursor: pointer;
    }
    .save {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 110px;
      text-align: center;
      border-left: 1px solid #999;
      border-right: 1px solid #999;
      cursor: pointer;
    }
    .preview-group {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      border-left: 1px solid #999;
      a {
        padding: 0 18px;
        height: 100%;
        float: left;
        cursor: pointer;
        border-right: 1px solid #999;
      }
    }
  }
}
</style>
