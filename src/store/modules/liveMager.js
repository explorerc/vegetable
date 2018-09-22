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
      token: ''
    },
    activityInfo: {}
  },
  getters: {
    liveDevices: state => state.liveDevices,
    emailInfo: state => state.emailInfo,
    roomPaas: (state) => state.roomPaas,
    activityInfo: (state) => state.activityInfo
  },
  mutations: {
    [types.VIDEO_DEVICE] (state, reLoad) {
      state.liveDevices = reLoad
    },
    [types.EMAIL_INFO] (state, reLoad) {
      state.emailInfo = reLoad
    },
    [types.ROOM_PAAS] (state, reLoad) {
      state.roomPaas = reLoad
    },
    [types.ACTIVITY_INFO] (state, reLoad) {
      state.activityInfo = reLoad
    }
  }
}

export default liveMagerModules
