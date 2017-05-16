<template lang="html">
  <div class="forgetpwd">
    <header>
      <div class="headerconent">
       <img src="static/img/logo11.png" alt="">
       <router-link to="/signin">回到登陆</router-link>
      </div>
    </header>
    <div class="formforgetpwd formcommon">
      <h2>重置密码</h2>
      <el-form :model="ruleFormforgetpwd" :rules="rulesforgetpwd" ref="ruleFormforgetpwd" class="demo-ruleForm">
        <el-form-item prop="account">
          <el-input type="text" v-model="ruleFormforgetpwd.account" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-col :span="14">
            <el-input type="text" placeholder="请输入验证码"></el-input>
          </el-col>
          <el-col :span="10" class="wrapvuerify">
            <el-button type="primary" class="verify">获取验证码</el-button>
          </el-col>
        </el-form-item>
        <el-form-item  prop="pass">
          <el-input type="password" v-model="ruleFormforgetpwd.pass" placeholder="请输入新密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="large" @click="submitForm('ruleFormforgetpwd')" class="fullwidth">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  var Forgetpwd = require('./forgetpwd.js')
  module.exports = Forgetpwd;
</script>

<style lang="css">
</style>
