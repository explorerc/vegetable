<template>
  <div class="container">
    <div>
      <div v-if="showGuidImg" class="v-guid-img img-bg" :style="{backgroundImage:`url(${defaultImg})`}"></div>
      <div v-else class="v-guid-img"></div>
      <router-view class="app-view"></router-view>
    </div>
  </div>
</template>

<script>
import wxShareFunction from '../../assets/js/wx-share.js'
import activityService from 'src/api/activity-service'
// import { mapState } from 'vuex'
export default {
  data () {
    return {
      name: '',
      showGuidImg: false,
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
      },
      imgUrl: ''
    }
  },
  created: function () {
    if (this.isWx()) {
      this.share()
    }
    this.getInfo()
  },
  computed: {
    defaultImg () {
      if (!this.imgUrl) return `${process.env.PUBLIC_PATH}${process.env.SUB_DIR}/img/guide.jpg`
      return this.$imgHost + '/' + this.imgUrl
    }
  },
  methods: {
    getInfo () {
      this.$config({ handlers: true }).$get(activityService.GET_LIVEINFO, {
        activityId: this.$route.params.id
      }).then((res) => {
        document.title = res.data.guide ? res.data.guide.title : res.data.activity.title
        var iframe = document.createElement('iframe')
        iframe.style.display = 'none'
        iframe.setAttribute('src', '/')
        var d = function () {
          setTimeout(function () {
            iframe.removeEventListener('load', d)
            document.body.removeChild(iframe)
          }, 0)
        }
        iframe.addEventListener('load', d)
        document.body.appendChild(iframe)
        this.imgUrl = res.data.guide ? res.data.guide.imgUrl : ''
        this.showGuidImg = true
      }).catch(() => {
        this.$router.replace('/empty')
      })
    },
    async share () { // 微信分享
      let _url = window.location.href
      // if (this.joinInfo.activityUserId) {
      //   _url = this.joinInfo.activityUserId ? `${_url}?shareId=${this.joinInfo.activityUserId}` : _url
      // }
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
        route: 'guide_route',
        param: this.$route.params.id
      }).then((res) => {
        if (res.data) {
          this.wxShare.shareData.title = res.data.title ? res.data.title : ''
          this.wxShare.shareData.shareDatadesc = res.data.description ? res.data.description : ''
          this.wxShare.shareData.shareDataimgUrl = res.data.imgUrl ? 'https:' + this.$imgHost + '/' + res.data.imgUrl : 'https://static.vhallyun.com/mp-prod/cd/07/cd07b91439a0cbd45b0ad693219bbc3e.jpg'
        }
      })
      wxShareFunction(this.wxShare)
    },
    isWx () {
      var ua = navigator.userAgent.toLowerCase()
      var isWeixin = ua.indexOf('micromessenger') !== -1
      if (isWeixin) {
        return true
      }
      return false
    }
  }
}
</script>


<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  background-color: #fff;
  -webkit-overflow-scrolling: touch;
  overflow: auto;
  .v-guid-img {
    display: block;
    width: 100%;
    height: 790px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .app-view /deep/ {
    display: block;
    width: 100%;
    padding: 30px;
    .input-form {
      margin-bottom: 30px;
    }
    .primary-button {
      display: block;
      width: 490px;
      height: 90px;
      border-radius: 50px;
      margin: 35px auto;
      font-size: 32px;
      &.v-disabled {
        background-color: #555;
        color: #fff;
      }
    }
    .v-registered {
      font-size: 32px;
      text-align: center;
      display: block;
      margin: 15px auto 0;
      color: #555;
    }
  }
}
</style>
