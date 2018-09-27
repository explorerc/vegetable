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
  /* 获取参会人员信息 */
  getJoinInfo () {
    return utils.ajax({
      method: 'get',
      url: '/initiator/user/get-user-info'
    })
  }
}
export default loginManage
