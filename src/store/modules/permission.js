import {constantRoutes, asyncRoutes} from '@/router/modules'

export function filterAsyncRoutes(routes) {
  return routes
}

const state = {
  routes: []
}

const mutations = {
  SET_ROUTES(state, routes) {
    state.routes = [...constantRoutes, ...routes]
  }
}

const actions = {
  generateRoutes({ commit }) {
    return new Promise(resolve => {
      const accessedRoutes = filterAsyncRoutes(asyncRoutes)
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
