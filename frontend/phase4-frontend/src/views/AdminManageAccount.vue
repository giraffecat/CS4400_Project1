<template>
    <div class="flex-container">
        <div class="center">
            <div class = "title"> 
              Manage Account Access
            </div>
            <div>
              <div class="subtitle" id="sub">
                  Existing Accounts:Add/Remove Owners/
              </div>
              <div class="subtitle">
                  Create New Account
              </div>
            </div>
            <div class="menu-item" >
              <el-select v-model="choosedAccount" placeholder="Accessible Accounts">
                <el-option
                  v-for="item in form.accountID"
                  :key="item.accountID"
                  :value="item.accountID">
                </el-option>
              </el-select>
              <el-select v-model="form.bankID" placeholder="Bank"></el-select>
            </div>
            <div class="menu-item" >
              <el-select v-model="choosedCustomer" placeholder="Customer">
                <el-option
                  v-for="item in form.customerID"
                  :key="item.perID"
                  :value="item.perID">
                </el-option>
              </el-select>
              <el-select v-model="form.newAccountID" placeholder="Account ID"></el-select>
            </div>
            <div class="menu-item1" >
              <div class="blank1">
              </div>
              <div>
                <input type="checkbox" value="Adding Owner?" id="checkbox" v-model="checked">
                <label for="checkbox">Adding Owner?</label>
              </div>
              <div class="blank2">
              </div>
              <div id="type1">
                <el-select v-model="form.region" placeholder="Account Type">
                  <el-option label="checking" value="checking"></el-option>
                  <el-option label="savings" value="savings"></el-option>
                  <el-option label="market" value="market"></el-option>
                </el-select>
              </div>
            </div>
            <div class="input">
              <el-input v-model="InitialBalance" placeholder="$Initial balance"></el-input>
              <el-input v-model="InterestRate" placeholder="Interest Rate"></el-input>
            </div>
            <div class="input">
              <el-input v-model="MinBalance" placeholder="$Min Balance"></el-input>
              <el-input v-model="MaxWithdrawals" placeholder="Max Withdrawals"></el-input>
            </div>
            <div class="menu-item2">
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
  display:inline;
  white-space:nowrap;
  padding:-10px;
}
#sub{
  margin-left:-5px;
}
.menu-item{
  margin: 30px;
  align-self: center;
}
.menu-item2{
  margin: 20px,30px;
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
.menu-item1{
  margin: 30px;
  white-space:nowrap;
  display:flex;
}
#type1{
  position:relative;
  text-align:right;
}
.blank1{
  position:relative;
  width:8%;
}
.blank2{
  position:relative;
  width:14%;
}

</style>

<script>

export default {
  name:"AdminManageAccount",
  mounted(){
    this.GetAccounts();
    this.GetCustomers();
  },
  data(){
    return {
      form: {
        accountID:[],
        customerID:[],
        bankID:[],
        newAccountID:[]
      },
      choosedAccount:null,
      choosedCustomer:null,
      option:[]
    }
  },
  methods: {
    back: function(){
      this.$router.push('/adminmenu')
    },
    GetAccounts: function() {
      this.axios({
      method: "get",
      url: "http://localhost:3000/GetAccounts", // 接口地址
      }).then(res => {
        console.log("account",res.data)
        this.form.accountID = res.data
      })
    },
    GetCustomers: function() {
      this.axios({
      method: "get",
      url: "http://localhost:3000/GetCustomers", // 接口地址
      }).then(res => {
        console.log("customer",res.data)
        this.form.customerID = res.data
      })
    }
  }
}
</script>