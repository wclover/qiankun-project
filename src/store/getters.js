const getters = {
  username: state => state.user.username,
  fold: state => state.app.fold,
  permissionRoutes: state => state.permission.routes,
  isIndependent: state => state.qiankun.isIndependent
}

export default getters
