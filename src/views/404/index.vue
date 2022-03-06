<template>
  <div class="not_found">
    <div class="img" />
  </div>
</template>

<script>
export default {
  name: 'Page404'
}
</script>

<style lang="scss" scoped>
.not_found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .img {
    width: 800px;
    height: 500px;
    background: url("~@/assets/404.png") no-repeat;
    background-size: 100% 100%;
    margin-bottom: 20px;
  }
}
</style>
