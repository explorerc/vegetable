import utils from 'src/utils'

const GuidManage = {
  getQuestionInfo (data) {
    return utils.ajax({
      method: 'post',
      url: '/frontend/question/info',
      params: data
    })
  }
}
export default GuidManage
