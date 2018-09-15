import utils from 'src/utils'

const ActivityManger = {
  /**
   * 获取互动信息
   */
  webinarInfo (id) {
    return utils.ajax({
      method: 'GET',
      url: '/manage/base-manage/detail-activity',
      params: {
        id: id
      }
    })
  }
}
export default ActivityManger
