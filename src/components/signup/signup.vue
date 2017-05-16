<template lang="html">
  <div class="signup">
    <header>
      <div class="headerconent">
        <img src="static/img/logo11.png" alt="">
        <router-link to="/signin">已经注册,去登陆</router-link>
      </div>
    </header>
    <div class="formsignup formcommon">
      <h2>注册</h2>
      <el-form :model="ruleFormsignup" :rules="rulessignup" ref="ruleFormsignup" class="demo-ruleForm">
        <el-form-item prop="account">
          <el-input type="text" v-model="ruleFormsignup.account" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="verify">
          <el-col :span="14">
            <el-input type="text" v-model="ruleFormsignup.verify" placeholder="请输入验证码"></el-input>
          </el-col>
          <el-col :span="10" class="wrapvuerify">
            <el-button type="primary" class="verify">获取验证码</el-button>
          </el-col>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input type="password" v-model="ruleFormsignup.pass" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
         <el-input type="password" v-model="ruleFormsignup.checkPass" placeholder="请再次输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="large" @click="submitForm('ruleFormsignup')" class="fullwidth">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  var Signup = require('./signup.js')
  module.exports = Signup;
</script>
