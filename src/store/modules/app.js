const state = {
  fold: localStorage.getItem('vue2-fold') || false
}

const mutations = {
  CHANGE_FOLD(state) {
    state.fold = !state.fold
    localStorage.setItem('vue2-fold', state.fold)
  }
}

const actions = {
  changeFold({commit}) {
    commit('CHANGE_FOLD')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
