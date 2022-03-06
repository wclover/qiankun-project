<template>
  <div class="nav_breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in breadcrumbItem" :key="item.path">{{ item.meta.title }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  computed: {
    breadcrumbItem() {
      return this.$route.matched
    }
  }
}
</script>

<style lang="scss" scoped>
.nav_breadcrumb {
  margin-left: 10px;
}
</style>
