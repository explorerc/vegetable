import * as types from '../mutation-types'
const loginModules = {
  namespaced: true,
  state: {
    isLogin: false
  },
  getters: {
    isLoginGetter: (state) => state.isLogin
  },
  mutations: {
    [types.UPDATE_IS_LOGIN] (state, status) {
      state.isLogin = status
    }
  }
}

export default loginModules
