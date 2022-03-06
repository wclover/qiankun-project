const state = {
  userInfo: JSON.parse(localStorage.getItem('vue2-userInfo')) || {}
}

const mutations = {
  SET_USER_INFO(state, userInfo) {
    state.userInfo = userInfo
    localStorage.setItem('vue2-userInfo', JSON.stringify(state.userInfo))
  }
}

const actions = {
  setUserInfo({commit}, userInfo) {
    commit('SET_USER_INFO', userInfo)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
