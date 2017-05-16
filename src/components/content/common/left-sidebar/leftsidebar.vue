<template lang="html">
  <div class="sidebar">
    <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo border-r0" router
    theme="dark"
    :default-active="$route.path"
    v-for="route in $router.options.routes":key = "route.id"
    v-if='!route.hidden && $route.matched.length && $route.matched[0].path===route.path'>
    <el-menu-item-group
      v-for="item in route.children":key = "item.id"
      v-if='!item.hidden'
      :title="item.names">
       <el-menu-item index="2"
        v-for="li in item.children":key = "li.id"
        v-if="!li.hidden"
        :index="route.path+'/'+item.path+'/'+li.path"
       >
       <i class="el-icon-message"></i>{{li.name}}</el-menu-item>
     </el-menu-item-group>
     <!-- <el-submenu class="t">
       <template slot="title">导航一</template>
         <el-menu-item index="5-1"><i class="el-icon-message"></i>选项1</el-menu-item>
         <el-menu-item index="5-2"><i class="el-icon-message"></i>选项2</el-menu-item>
     </el-submenu> -->
    </el-menu>
  </div>
</template>

<script>
  var Sidebar = require('./leftsidebar.js');
  export default Sidebar;
</script>
