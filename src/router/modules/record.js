// import Layout from '@/layout'

export default {
  // path: '/qiankun',
  // name: 'QianKun',
  // component: Layout,
  // redirect: '/qiankun/record',
  // meta: {title: '乾坤', icon: 'el-icon-menu'},
  // children: [
  //   {
  //     path: 'record',
  //     name: 'QiankunRecord',
  //     component: () => import('@/views/RecordIndex'),
  //     meta: {title: '乾坤里的记录', icon: 'el-icon-location'}
  //   }
  // ]
  path: '/qiankun/record',
  name: 'QiankunRecord',
  component: () => import('@/views/RecordIndex'),
  meta: {title: '乾坤里的记录', icon: 'el-icon-location'}
}
