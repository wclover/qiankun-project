import Layout from '@/layout'

export default {
  path: '/table',
  name: 'Table',
  component: Layout,
  redirect: '/table/index',
  meta: {title: '表格', icon: 'el-icon-menu'},
  children: [
    {
      path: 'index',
      name: 'TableIndex',
      component: () => import('@/views/Table'),
      meta: {title: '表格', icon: 'el-icon-location'}
    },
    {
      path: 'mergeTable',
      name: 'MergeTable',
      component: () => import('@/views/Table/MergeTable'),
      meta: {title: '合并表格', icon: 'el-icon-location'}
    }
  ]
}
