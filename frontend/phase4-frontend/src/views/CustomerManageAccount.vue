<template>
    <div class="flex-container">
        <div class="center">
            <div class = "title"> 
              Manage Account Access
            </div>
            <div class="subtitle">
              Existing Accounts: Add/Remove Owners
            </div>
            <div class="menu-item" >
              <el-select v-model="form.accountID" placeholder="Accessible Accounts">
                <el-option
                  v-for="item in options"
                  :key="item.accountID"
                  :label="item.accountID"
                  :value="item.accountID">
                </el-option>
              </el-select>
            </div>
            <div class="menu-item" >
              <el-select v-model="form.customerID" placeholder="Customer">
                <el-option
                  v-for="item in options"
                  :key="item.customerID"
                  :label="item.customerID"
                  :value="item.customerID">
                </el-option>
              </el-select>
            </div>
            <div class="menu-item" >
              <input type="checkbox" value="Adding Owner?" id="checkbox" v-model="checked">
              <label for="checkbox">Adding Owner?</label>
            </div>
            <div class="input">
              <el-input v-model="InitialBalance" placeholder="$Initial balance"></el-input>
              <el-input v-model="InterestRate" placeholder="Interest Rate"></el-input>
            </div>
            <div class="input">
              <el-input v-model="MinBalance" placeholder="$Min Balance"></el-input>
              <el-input v-model="MaxWithdrawals" placeholder="Max Withdrawals"></el-input>
            </div>
            <div class="menu-item">
              <el-button @click="back" class="btn" type="primary">Back</el-button>
              <el-button class="btn" type="primary">Confirm</el-button>
            </div>
        </div>
    </div>    
</template>

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
.title{
  align-self: center;
  font-size: 25px;
}
.subtitle{
  align-self: center;
  font-size: 20px;
}
.menu-item{
  margin: 30px;
  align-self: center;
}
.input{
  margin: 30px;
  display:flex;
}
.btn{
  width: 150px;
  font-size: 15px;
}
</style>

<script>

export default {
  name:"CustomerManageAccount",
  data(){
    return {
      form: {
        accountID:"",
        customerID:""
      },
      option:[{accountID:'checking_A'}]
    }
  },
  mounted() {
      //查询所在部门
      this.customerManageAccount();
    },
  methods: {
    back: function(){
      this.$router.push('/customermenu')
    },
    customerManageAccount: function(){
  
      this.axios({
      method: "post",
      url: "http://localhost:3000/customerManageAccount", // 接口地址
      data: {
        }
      }).then((res)=>{
          console.log(res)
          this.options = res.data.datalist;
        }).catch(error => console.log(error, "error")); // 失败的返回
    }
  }
}
</script>
