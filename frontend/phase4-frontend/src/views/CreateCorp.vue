<template>
  <div class="flex-container">
    <div class="center">
      <div class = "title"> 
        Create Corporation
      </div>
      <div class="corp-form" >
        <el-form ref="form" :model="form" label-width="150px">
        <el-form-item label="Corporation ID" :rules="[{required:true, message:'Please input a valid corporation ID!'}]">
          <el-input v-model="form.corpID"></el-input>
        </el-form-item>
        <el-form-item label="Long Name" required>
          <el-input v-model="form.corpLN" :rules="[{required:true, message:'Please input a valid corporation long name!'}]"></el-input>
        </el-form-item>
        <el-form-item label="Short Name" required>
          <el-input v-model="form.corpSN" :rules="[{required:true, message:'Please input a valid corporation short name!'}]"></el-input>
        </el-form-item>
        <el-form-item label="Reserved Assets">
          <el-input v-model="form.corpAssets"></el-input>
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
            corpID: '',
            corpLN: '',
            corpSN: '',
            corpAssets: ''
        }
      }
    },
    methods: {
      onCreate() {
        console.log("create Corp",this.corpID, this.corpLN, this.corpSN, this.corpAssets)
        this.axios({
        method: "post",
        url: "http://localhost:3000/createCorp", // 接口地址
        data: {
            corpID: this.corpID,   // 传接口参数
            corpLN: this.corpLN,
            corpSN: this.corpSN,
            corpAssets: this.corpAssets
            }
        }).then(response => {
            // console.log(response.data[0].role);
            if(response.data.length != 0) {
            this.$message({
                message: 'Sucessfully login!',
                type: 'success'
            });
            if(response.data[0].role=='customer'){
                this.$router.push('/customermenu')
            }
            if(response.data[0].role=='admin'){
                this.$router.push('/adminmenu')
            }
            if(response.data[0].role=='manager'){
                this.$router.push('/managermenu')
            }
            } else {
            this.$message({
                message: 'Check your accountID and password!',
                type: 'warning'
            });
            }   // 成功的返回      
        }).catch(error => console.log(error, "error")); // 失败的返回
      },
      onCancel(){
    console.log('cancel!')
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