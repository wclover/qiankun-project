<template>
  <el-dropdown trigger="click" @command="handleCommand">
    <span class="el-dropdown-link">
      {{ username }}<i class="el-icon-arrow-down el-icon--right" />
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="signOut">登出</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'UserDropDown',
  computed: {
    ...mapGetters(['username'])
  },
  methods: {
    handleCommand(command) {
      switch (command) {
        case 'signOut': {
          console.log('signOut')
          break
        }
        default: {
          console.log('nothing')
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
