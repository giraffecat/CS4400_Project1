<template>
  <div class="flex-container">
    <div class="center">
      <div class = "title"> 
        Create Corporation
      </div>
      <div class="corp-form" >
        <el-form ref="corpform" :model="corpform" label-width="120px">
        <el-form-item label="Corporation ID" prop="corpID" :rules="[{required:true, message:'Please input a corporation ID!'}]">
          <el-input v-model="corpform.corpID"></el-input>
        </el-form-item>
        <el-form-item label="Long Name" prop="corpLN" :rules="[{required:true, message:'Please input a long name!'}]">
          <el-input v-model="corpform.corpLN"></el-input>
        </el-form-item>
        <el-form-item label="Short Name" prop="corpSN" :rules="[{required:true, message:'Please input a short name!'}]">
          <el-input v-model="corpform.corpSN"></el-input>
        </el-form-item>
        <el-form-item label="Reserved Assets">
          <el-input v-model="corpform.corpAssets"></el-input>
        </el-form-item>
        </el-form>

      </div>
      <div class="buttons-item" >
        <el-button class="btn" type="primary" @click="submitForm('corpform')">Create</el-button>
        <el-button class="btn" type="primary" @click="onCancel">Cancel</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
      return{
        corpform: {
            corpID: '',
            corpLN: '',
            corpSN: '',
            corpAssets: ''
        }
      }
    },
    methods: {
      submitForm(formName){
        this.$refs[formName].validate((valid)=>{
          if(valid){
            // if(this.corpform.corpAssets == ''){
            //   this.corpform.corpAssets = 0
            // }
            console.log(this.corpform)
            this.axios({
              method:"post",
              url: "http://localhost:3000/createCorp", // 接口地址
              data:{
                corpID: this.corpform.corpID,   // 传接口参数
                corpLN: this.corpform.corpLN,
                corpSN: this.corpform.corpSN,
                corpAssets: this.corpform.corpAssets == '' ? 0:this.console.corpAssets
              }
            }).then(response=>{
              this.$refs[formName].resetFields();
                this.$message({
                message: 'Sucessfully submit!',
                type: 'success'
                });
            }).catch(error => console.log(error, "error")); // 失败的返回
          } else{
            console.log("error");
            return false
          }
        })
      },
      onCancel(){
        console.log('cancel!')
        this.$router.push('/adminmenu')
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
.corp-form{
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