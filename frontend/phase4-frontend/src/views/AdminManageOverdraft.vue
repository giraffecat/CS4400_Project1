<template>
  <div class="flex-container">
    <div class="center">
      <div class = "title"> 
        Manage Overdraft Policies
      </div>
      <div class="menu-item" >
        <el-select v-model="form.checkingAccount" placeholder="Available Checking Accounts"></el-select>
      </div>
      <div class="menu-item" >
        <div>
          <input type="checkbox" value="Adding Overdraft Policy?" id="checkbox" v-model="checked">
          <label for="checkbox">Adding Overdraft Policy?</label>
        </div>
        <div>
          <el-select v-model="form.savingAccount" placeholder="Available Savings Accounts"></el-select>
        </div>
      </div>
      <div class="menu-item" >
        <el-button @click="back" class="btn" type="primary">Back</el-button>
        <el-button class="btn" type="primary">Confirm</el-button>
      </div>
    </div>
  </div>
</template>

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
.title{
  align-self: center;
  font-size: 25px;
}
.menu-item{
  margin: 30px;
  align-self: center;
}
.btn{
  width: 150px;
  font-size: 15px;
}
</style>

<script>

export default {
  name:"AdminManageOverdraft",
  data(){
    return {
      form: {
        checkingAccount:"",
        savingAccount:""
      },
      option:[]
    }
  },
  methods: {
    back: function(){
      this.$router.push('/adminmenu')
    }
  }
}
</script>