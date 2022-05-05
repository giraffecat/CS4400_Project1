<template>
  <div class="flex-container">
    <div class="center">
      <div class = "title"> 
        Deposit
      </div>
      <div class="amount">
        <div class="menu-item" >Amount: </div>
        <el-input v-model="Amount" placeholder="$25.00"></el-input>
      </div>
      <div class="amount">
        <div class="menu-item" >To:</div>
        <el-select v-model="selectedBank" placeholder="Bank">
           <el-option
              v-for="item in form.bankID"
              :key="item.bankID"
              :value="item.bankID">
            </el-option>
        </el-select>
        <el-select v-model="selectedAccount" placeholder="Account">
          <el-option
              v-for="item in form.accountID"
              :key="item.accountID"
              :value="item.accountID">
            </el-option>
        </el-select>
      </div>
      <div class="menu-item" >
        <el-button @click="back" class="btn" type="primary">Back</el-button>
        <el-button class="btn" type="primary" @click = "Deposit">Deposit</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Deposit",
  data(){
    return {
      form: {
        accountID:"",
        bankID:""
      },
      Amount:null,
      option:[],
      selectedBank:null,
      selectedAccount:null
    }
  },
  watch: {
    selectedBank(val){
      this.GetAccounts();
    }
  },
  mounted(){
    this.GetBanks();
    this.show();
  },
  methods: {
    back: function(){
      this.$router.push('/customermenu')
    },
    GetBanks:function() {
      this.axios({
      method: "post",
      url: "http://localhost:3000/GetBanks", // 接口地址
      data:{
        LoginPerson: this.global.LoginPerson
      }
      }).then(res => {
        console.log("bankID",res)
        this.form.bankID = res.data
      })
    },
    GetAccounts: function() {
      this.axios({
      method: "post",
      url: "http://localhost:3000/GetAccounts", // 接口地址
      data:{
        LoginPerson: this.global.LoginPerson,
        BankID: this.selectedBank
      }
      }).then(res => {
        console.log("account",res.data)
        this.form.accountID = res.data
      })
    },
    show:function(){
      console.log("asd",this.global.LoginPerson);
    },
    Deposit:function() {
      console.log("this.global.LoginPerson",this.global.LoginPerson)
      if(this.Amount && this.selectedBank && this.selectedAccount) {
        this.axios({
          method: "post",
          url: "http://localhost:3000/Deposit", // 接口地址
          data:{
            PersonID : this.global.LoginPerson,
            Amount : this.Amount,
            BankID: this.selectedBank,
            AccountID: this.selectedAccount
          }
          }).then(res => {
             this.$message({
              message: `Sucessfully Deposit!`,
              type: 'success'
            });
          })
      }else {
        this.$message({
          message: `Please check your select`,
          type: 'warning'
        });
      }
    }
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