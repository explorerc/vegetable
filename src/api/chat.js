import {
  ajax
} from '../utils/ajax'

export function getSdkparams (aid, uid) {
  return this.$ajax({
    method: 'post',
    url: `/frontend/live/sdk-token?activityId=${aid}&activityUserId=${uid}`,
    params: {
      activityId: aid,
      activityUserId: uid
    }
  })
}
export function broadcast (aid, type, content) {
  return ajax({
    method: 'post',
    url: `/index/send`,
    params: {
      activityId: aid,
      type: type,
      content: content
    }
  })
}
export function getHistroychat (activityId) {
  return ajax({
    method: 'get',
    url: `/common/paas/message-list`,
    params: {
      activityId: activityId
    }
  })
}
