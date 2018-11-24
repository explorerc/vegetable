import wx from 'weixin-js-sdk'
import EventBus from 'src/utils/eventBus.js'
export default function wxShare (wxShare) {
  wx.config({
    debug: false,
    appId: wxShare.wxShareData.appId,
    timestamp: wxShare.wxShareData.timestamp,
    nonceStr: wxShare.wxShareData.nonceStr,
    signature: wxShare.wxShareData.signature,
    jsApiList: [
      // 所有要调用的 API 都要加到这个列表中
      'checkJsApi',
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
      'onMenuShareQQ',
      'onMenuShareWeibo',
      'onMenuShareQZone'
    ]
  })
  wx.ready(function () {
    wx.checkJsApi({
      jsApiList: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'onMenuShareQZone'
      ], // 需要检测的JS接口列表，所有JS接口列表见附录2,
      success: function (res) {
        // 以键值对的形式返回，可用的api值true，不可用为false
        // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
        console.log(res.checkResult, 789486)
      }
    })
    wx.onMenuShareTimeline({
      title: wxShare.shareData.title, // 分享标题
      desc: wxShare.shareData.shareDatadesc,
      link: wxShare.shareData.shareDatalink +
        (wxShare.shareUser.shareId
          ? '?shareId=' + wxShare.shareUser.shareId + '-3'
          : ''), // 分享链接
      imgUrl: wxShare.shareData.shareDataimgUrl, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
        _log.track(Vhall_User_Actions.SHARE, {
          event: 3
        })
        EventBus.$emit('red_packet', {
          condition: 1
        })
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    })
    wx.onMenuShareAppMessage({
      title: wxShare.shareData.title, // 分享标题
      desc: wxShare.shareData.shareDatadesc,
      link: wxShare.shareData.shareDatalink +
        (wxShare.shareUser.shareId
          ? '?shareId=' + wxShare.shareUser.shareId + '-3'
          : ''), // 分享链接
      imgUrl: 'https://test-zhike.vhall.com/m/static/img/share@2x.png', // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
        _log.track(Vhall_User_Actions.SHARE, {
          event: 2
        })
        EventBus.$emit('red_packet', {
          condition: 1
        })
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    })
    wx.onMenuShareQQ({
      title: wxShare.shareData.title, // 分享标题
      desc: wxShare.shareData.shareDatadesc,
      link: wxShare.shareData.shareDatalink +
        (wxShare.shareUser.shareId
          ? '?shareId=' + wxShare.shareUser.shareId + '-2'
          : ''), // 分享链接
      imgUrl: wxShare.shareData.shareDataimgUrl, // 分享图标
      success: function () {
        _log.track(Vhall_User_Actions.SHARE, {
          event: 1
        })
        EventBus.$emit('red_packet', {
          condition: 1
        })
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    })
    wx.onMenuShareWeibo({
      title: wxShare.shareData.title, // 分享标题
      desc: wxShare.shareData.shareDatadesc,
      link: wxShare.shareData.shareDatalink +
        (wxShare.shareUser.shareId
          ? '?shareId=' + wxShare.shareUser.shareId + '-1'
          : ''), // 分享链接
      imgUrl: wxShare.shareData.shareDataimgUrl, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
        _log.track(Vhall_User_Actions.SHARE, {
          event: 4
        })
        EventBus.$emit('red_packet', {
          condition: 1
        })
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    })
    wx.onMenuShareQZone({
      title: wxShare.shareData.title, // 分享标题
      desc: wxShare.shareData.shareDatadesc,
      link: wxShare.shareData.shareDatalink +
        (wxShare.shareUser.shareId
          ? '?shareId=' + wxShare.shareUser.shareId + '-2'
          : ''), // 分享链接
      imgUrl: wxShare.shareData.shareDataimgUrl, // 分享图标
      success: function () {
        EventBus.$emit('red_packet', {
          condition: 1
        })
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    })
  })
  wx.error(function (res) {
    // $("#chatlist").append("<p>"+JSON.stringify(res)+"</p>");
  })
}
