<template>
  <div class="flex-container">
    <div class="center">
      <div class = "title"> 
        Create Employee Role
      </div>
      <div class="employee-form" >
        <el-form ref="form" :model="form" label-width="200px">
       <el-form-item>
       <el-select v-model="form.employeeID">
            <el-option
              v-for="item in form.employeeList"
              :key="item.perID"
              :label="item.perID"
              :value="item.perID">
            </el-option>
          </el-select>
       </el-form-item>
        <el-form-item label="Salary">
            <el-input v-model="form.salary"></el-input>
        </el-form-item>
        <el-form-item label="#of payments">
            <el-input v-model="form.timeOfPay"></el-input>
        </el-form-item>
        <el-form-item label="Accumulated Earnings">
            <el-input v-model="form.earnings"></el-input>
        </el-form-item>
        </el-form>
      </div>
      <div class="buttons-item" >
        <el-button class="btn" type="primary" @click="onCreate">Create</el-button>
        <el-button class="btn" type="primary" @click="onCancel">Cancel</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            form: {
              employeeID: '',
              salary: '',
              timeOfPay: '',
              earnings: '',
              employeeList:[]
        }
        }
    },
    created(){
      this.getEmployeeList();
    },
    methods: {
      onCreate() {
        console.log('submit!');
        this.axios({
          method:"post",
          url: "http://localhost:3000/getPersonList", // 接口地址
          data:{
            employeeID: this.form.employeeID,   // 传接口参数
            salary: this.form.salary,
            timeOfPay: this.form.timeOfPay,
            earnings: this.form.earnings
          }
        }).then(response=>{
            this.$message({
            message: 'Sucessfully submit!',
            type: 'success'
            });
        }).catch(error => console.log(error, "error")); // 失败的返回
      },
      onCancel(){
          console.log('cancel!')
      },
      getEmployeeList(){
        this.axios({
          method:"get",
          url: "http://localhost:3000/getPersonList", // 接口地址
        }).then(response=>{
          let result = response.data
          this.form.employeeList=result
          console.log(result)
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
.employee-form{
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