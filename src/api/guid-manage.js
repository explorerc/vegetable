import utils from 'src/utils'

const GuidManage = {
  getQuestionInfo (data) { // 获取报名表单
    return utils.ajax({
      method: 'post',
      url: '/frontend/question/info',
      params: data
    })
  },
  applyActivity (data) { // 提交报名表单
    return utils.ajax({
      method: 'post',
      url: '/frontend/user/apply-activity',
      params: data
    })
  }
}
export default GuidManage
