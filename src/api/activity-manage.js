import utils from 'src/utils'

const ActivityManage = {
  getLiveInfo (data) { // 获取活动信息
    return utils.ajax({
      method: 'post',
      url: '/frontend/live/info',
      params: data
    })
  },
  getRegactivity (data) { // 获取参会信息
    return utils.ajax({
      url: '/frontend/user/reg-activity',
      params: data
    })
  }
}
export default ActivityManage
