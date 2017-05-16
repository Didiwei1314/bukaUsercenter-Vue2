<template lang="html">
  <div class="headenav">
    <el-row class="menueuser">
      <el-col :span="24">
        <el-menu theme="dark" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-submenu index="2" class="f-right">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">回到官网</el-menu-item>
            <el-menu-item index="2-2">个人资料</el-menu-item>
            <el-menu-item index="2-3">退出登录</el-menu-item>
          </el-submenu>
          <el-menu-item index="1" class="f-right">
            <router-link to="/function1" class="list-group-item">
              模块1
            </router-link>
          </el-menu-item>
          <el-menu-item index="1" class="f-right">
            <router-link to="/function2" class="list-group-item">
              模块2
            </router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <div class="logo"><img src="static/img/logo.png" alt=""></div>
  </div>
</template>

<script>
var Headnavjs = require('./headnav.js')
export default Headnavjs;
</script>

<style lang="less">
 .headenav{
   width: 100%;position:absolute;top:0;z-index:1;background:#324157;color:#fff;
 }
 .menueuser{
   float:left;width:100%;padding-left:190px;
   >div{
     height:60px;
     line-height:60px;
   }
 }
 .logo{width:190px;color:#fff;float:left;margin-left:-100%;text-align:center;
  img{margin-top:10px;width:130px;height:40px;}
 }
</style>















 .text-right{text-align:right;}
</style>
