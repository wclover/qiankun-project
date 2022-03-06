<template>
  <div>
    <router-link v-if="!route.children" :to="resolvePath(path)">
      <el-menu-item v-if="route.meta" :index="index">
        <i :class="route.meta.icon" />
        {{ fold ? '' : route.meta.title }}
      </el-menu-item>
    </router-link>
    <el-submenu v-else :index="index">
      <template v-if="route.meta" slot="title">
        <i :class="route.meta.icon" />
        <span>{{ fold ? '' : route.meta.title }}</span>
      </template>
      <submenu-item v-for="item in route.children" :key="item.name" :index="item.name" :route="item" :path="resolvePath(item.path)" />
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import {mapGetters} from 'vuex'
export default {
  name: 'SubmenuItem',
  props: {
    route: {
      type: Object,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    index: {
      type: String,
      default: () => ''
    }
  },
  computed: {
    ...mapGetters(['fold', 'permissionRoutes'])
  },
  methods: {
    resolvePath(routePath) {
      return path.resolve(this.path, routePath)
    }
  }
}
</script>

<style scoped>

</style>
