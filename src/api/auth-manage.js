import utils from 'src/utils'

const loginManage = {
  login (data) {
    return utils.ajax({
      method: 'post',
      url: '/user/consumer-user/mobile-login',
      params: data
    })
  },
  getCode (data) {
    return utils.ajax({
      method: 'post',
      url: '/common/message/send-code',
      params: data
    })
  },
  getLoginInfo () {
    return utils.ajax({
      method: 'post',
      url: '/user/consumer-user/info'
    })
  }
}
export default loginManage
