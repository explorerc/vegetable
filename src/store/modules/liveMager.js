import * as types from '../mutation-types'

const liveMagerModules = {
  namespaced: true,
  state: {
    emailInfo: {
      activityId: '',
      emailInviteId: '',
      emailTemplateId: 1,
      title: '',
      content: '',
      desc: '',
      senderName: ''
    },
    liveDevices: {
      camera: '',
      mic: ''
    },
    roomPaas: {
      accountId: '',
      appId: '',
      channelRoom: '',
      hdRoom: '',
      liveRoom: '',
      token: '',
      channelId: ''
    },
    activityInfo: {}, // 活动信息
    joinInfo: {}, // 参会信息
    downTimer: 0
  },
  getters: {
    liveDevices: state => state.liveDevices,
    emailInfo: state => state.emailInfo,
    roomPaas: (state) => state.roomPaas,
    activityInfo: (state) => state.activityInfo,
    joinInfo: state => state.joinInfo,
    downTimer: state => state.downTimer
  },
  mutations: {
    [types.VIDEO_DEVICE] (state, reLoad) {
      state.liveDevices = reLoad
    },
    [types.EMAIL_INFO] (state, reLoad) {
      state.emailInfo = reLoad
    },
    [types.ROOM_PAAS] (state, reLoad) {
      state.roomPaas = Object.assign({}, reLoad, { channelId: reLoad.channelRoom })
    },
    [types.ACTIVITY_INFO] (state, reLoad) {
      state.activityInfo = reLoad
    },
    [types.JOIN_INFO] (state, reLoad) {
      state.joinInfo = reLoad
    },
    [types.DOWN_TIMER] (state, reLoad) {
      state.downTimer = reLoad
    }
  }
}

export default liveMagerModules
