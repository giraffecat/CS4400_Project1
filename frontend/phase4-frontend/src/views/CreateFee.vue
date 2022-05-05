<template>
  <div class="flex-container">
    <div class="center">
      <div class = "title"> 
        New Fee
      </div>
      <div class="menu-item" >
        <el-select v-model="selectedBank" placeholder="Bank">
          <el-option
              v-for="item in form.bankID"
              :key="item.bankID"
              :value="item.bankID">
          </el-option>
        </el-select>
      </div>
      <div class="menu-item" >
        <el-select v-model="selectedAccount" placeholder="Account">
          <el-option
              v-for="item in form.accountID"
              :key="item.accountID"
              :value="item.accountID">
          </el-option>
        </el-select>
      </div>
      <div class="menu-item" >
        <el-input v-model="FeeType" placeholder="Fee Type"></el-input>
      </div>
      <div class="menu-item" >
        <el-button @click="back" class="btn" type="primary">Back</el-button>
        <el-button class="btn" type="primary" @click="CreateFee">Confirm</el-button>
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
  name:"CreateFee",
  data(){
    return {
      form: {
        accountID:"",
        bankID:""
      },
      FeeType:null,
      option:[],
      selectedBank:null,
      selectedAccount:null
    }
  },
  watch: {
    selectedBank(val){
      this.GetInterestAccountsByBank();
    }
  },
  mounted(){
    this.GetBanks();
  },
  methods: {
    back: function(){
      this.$router.push('/adminmenu')
    },
    GetBanks:function() {
      this.axios({
      method: "get",
      url: "http://localhost:3000/GetBanksList", // 接口地址
      }).then(res => {
        console.log("bankID",res)
        this.form.bankID = res.data
      })
    },
    GetInterestAccountsByBank: function() {
      this.axios({
      method: "post",
      url: "http://localhost:3000/GetInterestAccountsByBank", // 接口地址
      data:{
        BankID: this.selectedBank
      }
      }).then(res => {
        console.log("account",res.data)
        this.form.accountID = res.data
      })
    },


    CreateFee:function() {
      if(this.selectedBank && this.selectedAccount && this.FeeType) {
        this.axios({
          method: "post",
          url: "http://localhost:3000/CreateFee", // 接口地址
          data:{
            LoginPerson: this.global.LoginPerson,
            FeeType : this.FeeType,
            BankID: this.selectedBank,
            AccountID: this.selectedAccount
          }
          }).then(res => {
            this.$message({
              message: `Sucessfully Create Fee!`,
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
