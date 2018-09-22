import utils from 'src/utils'

const ActivityManage = {
  getLiveInfo (data) { // 获取活动信息
    return utils.ajax({
      method: 'post',
      url: '/frontend/live/info',
      params: data
    })
  },
  getShareInfo (data) { // 获取报名表单
    return utils.ajax({
      method: 'post',
      url: '/frontend/share/info',
      params: data
    })
  },
  queryPassSdkInfo () {
    return utils.ajax({
      method: 'post',
      url: '/common/paas/create-access-token',
      params: {}
    })
  },
  getRegactivity (data) { // 获取参会信息
    return utils.ajax({
      url: '/frontend/user/reg-activity',
      params: data
    })
  },
  /* 获取真实在线人数 */
  queryOnlineNum (data) {
    return utils.ajax({
      method: 'post',
      url: '/frontend/channel/get-online-num',
      params: data
    })
  },
  /* 订阅 */
  emailSubscribe (data) {
    return utils.ajax({
      method: 'post',
      url: '/frontend/user/email-subscribe',
      params: data
    })
  }
}
export default ActivityManage
