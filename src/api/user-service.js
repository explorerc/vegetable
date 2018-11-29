export default {
  GET_USERREGACTIVITY: '/frontend/user/reg-activity', // 获取观看端用户参会信息
  GET_JOININFO: '/frontend/user/join-info', // //  获取用户是否已预约 获取用户是否已报名 isApply是否预约，true是false否 isOrder是否报名，true是false否
  GET_CONSUMERINFO: '/user/consumer-user/info', // 获取用户信息
  POST_MOBILELOGIN: '/user/consumer-user/mobile-login', // 手机登录
  GET_VISITOR_INFO: '/frontend/user/visitor-info', // 获取游客信息
  POST_VERIFY_MOBILE: '/common/message/verify-code',
  POST_UPDATE_MOBILE: '/user/consumer-user/update-mobile',
  POST_CHANGE_PASSWORD: '/user/business-user/update-password',
  GET_CENTER_INFO: '/user/consumer-user/center-info', // 获取个人中心信息
  POST_CENTER_UPDATE: '/user/consumer-user/update', // 更新个人中心信息
  POST_COMMIT_WITHDRAW: '/user/bill/consumer-commit-withdraw', // 提现
  GET_WITHDRAW_LIST: '/user/bill/consumer-withdraw-list' // 明细
}
