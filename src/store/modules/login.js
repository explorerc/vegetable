import * as types from '../mutation-types'
const loginModules = {
  namespaced: true,
  state: {
    isLogin: false, // 是否登录
    loginInfo: {}, // 登录信息
    centerInfo: {
      consumerUser: {
        nickName: '',
        email: '',
        userName: '',
        consumerUserId: 0,
        mobile: ''
      },
      other: {
        planActivityCount: 0,
        prizeCount: 0
      }
    }
  },
  getters: {
    isLoginGetter: (state) => state.isLogin,
    loginInfo: (state) => state.loginInfo,
    centerInfo: (state) => state.centerInfo
  },
  mutations: {
    [types.UPDATE_IS_LOGIN] (state, status) {
      state.isLogin = status
    },
    [types.LOGIN_INFO] (state, status) {
      state.loginInfo = status
    },
    [types.CENTER_INFO] (state, status) {
      state.centerInfo = status
    }
  }
}

export default loginModules
