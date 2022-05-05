<template>
  <div class="flex-container">
    <div class="center">
      <div class = "title"> 
        Replace Manager
      </div>
      <div class="replace-form" >
        <el-form ref="form" :model="form" label-width="100px">
       <el-form-item>
       <el-select v-model="selectedBank" placeholder="BankID">
            <el-option
              v-for="item in form.bankID"
              :key="item.bankID"
              :value="item.bankID">
            </el-option>
          </el-select>
       </el-form-item>
              <el-form-item>
       <el-select v-model="selectedEmployee" placeholder="Employee">
            <el-option
              v-for="item in form.Employee"
              :key="item.perID"
              :value="item.perID">
            </el-option>
          </el-select>
       </el-form-item>
       <el-form-item>
            <el-input v-model="form.salary" placeholder="New Salary"></el-input>
       </el-form-item>
        </el-form>
      </div>
      <div class="buttons-item" >
        <el-button class="btn" type="primary" @click="back">Back</el-button>
        <el-button class="btn" type="primary" @click="ReplaceManager">Confirm</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
          form: {
          BankID: null,
          Employee:null,
          salary:null,
        },
        selectedBank:null,
        selectedEmployee:null,
      }
    },
    mounted(){
      this.GetBanks();
    },
    watch: {
    selectedBank(val){
      this.GetEmployeeByBanks();
    },
   
  },
    methods: {
      back: function(){
        this.$router.push('/adminmenu')
      },
      onCreate() {
        console.log('submit!');
      },
      onCancel(){
          console.log('cancel!')
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
    GetEmployeeByBanks:function(){
      this.axios({
      method: "post",
      url: "http://localhost:3000/GetEmployeeByBanks", // 接口地址
      data:{
        BankID: this.selectedBank
      }
      }).then(res => {
        this.form.Employee = res.data
      })
    },
    ReplaceManager:function() {
      if(this.form.salary && this.selectedBank && this.selectedEmployee) {

        this.axios({
        method: "post",
        url: "http://localhost:3000/ReplaceManager", // 接口地址
        data:{
          BankID: this.selectedBank,
          Employee: this.selectedEmployee,
          salary: this.form.salary
        }
        }).then(res => {
          this.form.Employee = res.data
        })
      }else {
         this.$message({
          message: `Please check your input!`,
          type: 'warning'
        });
      }
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
  margin: auto;
  padding: 100px;
  border: 1px solid #409EFF;
  text-align: left;
}
.replace-form{
  margin-top: 30px;
  margin-left: -100px;
  align-self: center;
}
.buttons-item{
    align-self: center;
    margin:30px;
}
.btn{
  width: 150px;
  font-size: 15px;
}
.title{
  align-self: center;
  font-size: 25px;
}
.input-with-select .el-input-group__prepend {
background-color: #fff;}
</style>