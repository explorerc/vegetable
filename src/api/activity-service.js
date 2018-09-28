export default {
  GET_JOININFO: '/frontend/user/join-info', // 获取参会信息
  POST_SUBSCRIBE: '/frontend/user/order-activity', // 提交预约活动
  GET_CONSUMERINFO: '/user/consumer-user/info', // 获取用户信息
  GET_LIVEINFO: '/frontend/live/info', // 获取活动信息
  GET_SHAREINFO: '/frontend/share/info', // 获取分享信息
  GET_USERREGACTIVITY: '/frontend/user/reg-activity', // 获取参会信息
  GET_QUESTIONINFO: '/frontend/question/info', // 获取报名表单
  POST_QUESTIONINFO: '/frontend/user/apply-activity', // 提交报名表单
  GET_CREATEACCESSTOKEN: '/common/paas/create-access-token', // 获取签名
  GET_ONLINENUM: '/frontend/channel/get-online-num', // 获取真实在线人数
  GET_SHARESIGN: '/common/wechat/get-share-sign', // 获取微信分享所需token，appid等数据
  GET_SDKTOKEN: '/frontend/live/sdk-token', // 获取观看端token
  GET_SEND: '/index/send', // 发送消息或者广播
  GET_SENDANNOUNCEMENT: '/initiator/channel/send-announcement', // 发送公告
  POST_GAG: '/initiator/user/gag', // 禁言
  POST_GAGALL: '/initiator/user/gag-all', // 全体禁言
  POST_KICK: '/initiator/user/kick', // 踢出
  POST_EMAILSUBSCRIBE: '/frontend/user/email-subscribe', // 订阅
  GET_MESSAGELIST: '/common/paas/message-list', // 获取历史消息
  GET_CAPTCHAID: '/common/message/get-captchaid', // 获取验证码初始化id
  GET_CODE: '/common/message/send-code', // 获取验证码
  GET_TEMPLATE: '/frontend/live/template', // 获取获取活动官网数据
  GET_DEFAULEREPLAY: '/frontend/replay/default-replay', // 查询默认回放信息
  GET_WARMINFO: '/manage/warm-up-manage/get' // 通过id获取暖场信息
}
