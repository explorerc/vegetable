import utils from 'src/utils'

const IdentifyingcodeManage = {
  getCodeId (data) {
    data.__errHandler = true
    return utils.ajax({
      method: 'post',
      url: '/common/message/get-captchaid',
      params: data
    })
  },
  getCode (data) {
    data.__errHandler = true
    return utils.ajax({
      method: 'post',
      url: '/common/message/send-code',
      params: data
    })
  }
}
export default IdentifyingcodeManage
