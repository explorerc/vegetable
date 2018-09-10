const bModules = {
  namespaced: true,
  state: {
    data: 'bData'
  },
  getters: {
    bGetter: (state) => `i am ${state.data}`
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
      setTimeout(() => {
        commit('updateData', data)
      }, 2000)
    }
  }
}

export default bModules
