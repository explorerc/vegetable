import utils from 'src/utils'

const GuidManage = {
  getLiveInfo (data) { // 获取报名表单
    return utils.ajax({
      method: 'post',
      url: '/frontend/live/info',
      params: data
    })
  }
}
export default GuidManage
