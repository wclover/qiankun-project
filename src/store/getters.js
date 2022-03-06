const getters = {
  username: state => state.user.username,
  fold: state => state.app.fold,
  permissionRoutes: state => state.permission.routes
}

export default getters
