import utils from 'src/utils'
let token = ''
const VideoManage = {
  getSdkToken (data) { // 获取观看端token
    return utils.ajax({
      method: 'post',
      url: '/frontend/live/sdk-token',
      params: data
    })
  },
  sendAnn (data) {
    return utils.ajax({
      method: 'post',
      url: '/initiator/channel/send-announcement',
      params: data,
      headers: {
        Authorization: token
      }
    })
  },
  // 禁言
  muteMember (data) {
    return utils.ajax({
      method: 'post',
      url: '/initiator/user/gag',
      params: data,
      headers: {
        Authorization: token
      }
    })
  },
  // 全体禁言
  muteAll (data) {
    return utils.ajax({
      method: 'get',
      url: '/initiator/user/gag-all',
      params: data,
      headers: {
        Authorization: token
      }
    })
  },
  // 踢出
  kickMember (data) {
    return utils.ajax({
      method: 'post',
      url: '/initiator/user/kick',
      params: data,
      headers: {
        Authorization: token
      }
    })
  },
  /* 获取发起端token，每个活动的token不同 */
  getLiveTtoken (activityId) {
    return new Promise((resolve, reject) => {
      utils.ajax({
        method: 'get',
        url: '/initiator/live/get-token',
        params: {
          activityId: activityId
        }
      }).then(res => {
        token = res.data
        resolve(res)
      }).catch((e) => {
        reject(e)
      })
    })
  }
}
export default VideoManage
