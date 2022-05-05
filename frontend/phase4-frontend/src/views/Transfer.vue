<template>
  <div class="flex-container">
    <div class="center">
      <div class = "title"> 
        Transfer
      </div>
      <div class="amount">
        <div class="menu-item" >From:</div>
        <el-select v-model="form.bankID" placeholder="Bank"></el-select>
        <el-select v-model="form.accountID" placeholder="Account"></el-select>
      </div>
      <div class="amount">
        <div class="menu-item" >Amount: </div>
        <el-input v-model="Amount" placeholder="$25.00"></el-input>
      </div>
      <div class="amount">
        <div class="menu-item" >To:</div>
        <el-select v-model="form.bankID" placeholder="Bank"></el-select>
        <el-select v-model="form.accountID" placeholder="Account"></el-select>
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
  margin-bottom:30px;
}
.menu-item{
  margin: 30px;
  align-self: center;
}
.amount{
    display:flex;
    margin:30px;
    height:40px;
}
.btn{
  width: 150px;
  font-size: 15px;
}
</style>

<script>
export default {
  
  data(){
    return {
      form: {
        accountID:"",
        bankID:""
      },
      option:[]
    }
  },
  methods: {
    back: function(){
      this.$router.push('/customermenu')
    }
  }
}
</script>