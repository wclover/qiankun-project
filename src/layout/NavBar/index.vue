<template>
  <div class="app_nav_bar">
    <div class="nav_left_info">
      <i :class="foldClass" @click="changeFold" />
      <breadcrumb />
    </div>
    <div class="nav_user_info">
      <user-drop-down />
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import UserDropDown from '@/layout/NavBar/UserDropDown'
import Breadcrumb from '@/layout/NavBar/Breadcrumb'

export default {
  name: 'NavBar',
  components: {UserDropDown, Breadcrumb},
  computed: {
    ...mapGetters(['fold']),
    foldClass() {
      return this.fold ? 'el-icon-s-unfold' : 'el-icon-s-fold'
    }
  },
  methods: {
    ...mapActions([
      'app/changeFold'
    ]),
    changeFold() {
      this['app/changeFold']()
    }
  }
}
</script>

<style lang="scss" scoped>
.app_nav_bar {
  height: 50px;
  display: flex;
  justify-content: space-between;
  .el-icon-s-fold, .el-icon-s-unfold {
    width: 50px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    font-size: 28px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
  .nav_left_info {
    display: flex;
    align-items: center;
  }
  .nav_user_info {
    text-align: right;
    line-height: 50px;
    cursor: pointer;
    padding-right: 20px;
  }
}
</style>
