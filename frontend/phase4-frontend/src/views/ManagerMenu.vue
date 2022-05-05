<template>
  <div class="flex-container">
    <div class="center">
      <div class = "title"> 
        Manager Menu
      </div>
      <div class="menu-item" >
        <!-- <el-button class="btn" type="primary" @click="ManageAccounts">Manage Accounts</el-button> -->
        <el-button class="btn" type="primary" @click="Pay">Pay Employee</el-button>
      </div>
      <div class="menu-item" >
        <el-button class="btn" type="primary" @click="HireWorker">Hire Worker</el-button>
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
    Pay: function(){
      this.$router.push('/pay_manager')
    },
    HireWorker:function() {
      this.$router.push('/hireWorker_manager')
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