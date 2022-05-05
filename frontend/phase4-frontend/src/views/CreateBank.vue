<template>
  <div class="flex-container">
    <div class="center-form">
      <div class = "title"> 
        Create Bank
      </div>
      <div class="bank-form" >
        <el-form ref="bankform" :model="bankform" label-width="80px">
        <el-form-item label="Bank ID">
            <el-input v-model="bankform.bankID"></el-input>
        </el-form-item>
        <el-form-item label="Name">
            <el-input v-model="bankform.bankName"></el-input>
        </el-form-item>
        </el-form>
      </div>
      <div class="bank-form" >
        <div class="subtitle">Address Info</div>
        <el-form ref="bankform" :model="bankform" label-width="80px">
        <el-col :span="12">
            <el-form-item label="Street">
                <el-input v-model="bankform.street"></el-input>
            </el-form-item>
        </el-col>
       <el-col :span="12">
        <el-form-item label="City">
            <el-input v-model="bankform.city"></el-input>
        </el-form-item>
       </el-col>
       <el-col :span="12">
            <el-form-item label="StateAbbr">
                <el-input v-model="bankform.stateabbr"></el-input>
            </el-form-item>
        </el-col>
       <el-col :span="12">
        <el-form-item label="Zipcode">
            <el-input v-model="bankform.zipcode"></el-input>
        </el-form-item>
       </el-col>
        </el-form>
      </div>
      <div class="bank-form" >
        <div class="subtitle">Operation Info</div>
        <el-form ref="bankform" :model="bankform" label-width="120px">
        <el-col :span="12">
            <el-form-item label="Reserved Assets">
                <el-input v-model="bankform.asset"></el-input>
            </el-form-item>
        </el-col>
       <el-col :span="12">
        <el-form-item label="CorpID">
        <el-select v-model="bankform.corpID" placeholder="请选择">
            <el-option
              v-for="item in bankform.corpList"
              :key="item.corpID"
              :label="item.corpID"
              :value="item.corpID">
            </el-option>
          </el-select>
        </el-form-item>
       </el-col>
       <el-col :span="12">
       <el-form-item label="Manager">
        <el-select v-model="bankform.manager" placeholder="请选择">
            <el-option
              v-for="item in bankform.managerList"
              :key="item.perID"
              :label="item.perID"
              :value="item.perID">
            </el-option>
          </el-select>
       </el-form-item>
        </el-col>
       <el-col :span="12">
       <el-form-item label="Employee">
       <el-select v-model="bankform.employeeID" placeholder="请选择">
            <el-option
              v-for="item in bankform.employeeList"
              :key="item.perID"
              :label="item.perID"
              :value="item.perID">
            </el-option>
          </el-select>
       </el-form-item>
       </el-col>
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
            bankform: {
              bankID: '',
              bankName: '',
              street: '',
              city: '',
              stateabbr:'',
              zipcode:'',
              asset:'',
              managerList:[],
              manager:'',
              corpList:[],
              corpID:'',
              employeeList:[],
              employeeID:''
            }
        }
    },
    created(){
      this.getManagerList();
      this.getCorpList();
      this.getEmployeeList();
    },
    methods: {
      onCreate() {
        console.log('submit!');
          this.axios({
          method:"post",
          url: "http://localhost:3000/createBank", // 接口地址
          data:{
            bankID: this.bankform.bankID,   // 传接口参数
            bankName: this.bankform.bankName,
            street: this.bankform.street,
            city: this.bankform.city,
            stateabbr: this.bankform.stateabbr,
            zipcode: this.bankform.zipcode,
            asset: this.bankform.asset,
            manager: this.bankform.manager,
            corpID: this.bankform.corpID,
            employeeID: this.bankform.employeeID
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
      getManagerList(){
        this.axios({
          method:"get",
          url: "http://localhost:3000/managerList", // 接口地址
        }).then(response=>{
          let result = response.data
          this.bankform.managerList=result
        }).catch(error => console.log(error, "error")); // 失败的返回
      },
      getCorpList(){
        this.axios({
          method:"get",
          url: "http://localhost:3000/corpList", // 接口地址
        }).then(response=>{
          let result = response.data
          this.bankform.corpList=result
        }).catch(error => console.log(error, "error")); // 失败的返回
      },
      getEmployeeList(){
        this.axios({
          method:"get",
          url: "http://localhost:3000/employeeList", // 接口地址
        }).then(response=>{
          let result = response.data
          this.bankform.employeeList=result
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

.center-form {
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 500px;
  margin: auto;
  padding: 100px;
  border: 1px solid #409EFF;
  text-align: left;
}
.bank-form{
  width: 500px;
  height: 100px;
  margin-top: 30px;
  margin-left: -100px;
  margin-bottom: 30px;
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
.subtitle{
    align-self:left;
    font-size:16px;
}
.input-with-select .el-input-group__prepend {
background-color: #fff;}
</style>