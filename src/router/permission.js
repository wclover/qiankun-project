import store from '@/store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login']
export default function permission(router) {
  // 只有独立运行时，启用守卫
  if (store.getters.isIndependent) { // 从vuex里取出是否在独立运行的状态
    router.beforeEach(async(to, from, next) => {
      NProgress.start()
      if (getToken()) {
        if (to.path === '/login') {
          next({ path: '/' })
          NProgress.done()
        } else {
          const permissionRoutes = store.getters.permissionRoutes
          if (permissionRoutes && permissionRoutes.length > 0) {
            if (!to.path) {
              next({ path: '/' })
            } else {
              next()
            }
          } else {
            try {
              const accessRoutes = await store.dispatch('permission/generateRoutes')
              router.addRoutes(accessRoutes)
              next({ ...to, replace: true })
            } catch (error) {
              next(`/login`)
              Message.error(error || 'Has Error')
            }
          }
        }
      } else {
        if (whiteList.includes(to.path)) {
          next()
        } else {
          next(`/login`)
          NProgress.done()
        }
      }
    })
  }

  router.afterEach(() => {
    NProgress.done()
  })
}
