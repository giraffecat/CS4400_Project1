<template>
  <div class="flex-container">
    <div class="center">
      <div class = "title">ViewStats</div>
      <div class="menu-item" >
        <el-button class="btn" type="primary" @click="ViewStats">Display Accounts Stats</el-button>
      </div>
      <div class="menu-item" >
        <el-button class="btn" type="primary" @click="ViewStats">Display Corporation Stats</el-button>
      </div>
      <div class="menu-item" >
        <el-button class="btn" type="primary" @click="ViewStats">Display Bank Stats</el-button>
      </div>
      <div class="menu-item" >
        <el-button class="btn" type="primary" @click="ViewStats">Display Customers Stats</el-button>
      </div>
      <div class="menu-item" >
        <el-button class="btn" type="primary" @click="ViewEmployeesStats">Display Employees Stats</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"ViewStats",
  methods:{
    ViewEmployeesStats:function(){
      this.$router.push('/employeeStats')
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
  padding: 100px;
  margin: auto;
  border: 1px solid #409EFF;
  text-align: left;
}
.title{
  align-self: center;
  font-size: 25px;
}
.menu-item{
  margin: 30px;
  align-self: center;
}
.btn{
  width: 200px;
  font-size: 15px;
}
</style>