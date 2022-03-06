import record from '@/router/modules/record'
import table from '@/router/modules/table'

export const constantRoutes = [
  {
    path: '/',
    redirect: '/record'
  },
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '/404',
    component: () => import('@/views/404')
  }
]

export const asyncRoutes = [
  record,
  table,
  {
    path: '/*',
    redirect: '/404'
  }
]

export default [...constantRoutes, ...asyncRoutes]
