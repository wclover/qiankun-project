<template>
  <div id="root">
    <router-view />
  </div>
</template>

<script>
import actions from '@/shared/actions'
export default {
  name: 'App',
  mounted() {
    actions.onGlobalStateChange(state => {
      // 主应用切换路由
      // if (state.name && routerList?.children?.map(v => v.name).includes(state.name)) {
      if (state.name) {
        this.$router.push({ name: state.name })
      }
    })
  }
}
</script>

<style>
</style>
