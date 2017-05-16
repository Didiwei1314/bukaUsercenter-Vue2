module.exports = {
  name: 'head-nav',
  methods: {
     handleSelect(key, keyPath) {
       console.log(key, keyPath);
       if(keyPath[1]=='2-3'){
         //TODO 清除缓存信息
         this.$router.push('/');
       }
     }
   }
};
