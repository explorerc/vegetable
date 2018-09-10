const aModules = {
  namespaced: true,
  state: {
    data: 'aData'
  },
  getters: {
    aGetter: (state) => `i am ${state.data}`
  },
  mutations: {
    updateData (state, data) {
      state.data += data.str
    }
  },
  actions: {
    updateDataAsync ({
      commit
    }, data) {
      commit('updateData', data)
      commit('b/updateData', data, {
        root: true
      })
    }
  }
}

export default aModules
