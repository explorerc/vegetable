import utils from 'src/utils'

const GuidManage = {
  getLiveInfo (data) { // 获取报名表单
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
  }
}
export default GuidManage
