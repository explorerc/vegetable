import utils from 'src/utils'

const sdkManage = {
  getSdkparams (data) {
    return utils.ajax({
      url: '/frontend/live/sdk-token',
      params: data
    })
  },
  send (data) {
    return utils.ajax({
      url: '/index/send',
      params: data
    })
  }
}
export default sdkManage
