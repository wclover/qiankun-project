const state = {
  isIndependent: true
}

const mutations = {
  CHANGE_IS_INDEPENDENT(state, isIndependent) {
    state.isIndependent = isIndependent
  }
}

const actions = {
  changeIsIndependent({commit}, isIndependent) {
    commit('CHANGE_IS_INDEPENDENT', isIndependent)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
