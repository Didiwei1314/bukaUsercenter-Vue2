module.exports = {
  name: 'signup',
  data() {
      var validateAccount = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机号'));
        }else if(!/^[0-9]{11}$/.test(value)){
          callback(new Error('手机号格式错误'));
        }else{
          callback();
        }
      };
      var validateVerify = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'));
        }else{
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if(!/^\S{6,16}$/.test(value)){
          callback(new Error('密码格式错误(请输入6-16位字符)'));
        }else{
          if (this.ruleFormsignup.checkPass !== '') {
            this.$refs.ruleFormsignup.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleFormsignup.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleFormsignup: {
          account: '',
          verify: '',
          pass: '',
          checkPass: ''
        },
        rulessignup: {
          account: [
            { validator: validateAccount, trigger: 'blur' }
          ],
          verify: [
            { validator: validateVerify, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      //登录提交
      submitForm(formName) {
        console.log(this.$refs);
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
}
