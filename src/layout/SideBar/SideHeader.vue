<template>
  <div class="side_header">
    <div :class="fold ? 'fold_margin' : 'un_fold_margin'">{{ fold ? ' ' : 'Vue2' }}</div>
  </div>
</template>

<script>
export default {
  name: 'SideHeader',
  props: {
    fold: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>

<style lang="scss" scoped>
.side_header {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  line-height: 70px;
  text-align: center;
  color: #ffffff;
  font-size: 28px;
  font-weight: bold;
  &:before {
    width: 35px;
    height: 35px;
    content: "";
    background: url("~@/assets/logo.png") no-repeat;
    background-size: 100% 100%;
  }
}
.fold_margin {
  margin-left: 0;
}
.un_fold_margin {
  margin-left: 10px;
}
</style>
