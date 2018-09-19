import utils from 'src/utils'

let token = ''
/* 直播互动 */
const VideoManage = {
  // 获取参会id
  getActivityUserId (data) {
    return utils.ajax({
      method: 'get',
      url: '/frontend/user/reg-activity',
      params: data
    })
  },
  getSdkToken (data) {
    return utils.ajax({
      method: 'post',
      url: '/frontend/live/sdk-token',
      params: data
    })
  },
  /* paas token获取接口 */
  getPaasParam (activityId) {
    return utils.ajax({
      method: 'get',
      url: '/initiator/live/get-sdk-token',
      params: {
        activityId: activityId
      },
      headers: {
        Authorization: token
      }
    })
  },
  /***
   * 查询默认回放信息
   * @param data
   * @returns {*}
   */
  queryPlayBackInfoById (activityId) {
    return utils.ajax({
      method: 'post',
      url: '/frontend/replay/default-replay',
      params: {
        activityId: activityId
      }
    })
  },
  /**
   *  通过id获取暖场信息
   */
  queryWarmInfoById (id) {
    return utils.ajax({
      method: 'post',
      url: '/manage/warm-up-manage/get',
      params: {
        activityId: id
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
