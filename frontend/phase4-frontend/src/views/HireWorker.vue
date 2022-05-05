<template>
  <div class="flex-container">
    <div class="center">
      <div class = "title"> 
        Hire Worker
      </div>
      <div class="hire-form" >
        <el-form ref="form" :model="form" label-width="100px">
       <el-form-item label="Bank">
       <el-select v-model="form.bankID">
            <el-option
              v-for="item in form.bankList"
              :key="item.bankID"
              :label="item.bankID"
              :value="item.bankID">
            </el-option>
          </el-select>
       </el-form-item>
       <el-form-item label="Employee">
       <el-select v-model="form.employeeID">
            <el-option
              v-for="item in form.employeeList"
              :key="item.perID"
              :label="item.perID"
              :value="item.perID">
            </el-option>
          </el-select>
       </el-form-item>
        </el-form>
      </div>
      <div class="buttons-item" >
        <el-button class="btn" type="primary" @click="back">Back</el-button>
        <el-button class="btn" type="primary" @click="HireWorker">Confirm</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            form: {
              bankID: '',
              bankList: [],
              employeeID: '',
              employeeList: []
            }
        }
    },
    created(){
      this.getBankList();
      this.getEmployeeList()
    },
    methods: {
      back: function(){
        this.$router.push('/adminmenu')
      },
      onCreate() {
        console.log(this.global.LoginPerson);
        console.log('submit!');
      },
      onCancel(){
          console.log('cancel!')
      },
      getBankList(){
        this.axios({
          method:"get",
          url: "http://localhost:3000/getBankList", // 接口地址
        }).then(response=>{
          let result = response.data
          this.form.bankList=result
          console.log(result)
        }).catch(error => console.log(error, "error")); // 失败的返回
      },
      getEmployeeList(){
        this.axios({
          method:"get",
          url: "http://localhost:3000/PersonList", // 接口地址
        }).then(response=>{
          let result = response.data
          this.form.employeeList=result
          console.log(result)
        }).catch(error => console.log(error, "error")); // 失败的返回
      },
      HireWorker:function() {
        this.axios({
          method:"post",
          url: "http://localhost:3000/HireWorker", // 接口地址
          data:{
            BankID: this.form.bankID,
            PersonID: this.form.employeeID,
            Salary: 1000,
          }
        }).then(res=>{
          this.$message({
              message: `Sucessfully hire ${this.form.employeeID}!`,
              type: 'success'
          });
        }).catch(error => console.log(error, "error")); // 失败的返回
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
.hire-form{
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