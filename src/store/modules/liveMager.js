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
    }
  },
  getters: {
    emailInfo: state => state.emailInfo
  },
  mutations: {
    [types.EMAIL_INFO] (state, reLoad) {
      state.emailInfo = reLoad
    }
  }
}

export default liveMagerModules
