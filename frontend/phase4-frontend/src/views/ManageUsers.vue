<template>
  <div class="flex-container">
    <div class="center">
      <div class = "title">ManageUsers</div>
      <div class="menu-item" >
        <el-button class="btn" type="primary" @click="CreateEmployeeRole">Create Employee Role</el-button>
      </div>
      <div class="menu-item" >
        <el-button class="btn" type="primary" @click="CreateCustomerRole">Create Customers Role</el-button>
      </div>
      <div class="menu-item" >
        <el-button class="btn" type="primary" @click="StopRole">Stop Employee Role</el-button>
      </div>
      <div class="menu-item" >
        <el-button class="btn" type="primary" @click="StopRole">Stop Customer Role</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"ManageUsers",
  methods:{
    CreateEmployeeRole:function(){
      this.$router.push('/createEmployee')
    },
    CreateCustomerRole:function(){
      this.$router.push('/createCustomer')
    },
    StopRole:function() {
      this.$router.push('/stopRole')
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