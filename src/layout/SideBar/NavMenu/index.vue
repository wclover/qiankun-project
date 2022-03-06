<template>
  <div style="transition: none;">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeRoute"
        :background-color="menuCss.menuBackGroundColor"
        :text-color="menuCss.menuText"
        :active-text-color="menuCss.menuActiveText"
        :collapse="fold"
        :collapse-transition="false">
        <submenu-item v-for="item in permissionRoutes" :key="item.name" :index="item.name" :route="item" :path="item.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import menuCss from '@/styles/global.scss'
import {mapGetters} from 'vuex'
import SubmenuItem from '@/layout/SideBar/NavMenu/submenuItem'

export default {
  name: 'NavMenu',
  components: {SubmenuItem},
  computed: {
    ...mapGetters(['permissionRoutes', 'fold']),
    menuCss() {
      return menuCss
    },
    activeRoute() {
      return this.$route.name
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  border: none;
}
</style>
