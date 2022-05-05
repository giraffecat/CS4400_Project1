<template>
  <div class="flex-container">
    <div class="center">
      <div class = "title"> 
        Customer Menu
      </div>
      <div class="menu-item" >        
        <el-button class="btn" type="primary" @click="ManageAccount">Manage Accounts</el-button>
      </div>
      <div class="menu-item" >
        <el-button class="btn" type="primary" @click="Deposit">Deposit</el-button>
      </div>
      <div class="menu-item" >
        <el-button class="btn" type="primary" @click="Withdrawal">Withdrawal</el-button>
      </div>
      <div class="menu-item" >
        <el-button class="btn" type="primary" @click="CManageOverdraft">Manage Overdraft</el-button>
      </div>
      <div class="menu-item" >
        <el-button class="btn" type="primary" @click="Transfer">Make Transfer</el-button>
      </div>
      <div class="menu-item" >
        <el-button class="btn" type="primary" @click="LogOut">Log out</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    LogOut: function(){
      this.$router.push('/')
    },
    ManageAccount: function(){
      this.$router.push('/customerManageAccount')
    },
    CManageOverdraft: function(){
      this.$router.push('/customerManageOverdraft')
    },
    Deposit: function(){
      this.$router.push('/deposit')
    },
    Withdrawal: function(){
      this.$router.push('/withdrawal')
    },
    Transfer: function(){
      this.$router.push('/transfer')
    }
    // ViewStats: function(){
    //   this.$router.push('/viewstats')
    // },
    // ManageUsers: function(){
    //   this.$router.push('/manageusers')
    // }
  }
}
</script>

<style scoped>
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