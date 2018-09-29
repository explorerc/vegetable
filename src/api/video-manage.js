// import utils from 'src/utils'

// let token = ''
/* 直播互动 */
const VideoManage = {
  // /* paas token获取接口 */
  // getPaasParam (activityId) {
  //   return utils.ajax({
  //     method: 'get',
  //     url: '/initiator/live/get-sdk-token',
  //     params: {
  //       activityId: activityId
  //     },
  //     headers: {
  //       Authorization: token
  //     }
  //   })
  // },
  /**
   *  通过id获取暖场信息
   */
  // /* 获取发起端token，每个活动的token不同 */
  // getLiveTtoken (activityId) {
  //   return new Promise((resolve, reject) => {
  //     utils.ajax({
  //       method: 'get',
  //       url: '/initiator/live/get-token',
  //       params: {
  //         activityId: activityId
  //       }
  //     }).then(res => {
  //       token = res.data
  //       resolve(res)
  //     }).catch((e) => {
  //       reject(e)
  //     })
  //   })
  // }
}
export default VideoManage
