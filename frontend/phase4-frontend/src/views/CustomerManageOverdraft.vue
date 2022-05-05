<template>
  <div class="flex-container">
    <div class="center">
      <div class = "title"> 
        Manage Overdraft Policies
      </div>
      <div class="menu-item" >
        <el-select v-model="selectedcheckingAccount" placeholder="Available Checking Accounts">
           <el-option
              v-for="item in form.checkingAccount"
              :key="item.accountID"
              :value="item.accountID">
            </el-option>
        </el-select>
      </div>
      <div class="menu-item" >
        <div>
          <input type="checkbox" value="Adding Overdraft Policy?" id="checkbox" v-model="checked">
          <label for="checkbox">Adding Overdraft Policy?</label>
        </div>
        <div>
          <el-select v-model="selectedsavingAccount" placeholder="Available Savings Accounts">
             <el-option
              v-for="item in form.savingAccount"
              :key="item.accountID"
              :value="item.accountID">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="menu-item" >
        <el-button @click="back" class="btn" type="primary">Back</el-button>
        <el-button class="btn" type="primary" @click="Overdraft">Confirm</el-button>
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
  name:"CustomerManageOverdraft",
  mounted(){
    this.GetCheckingAccount();
    this.GetSavingAccount();
  },
  watch: {
    selectedcheckingAccount(val){
      for(let i = 0; i < this.form.checkingAccount.length; i++) {
        if(val == this.form.checkingAccount[i].accountID) {
          this.selectedcheckingBank = this.form.checkingAccount[i].bankID;
          console.log(this.selectedcheckingBank)
        }
      }
    },
    selectedsavingAccount(val){
      for(let i = 0; i < this.form.savingAccount.length; i++) {
        if(val == this.form.savingAccount[i].accountID) {
          this.selectedsavingBank = this.form.savingAccount[i].bankID;
          console.log(this.selectedsavingBank)
        }
      }
    },
  },
  data(){
    return {
      form: {
        checkingAccount:"",
        savingAccount:""
      },
      selectedcheckingAccount:null,
      selectedsavingAccount:null,
      selectedcheckingBank:null,
      selectedsavingBank:null,
      option:[],
      checked:true
    }
  },
  methods: {
    back: function(){
      this.$router.push('/customermenu')
    },

    GetCheckingAccount:function() {
      this.axios({
        method: "post",
        url: "http://localhost:3000/GetCheckingAccounts", // 接口地址
        data:{
          PersonID : this.global.LoginPerson,
        }
        }).then(res => {
          this.form.checkingAccount = res.data
        })
    },
    GetSavingAccount:function() {
          this.axios({
            method: "post",
            url: "http://localhost:3000/GetSavingAccount", // 接口地址
            data:{
              PersonID : this.global.LoginPerson,
            }
            }).then(res => {
               this.form.savingAccount = res.data
            })
        },

    Overdraft:function() {
      if(this.checked){
        this.AddOverdraft();
      }else{
        this.StopOverdraft();
      }
    },
    AddOverdraft:function(){
      console.log("AddOverdraft")
      this.axios({
        method: "post",
        url: "http://localhost:3000/AddOverdraft", // 接口地址
        data:{
          PersonID : this.global.LoginPerson,
          CheckingBankID: this.selectedcheckingBank,
          CheckingAccount: this.selectedcheckingAccount,
          SavingBankID: this.selectedsavingBank,
          SavingAccount: this.selectedsavingAccount,
        }
        }).then(res => {
          this.$message({
            message: `Sucessfully Add Overdraft!`,
            type: 'success'
          });
      })
    },
    StopOverdraft:function() {
      this.axios({
        method: "post",
        url: "http://localhost:3000/StopOverdraft", // 接口地址
        data:{
          PersonID : this.global.LoginPerson,
          CheckingBankID: this.selectedcheckingBank,
          CheckingAccount: this.selectedcheckingAccount,
        }
        }).then(res => {
          this.$message({
            message: `Sucessfully Stop Overdraft!`,
            type: 'success'
          });
      })
    }
  }
}
</script>