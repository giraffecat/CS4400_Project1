<template>
  <div class="flex-container">
    <div class="center">
      <div class = "title"> 
        Customer Menu
      </div>
      <div class="menu-item" >        
        <el-button class="btn" type="primary">Manage Accounts</el-button>
      </div>
      <div class="menu-item" >
        <el-button class="btn" type="primary">Deposit / Withdrawal</el-button>
      </div>
      <div class="menu-item" >
        <el-button class="btn" type="primary">Manage Overdraft</el-button>
      </div>
      <div class="menu-item" >
        <el-button class="btn" type="primary">Make Transfer</el-button>
      </div>
      <div class="menu-item" >
        <el-button class="btn" type="primary">Create Bank</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    // ViewStats: function(){
    //   this.$router.push('/viewstats')
    // },
    // ManageUsers: function(){
    //   this.$router.push('/manageusers')
    // }
  }
}
</script>

<style>
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
  width: 500px;
  height: 500px;
  margin: auto;
  padding: 100px;
  border: 1px solid #409EFF;
  text-align: left;
}
.menu-item{
  margin: 30px;
  align-self: center;
}
.btn{
  width: 150px;
  font-size: 15px;
}
.title{
  align-self: center;
  font-size: 25px;
}
</style>