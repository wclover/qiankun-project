<template>
  <div class="board">
    <el-checkbox v-model="checkedIn" class="checkbox" @change="changeStatus" />
    <div class="code"> {{ pallet.code }} </div>
    <div class="info">
      <div>{{ pallet.declaredBoxQuantity }}</div>
      <div>{{ 'YUN' }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PalletBoard',
  props: {
    pallet: {
      type: Object,
      default: () => {}
    },
    checked: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      checkedIn: this.checked
    }
  },
  methods: {
    changeStatus() {
      this.$emit('update:checked', this.checkedIn)
      this.$emit('changeStatus')
    }
  }
}
</script>

<style scoped>
.board {
  margin: 10px;
  width: 150px;
  height: 70px;
  color: white;
  background-color: gray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}
.checkbox {
  position: absolute;
  top: -5px;
  right: 0;
}
.code {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}
.info {
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
