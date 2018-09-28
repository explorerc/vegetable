// import utils from 'src/utils'
// let token = ''
const VideoManage = {
  // // 踢出
  // kickMember (data) {
  //   return utils.ajax({
  //     method: 'post',
  //     url: '/initiator/user/kick',
  //     params: data,
  //     headers: {
  //       Authorization: token
  //     }
  //   })
  // },
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
