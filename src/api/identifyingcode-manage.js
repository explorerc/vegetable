import utils from 'src/utils'

const IdentifyingcodeManage = {
  getCodeId (data) {
    return utils.ajax({
      method: 'post',
      url: '/common/message/get-captchaid',
      params: data
    })
  },
  getCode (data) {
    return utils.ajax({
      method: 'post',
      url: '/common/message/send-code',
      params: data
    })
  }
}
export default IdentifyingcodeManage
