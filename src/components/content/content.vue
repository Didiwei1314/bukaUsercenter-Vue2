<template lang="html">
   <!--<transition> -->
      <router-view></router-view>
  <!-- </transition> -->
</template>

<script>
export default {
}
</script>

<style lang="less">
  .fade-enter-active,
  .fade-leave-active {
      transition: opacity .3s
  }
  .fade-enter,
  .fade-leave-active {
      opacity: 0
  }
</style>
