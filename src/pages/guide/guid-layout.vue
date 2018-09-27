<template>
  <div class="container">
    <img src="../../assets/image/1.png" alt="" class="v-guid-img">
    <router-view class="app-view"></router-view>
  </div>
</template>

<script>
import wxShareFunction from '../../assets/js/wx-share.js'
import activityManage from 'api/activity-manage.js'
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
          desc: '', // 分享简介
          link: '', // 分享链接
          imgUrl: '' // 分享图片
        },
        shareUser: {
          shareId: '' // 分享者id
        }
      }
    }
  },
  created: function () {
    this.share()
  },
  components: {
    // 'com-menu': menu
  },
  // computed: {
  //   ...mapState('liveMager', {
  //     joinInfo: state => state.joinInfo
  //   })
  // },
  methods: {
    async share () { // 微信分享
      let _url = window.location.href
      // if (this.joinInfo.activityUserId) {
      //   _url = this.joinInfo.activityUserId ? `${_url}?shareId=${this.joinInfo.activityUserId}` : _url
      // }
      this.wxShare.shareData.link = _url
      await activityManage.getShareSign(_url).then((res) => { // 获取微信分享签名等信息
        if (res.code === 200) {
          this.wxShare.wxShareData.appId = res.data.appId
          this.wxShare.wxShareData.timestamp = res.data.timestamp
          this.wxShare.wxShareData.nonceStr = res.data.nonceStr
          this.wxShare.wxShareData.signature = res.data.signature
        }
      })
      await activityManage.getShareInfo({ // 获取分享标题等信息
        route: 'guide_route'
      }).then((res) => {
        if (res.code === 200 && res.data) {
          this.wxShare.shareData.title = res.data.title ? res.data.title : ''
          this.wxShare.shareData.desc = res.data.description ? res.data.description : ''
          this.wxShare.shareData.imgUrl = res.data.imgUrl ? res.data.imgUrl : ''
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
