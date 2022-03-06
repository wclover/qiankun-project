<template>
  <div class="app_main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  data() {
    return {
      cachedViews: [],
      key: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.app_main {
  height: 100%;
  width: 100%;
  background-color: red;
}
</style>
