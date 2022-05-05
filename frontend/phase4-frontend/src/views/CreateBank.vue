<template>
  <div class="flex-container">
    <div class="center-form">
      <div class = "title"> 
        Create Bank
      </div>
      <div class="bank-form" >
        <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="Bank ID">
            <el-input v-model="form.bankID"></el-input>
        </el-form-item>
        <el-form-item label="Name">
            <el-input v-model="form.bankName"></el-input>
        </el-form-item>
        </el-form>
      </div>
      <div class="bank-form" >
        <div class="subtitle">Address Info</div>
        <el-form ref="form" :model="form" label-width="80px">
        <el-col :span="12">
            <el-form-item label="Street">
                <el-input v-model="form.street"></el-input>
            </el-form-item>
        </el-col>
       <el-col :span="12">
        <el-form-item label="City">
            <el-input v-model="form.city"></el-input>
        </el-form-item>
       </el-col>
       <el-col :span="12">
            <el-form-item label="StateAbbr">
                <el-input v-model="form.stateabbr"></el-input>
            </el-form-item>
        </el-col>
       <el-col :span="12">
        <el-form-item label="Zipcode">
            <el-input v-model="form.zipcode"></el-input>
        </el-form-item>
       </el-col>
        </el-form>
      </div>
      <div class="bank-form" >
        <div class="subtitle">Operation Info</div>
        <el-form ref="form" :model="form" label-width="120px">
        <el-col :span="12">
            <el-form-item label="Reserved Assets">
                <el-input v-model="form.asset"></el-input>
            </el-form-item>
        </el-col>
       <el-col :span="12">
        <el-form-item label="CorpID">
        <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in corpID"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
       </el-col>
       <el-col :span="12">
       <el-form-item label="Manager">
        <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in corpID"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
       </el-form-item>
        </el-col>
       <el-col :span="12">
       <el-form-item label="Employee">
       <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in corpID"
              :key="item.value"
              :label="item.label"
              :value="item.value">
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
            form: {
          bankID: '',
          bankName: '',
          street: '',
          city: '',
          stateabbr:'',
          zipcode:''
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