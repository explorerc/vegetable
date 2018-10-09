<template>
  <div class="template-container">
    <component class="template-content"
               :editAble="false"
               v-model="data"
               v-bind:is="com"></component>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import temp1 from './template1.vue'
import temp2 from './template2.vue'
import temp4 from './template4.vue'
import wxShareFunction from '../../assets/js/wx-share.js'
import activityService from 'src/api/activity-service'

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
      tid: this.$route.params.id,
      wxShare: { // 微信分享数据
        wxShareData: {
          appId: '',
          timestamp: '',
          nonceStr: '',
          signature: ''
        },
        shareData: {
          title: '', // 分享标题
          shareDatadesc: '', // 分享简介
          shareDatalink: '', // 分享链接
          shareDataimgUrl: '' // 分享图片
        },
        shareUser: {
          shareId: '' // 分享者id
        }
      }
    }
  },
  mounted () {
    this.init()
    this.shareFunction()
  },
  computed: {
    ...mapState('liveMager', {
      joinInfo: (state) => state.joinInfo
    })
  },
  methods: {
    async init () {
      await this.$config({ handlers: true }).$get(activityService.GET_LIVEINFO, {
        activityId: this.tid
      }).then((res) => {
        this.share.title = res.data.activity.title
        this.share.des = res.data.activity.description
        this.share.imgUrl = res.data.activity.imgUrl
        this.$config({ handlers: true }).$get(activityService.GET_SHAREINFO, { // 获取分享标题等信息
          route: 'officia_route',
          param: this.$route.params.id
        }).then((res) => {
          if (res.data) {
            this.share.title = res.data.title
            this.share.des = res.data.description
            this.share.imgUrl = res.data.imgUrl
          }
        })
        this.$config({ loading: true }).$get(activityService.GET_TEMPLATE, {
          activityId: this.tid
        }).then((res) => {
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
    },
    async shareFunction () { // 微信分享
      let _url = window.location.href
      if (this.joinInfo.activityUserId) {
        _url = this.joinInfo.activityUserId ? `${_url}?shareId=${this.joinInfo.activityUserId}` : _url
      }
      this.wxShare.shareData.shareDatalink = _url
      await this.$config({ handlers: true }).$get(activityService.GET_SHARESIGN, { // 获取微信分享签名等信息
        url: _url
      }).then((res) => {
        this.wxShare.wxShareData.appId = res.data.appId
        this.wxShare.wxShareData.timestamp = res.data.timestamp
        this.wxShare.wxShareData.nonceStr = res.data.nonceStr
        this.wxShare.wxShareData.signature = res.data.signature
      })
      await this.$config({ handlers: true }).$get(activityService.GET_SHAREINFO, { // 获取分享标题等信息
        route: 'officia_route',
        param: this.$route.params.id
      }).then((res) => {
        if (res.data) {
          this.wxShare.shareData.title = res.data.title ? res.data.title : ''
          this.wxShare.shareData.shareDatadesc = res.data.description ? res.data.description : ''
          this.wxShare.shareData.shareDataimgUrl = res.data.imgUrl ? this.$imgHost + '/' + res.data.imgUrl : ''
        }
      })
      wxShareFunction(this.wxShare)
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
