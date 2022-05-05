<template>
    <div class="flex-container">
        <div class="center">
            <div class = "title"> 
              Manage Account Access
            </div>
            <div class="sub-container">
              <div class= "column1">
                <div align="center">Add/Remove Owners</div>
                <el-select class="item" v-model="choosedAccount" placeholder="Accessible Accounts">
                  <el-option
                    v-for="item in form.BankAccountID"
                    :key="item.accountID + '-' + item.bankID"
                    :value="item.accountID + '-' + item.bankID">
                  </el-option>
                </el-select>
                <el-select class="item" v-model="SelectedCostumer" placeholder="Customer">
                  <el-option
                    v-for="item in form.customerID"
                    :key="item.perID"
                    :value="item.perID">
                  </el-option>
                </el-select>
              <div class="item">
                <input type="checkbox" value="Adding Owner?" id="checkbox" v-model="checked">
                <label for="checkbox">Add/Remove Owner</label>
              </div>
              </div>
              <div class= "column2">
                 <div align="center">Create New Account</div>
                <el-select class="item" v-model="SelectedBankID" placeholder="Bank">
                  <el-option
                    v-for="item in form.bankID"
                    :key="item.bankID"
                    :value="item.bankID">
                  </el-option>
                </el-select>
                <el-select class="item" v-model="SelectedCostumer" placeholder="Customer">
                  <el-option
                    v-for="item in form.customerID"
                    :key="item.perID"
                    :value="item.perID">
                  </el-option>
                </el-select>
                <el-input class="item" v-model="NewAccountID" placeholder="Account ID"></el-input>
                <el-select class="item" v-model="AccountType" placeholder="Account Type">
                  <el-option label="checking" value="checking"></el-option>
                  <el-option label="savings" value="savings"></el-option>
                  <el-option label="market" value="market"></el-option>
              </el-select>
              </div>
            </div>

            <div>
              <div class="input">
                <el-input v-model="InitialBalance" placeholder="$Initial balance"></el-input>
                <el-input v-model="InterestRate" placeholder="Interest Rate"></el-input>
              </div>
              <div class="input">
                <el-input v-model="MinBalance" placeholder="$Min Balance"></el-input>
                <el-input v-model="MaxWithdrawals" placeholder="Max Withdrawals"></el-input>
              </div>
            </div>
            <div class="menu-item2">
              <el-button @click="back" class="btn" type="primary">Back</el-button>
              <el-button @click="submit" class="btn" type="primary">Confirm</el-button>
            </div>
        </div>
    </div>    
</template>
<script>

export default {
  name:"AdminManageAccount",
  mounted(){
    this.GetBankAccounts();
    this.GetCustomers();
    this.GetBanksList();
  },
  data(){
    return {
      form: {
        BankAccountID:[],
        customerID:[],
        bankID:[],
        newAccountID:[]
      },
      choosedAccount:null,
      SelectedBankID:null,
      SelectedCostumer:null,
      NewAccountID:null,
      AccountType:null,
      InitialBalance: null,
      InterestRate: null,
      MinBalance:null,
      MaxWithdrawals:null,
      checked:false,
    }
  },
  methods: {
    back: function(){
      this.$router.push('/adminmenu')
    },
    submit:function(){
      if(this.choosedAccount != null) {
        if(this.checked){
          this.AccessAccount();
        }else {
          this.RemoveAccessAccount();
        }
      } else {
        this.AddAccount()
      } 
    },
    GetBanksList: function() {
      this.axios({
      method: "get",
      url: "http://localhost:3000/GetBanksList", // 接口地址
      }).then(res => {
        console.log("GetBanksList",res.data)
        this.form.bankID = res.data
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
    },
    
    GetBankAccounts:function(){
      this.axios({
      method: "get",
      url: "http://localhost:3000/GetBankAccounts", // 接口地址
      }).then(res => {
        this.form.BankAccountID = res.data
      })
    },
    AddAccount: function() {
      console.log("addAccount")
      this.axios({
      method: "post",
      url: "http://localhost:3000/AddAccountAccess", // 接口地址
      data:{
        LoginPerson: this.global.LoginPerson,
        Customer: this.SelectedCostumer,
        AccountType: this.AccountType,
        BankID:this.SelectedBankID,
        AccountIP: this.NewAccountID,
        Balance: this.InitialBalance,
        InterestRate: this.InterestRate,
        MinBalance: this.MinBalance,
        MaxWithdrawals: this.MaxWithdrawals,
      }
      }).then(res => {
        if(res.data.affectedRows != 0) {
            this.$message({
              message: `Sucessfully Add account access!`,
              type: 'success'
            });
        }else {
            this.$message({
            message: `Fail to Add account access!`,
            type: 'warning'
          });
        }
      })
    },

    AccessAccount: function() {
      console.log("AccessAccount")
      this.axios({
      method: "post",
      url: "http://localhost:3000/AddAccountAccess", // 接口地址
      data:{
        LoginPerson: this.global.LoginPerson,
        Customer: this.SelectedCostumer,
        AccountType: this.AccountType,
        BankID:this.choosedAccount.split('-')[1],
        AccountIP: this.choosedAccount.split('-')[0],
        Balance: this.InitialBalance,
        InterestRate: this.InterestRate,
        MinBalance: this.MinBalance,
        MaxWithdrawals: this.MaxWithdrawals,
      }
      }).then(res => {
        if(res.data.affectedRows != 0) {
            this.$message({
              message: `Sucessfully Add account access!`,
              type: 'success'
            });
        }else {
            this.$message({
            message: `Fail to Add account access!`,
            type: 'warning'
          });
        }
      })
    },

    RemoveAccessAccount: function() {
      console.log("RemoveAccessAccount")
      this.axios({
      method: "post",
      url: "http://localhost:3000/RemoveAccountAccess", // 接口地址
      data:{
        LoginPerson: this.global.LoginPerson,
        Customer: this.SelectedCostumer,
        AccountType: this.AccountType,
        BankID:this.choosedAccount.split('-')[1],
        AccountIP: this.choosedAccount.split('-')[0],
        Balance: this.InitialBalance,
        InterestRate: this.InterestRate,
        MinBalance: this.MinBalance,
        MaxWithdrawals: this.MaxWithdrawals,
      }
      }).then(res => {
        console.log("res",res)
        if(res.data.affectedRows != 0) {
            this.$message({
              message: `Sucessfully remove account access!`,
              type: 'success'
            });
        }else {
            this.$message({
            message: `Fail to remove account access!`,
            type: 'warning'
          });
        }
      })
    }  

  }
}
</script>


<style scoped>
.sub-container{
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: row;
}
.item{
  margin-top: 20px;
  width: 200px;
}
.column1{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
}
.column2{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
}
.flex-container {
  width: 100vw;
  height: 100vh;
  display: flex; 
  /* justify-content: center; */
  
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
