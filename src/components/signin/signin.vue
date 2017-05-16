<template lang="html">
  <div class="signin">
    <header>
      <div class="headerconent">
        <img src="static/img/logo11.png" alt="">
        <router-link to="/signup">还没有帐号？去注册</router-link>
      </div>
    </header>
    <div class="formsignin formcommon">
      <h2>登录</h2>
      <el-form :model="ruleFormsignin" :rules="rulessignin" ref="ruleFormsignin" class="demo-ruleForm">
        <el-form-item prop="account">
          <el-input type="text" v-model="ruleFormsignin.account" auto-complete="off" placeholder="请输入账号或手机号"></el-input>
        </el-form-item>
        <el-form-item  prop="pass">
          <el-input type="password" v-model="ruleFormsignin.pass" auto-complete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="large" @click="submitForm('ruleFormsignin')" class="fullwidth">登陆</el-button>
        </el-form-item>
      </el-form>
      <router-link to="/forgetpwd">
        忘记密码？
      </router-link>
    </div>
  </div>
</template>

<script>
  var Signin = require('./signin.js')
  module.exports = Signin;
</script>

<style lang="css">
</style>
