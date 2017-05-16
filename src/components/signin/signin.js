module.exports = {
  name: 'signin',
  data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if(!/^\S{6,16}$/.test(value)){
          callback(new Error('密码格式错误(请输入6-16位字符)'));
        }else{
          callback();
        }
      };
      var validateAccount = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号或手机号'));
        }else if(!/^\S{1,15}$/.test(value)){
          callback(new Error('账号格式错误(请输入1-15位字符)'));
        }else{
          callback();
        }
      }
      return {
        ruleFormsignin: {
          pass: '',
          account: ''
        },
        rulessignin: {
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
            this.$router.push('/function1');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
}
