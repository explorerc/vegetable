import wx from 'weixin-js-sdk'
export default function wxShare (wxShare) {
  wx.config({
    debug: true,
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
      desc: wxShare.shareDatadesc,
      link: wxShare.shareDatalink +
        (wxShare.shareUser.share_id
          ? '?shareId=' + wxShare.shareUser.share_id + '-3'
          : ''), // 分享链接
      imgUrl: wxShare.shareDataimgUrl, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    })
    wx.onMenuShareAppMessage({
      title: wxShare.shareData.title, // 分享标题
      desc: wxShare.shareData.desc,
      link: wxShare.shareData.link +
        (wxShare.shareUser.share_id
          ? '?shareId=' + wxShare.shareUser.share_id + '-3'
          : ''), // 分享链接
      imgUrl: wxShare.shareData.imgUrl, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    })
    wx.onMenuShareQQ({
      title: wxShare.shareData.title, // 分享标题
      desc: wxShare.shareData.desc,
      link: wxShare.shareData.link +
        (wxShare.shareUser.share_id
          ? '?shareId=' + wxShare.shareUser.share_id + '-2'
          : ''), // 分享链接
      imgUrl: wxShare.shareData.imgUrl, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    })
    wx.onMenuShareWeibo({
      title: wxShare.shareData.title, // 分享标题
      desc: wxShare.shareData.desc,
      link: wxShare.shareData.link +
        (wxShare.shareUser.share_id
          ? '?shareId=' + wxShare.shareUser.share_id + '-1'
          : ''), // 分享链接
      imgUrl: wxShare.shareData.imgUrl, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    })
    wx.onMenuShareQZone({
      title: wxShare.shareData.title, // 分享标题
      desc: wxShare.shareData.desc,
      link: wxShare.shareData.link +
        (wxShare.shareUser.share_id
          ? '?shareId=' + wxShare.shareUser.share_id + '-2'
          : ''), // 分享链接
      imgUrl: wxShare.shareData.imgUrl, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    })
  })
  wx.error(function (res) {
    // $("#chatlist").append("<p>"+JSON.stringify(res)+"</p>");
    console.log(res, 6666)
  })
}
