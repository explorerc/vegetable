<template>
  <div class="container">
    <template v-if="defaultImg">
      <img :src="defaultImg"
           alt=""
           class="v-guid-img">
    </template>
    <template v-else>
      <img src="../../assets/image/guid.png"
           alt=""
           class="v-guid-img">
    </template>
    <router-view class="app-view"></router-view>
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
    this.share()
    this.getInfo()
  },
  computed: {
    defaultImg () {
      return this.imgUrl ? this.$imgHost + '/' + this.imgUrl : ''
    }
  },
  methods: {
    getInfo () {
      this.$config({ handlers: true }).$get(activityService.GET_LIVEINFO, {
        activityId: this.$route.params.id
      }).then((res) => {
        document.title = res.data.guide ? res.data.guide.title : res.data.activity.title
        this.imgUrl = res.data.guide ? res.data.guide.imgUrl : ''
      })
      // .catch((err) => {
      //   this.$messageBox({
      //     header: '提示',
      //     content: err.msg,
      //     confirmText: '确定',
      //     handleClick: (e) => {
      //       if (e.action === 'cancel') {
      //       } else if (e.action === 'confirm') {
      //       }
      //     }
      //   })
      // })
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
          this.wxShare.shareData.shareDataimgUrl = res.data.imgUrl ? res.data.imgUrl : ''
        }
      })
      wxShareFunction(this.wxShare)
    }
  }
}
</script>


<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  background-color: #fff;
  overflow: auto;
  .v-guid-img {
    display: block;
    width: 100%;
    height: 790px;
  }
  .app-view /deep/ {
    display: block;
    width: 100%;
    padding: 30px;
    .primary-button {
      display: block;
      width: 490px;
      height: 90px;
      border-radius: 50px;
      margin: 35px auto;
    }
    .v-registered {
      font-size: 22px;
      text-align: center;
      display: block;
      margin: 15px auto 0;
      color: #555;
    }
  }
}
</style>
