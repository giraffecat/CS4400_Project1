<template>
  <div class="flex-container">
    <div class="center">
      <div class = "title" >Login</div>
      <div class="ID" >ID: </div>
      <el-input v-model="account" placeholder="Input your account ID"></el-input>
      <div class="ID" >Password: </div>
      <el-input v-model="password" placeholder="Input your Password" show-password></el-input>
      <el-button @click="login" class="login-button" type="primary">Login</el-button>
      <div class="register" >Don't have an account?  
        <el-link type="primary">Register Here</el-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Login",
  data(){
    return {
      account:"",
      password:""
    }
  },
  methods: {
    login:function(){
      console.log("asda",this.account, this.password)
      this.axios({
      method: "post",
      url: "http://localhost:3000/login", // 接口地址
      data: {
        account: this.account,   // 传接口参数
        password: this.password
        }
      }).then(response => {
        // console.log(response.data[0].role);
        if(response.data.length != 0) {
          this.$message({
            message: 'Sucessfully login!',
            type: 'success'
          });
          if(response.data[0].role=='customer'){
            this.$router.push('/customermenu')
          }
          if(response.data[0].role=='admin'){
            this.$router.push('/adminmenu')
          }
          if(response.data[0].role=='manager'){
            this.$router.push('/managermenu')
          }
        } else {
          this.$message({
            message: 'Check your accountID and password!',
            type: 'warning'
          });
        }   // 成功的返回      
      }).catch(error => console.log(error, "error")); // 失败的返回
    }
  }
}
</script>

<style>
.register{
  margin-top: 20px;
}
.login-button{
  margin-top: 20px;
  width: 80px;
  align-self: center;
}
.title{
  margin-bottom: 20px;
  text-align: center;
  font-size: 20px;
}
.ID{
  margin-top: 10px;
  margin-bottom: 10px;
}
.flex-container {
  width: 100vw;
  height: 100vh;
  display: flex; 
  justify-content: center;
  align-items: center;
}

.center {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  padding: 200px;
  margin: auto;
  border: 1px solid #409EFF;
  text-align: left;
}
</style>