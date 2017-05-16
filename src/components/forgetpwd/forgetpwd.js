module.exports = {
  name: 'forgetpwd',
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
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if(!/^\S{6,16}$/.test(value)){
          callback(new Error('密码格式错误(请输入6-16位字符)'));
        }else{
          callback();
        }
      };
      return {
        ruleFormforgetpwd: {
          account: '',
          pass: ''
        },
        rulesforgetpwd: {
          account: [
            { validator: validateAccount, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      //登录提交
      submitForm(formName) {
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
};
