import utils from 'src/utils'

const ActivityManage = {
  getJoininfo (id) { // 获取用户信息
    return this.$ajax({
      method: 'post',
      url: '/frontend/user/join-info',
      params: {
        activityId: id
      }
    })
  },
  subScribe (data) { // 提交预约活动
    return utils.ajax({
      method: 'post',
      url: '/frontend/user/order-activity',
      params: data
    })
  },
  getUserinfo (data) { // 获取用户信息
    return utils.ajax({
      method: 'get',
      url: '/user/consumer-user/info',
      params: data
    })
  },
  getWebinarinfo (data) { // 获取活动信息
    return utils.ajax({
      method: 'post',
      url: '/frontend/live/info',
      params: data
    })
  },
  getShareInfo (data) { // 获取分享信息
    return utils.ajax({
      method: 'post',
      url: '/frontend/share/info',
      params: data
    })
  },
  async getRegactivity (data) { // 获取参会信息
    const promsObj = await new Promise((resolve, reject) => {
      utils.ajax({
        method: 'get',
        url: '/frontend/user/reg-activity',
        params: data
      }).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
    return promsObj
  },
  getForm (data) { // 获取报名表单
    return utils.ajax({
      method: 'post',
      url: '/frontend/question/info',
      params: data
    })
  },
  saveForm (data) { // 提交报名表单
    return utils.ajax({
      method: 'post',
      url: '/frontend/user/apply-activity',
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
  /* 获取真实在线人数 */
  queryOnlineNum (data) {
    return utils.ajax({
      method: 'post',
      url: '/frontend/channel/get-online-num',
      params: data
    })
  },
  getShareSign (url) { // 获取微信分享所需token，appid等数据
    return utils.ajax({
      method: 'get',
      url: '/common/wechat/get-share-sign?url=' + url
    })
  }
}
export default ActivityManage
