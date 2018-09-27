import * as types from '../mutation-types'
const loginModules = {
  namespaced: true,
  state: {
    isLogin: false,
    loginInfo: {}
  },
  getters: {
    isLoginGetter: (state) => state.isLogin,
    loginInfo: (state) => state.loginInfo
  },
  mutations: {
    [types.UPDATE_IS_LOGIN] (state, status) {
      state.isLogin = status
    },
    [types.LOGIN_INFO] (state, status) {
      state.loginInfo = status
    }
  }
}

export default loginModules
