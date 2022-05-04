<template>
  <div class="flex-container">
    <div class="center">
      <div class = "title"> 
        Create Corporation
      </div>
      <div class="corp-form" >
        <el-form ref="form" :model="form" label-width="150px">
        <el-form-item label="Corporation ID">
          <el-input v-model="form.ID"></el-input>
        </el-form-item>
        <el-form-item label="Long Name">
          <el-input v-model="form.LN"></el-input>
        </el-form-item>
        <el-form-item label="Short Name">
          <el-input v-model="form.SN"></el-input>
        </el-form-item>
        <el-form-item label="Reserved Assets">
          <el-input v-model="form.Assets"></el-input>
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
            ID: '',
            LN: '',
            SN: '',
            Assets: ''
        }
      }
    },
    methods: {
      onCreate() {
        console.log('submit!');
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