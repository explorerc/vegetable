import utils from 'src/utils'

const VideoManage = {
  getSdkToken (data) {
    return utils.ajax({
      method: 'post',
      url: '/frontend/live/sdk-token',
      params: data
    })
  }
}
export default VideoManage
