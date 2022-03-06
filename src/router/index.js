import Vue from 'vue'
import VueRouter from 'vue-router'
import permission from '@/router/permission'
import {constantRoutes} from '@/router/modules'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: constantRoutes
})
permission(router)

export default router
