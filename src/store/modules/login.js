import * as types from '../mutation-types'
const loginModules = {
  namespaced: true,
  state: {
    isLogin: false,
    loginInfo: {},
    userInfo: {}
  },
  getters: {
    isLoginGetter: (state) => state.isLogin,
    loginInfo: (state) => state.loginInfo,
    userInfo: (state) => state.userInfo
  },
  mutations: {
    [types.UPDATE_IS_LOGIN] (state, status) {
      state.isLogin = status
    },
    [types.LOGIN_INFO] (state, status) {
      state.loginInfo = status
    },
    [types.USER_INFO] (state, status) {
      state.userInfo = status
    }
  }
}

export default loginModules
