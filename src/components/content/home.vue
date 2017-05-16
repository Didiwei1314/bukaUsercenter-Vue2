<template lang="html">
  <div class="home">
      <head-nav></head-nav>
      <section class="main-content">
          <section class="right-content">
            <!-- :style="{marginLeft:$store.state.leftmenu.width}" -->
            <router-view></router-view>
          </section>
          <left-menu></left-menu>
      </section>
  </div>
</template>

<script>
var Common = require('./common/');
export default {
    // name: 'home',
    components:Common
}
</script>

<style lang="less">
  .home{height: 100%;width: 100%;}
  .right-content{
    width:100%;
    height:100%;
    float:left;
    >div{margin-left:190px;}
  }

</style>
