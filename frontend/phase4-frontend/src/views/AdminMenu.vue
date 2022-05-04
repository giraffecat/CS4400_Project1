<template>
  <div class="flex-container">
    <div class="center">
      <div class = "title"> 
        Admin Menu
      </div>
      <div class="menu-item" >
        <el-button class="btn" type="primary" @click="ViewStats">View Stats</el-button>
      </div>
      <div class="menu-item" >
        <el-button class="btn" type="primary">Create Corporation</el-button>
        <el-button class="btn" type="primary" @click="CreateFee">Create Fee</el-button>
      </div>
      <div class="menu-item" >
        <el-button class="btn" type="primary"  @click="ManageUsers">Manage Users</el-button>
        <el-button class="btn" type="primary" @click="AManageOverdraft">Manage Overdraft</el-button>
      </div>
      <div class="menu-item" >
        <el-button class="btn" type="primary">Hire Worker</el-button>
        <el-button class="btn" type="primary" @click="Pay">Pay Employees</el-button>
      </div>
      <div class="menu-item" >
        <el-button class="btn" type="primary">Replace Manager</el-button>
        <el-button class="btn" type="primary" @click="AManageAccount">Manage Accounts</el-button>
      </div>
      <div class="menu-item" >
        <el-button class="btn" type="primary">Create Bank</el-button>
        <!-- <el-button class="btn" type="primary" @click="Create Bank">View Stats</el-button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    ViewStats: function(){
      this.$router.push('/viewstats')
    },
    ManageUsers: function(){
      this.$router.push('/manageusers')
    },
    AManageAccount: function(){
      this.$router.push('/adminManageAccount')
    },
    CreateFee: function(){
      this.$router.push('/createfee')
    },
    AManageOverdraft: function(){
      this.$router.push('/adminManageOverdraft')
    },
    Pay: function(){
      this.$router.push('/pay')
    }
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