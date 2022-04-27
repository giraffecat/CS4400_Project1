<template>
  <div class="flex-container">
    <div class="center">
      <div class = "title">Employee Stats</div>
      <el-table stripe style= "width: 100%">

        <el-table-column
          prop="date"
          label="PerID">
        </el-table-column>
        <el-table-column
          prop="name"
          label="TaxID">
        </el-table-column>
        <el-table-column
          prop="address"
          label="Name">
        </el-table-column>
        <el-table-column
          prop="address"
          label="DOB">
        </el-table-column>
        <el-table-column
          prop="address"
          label="Date Joined">
        </el-table-column>
        <el-table-column
          prop="address"
          label="Street">
        </el-table-column>
        <el-table-column
          prop="address"
          label="City">
        </el-table-column>
        <el-table-column
          prop="address"
          label="State">
        </el-table-column>
        <el-table-column
          prop="address"
          label="Zip">
        </el-table-column>
        <el-table-column
          prop="address"
          label="Number of Banks">
        </el-table-column>
        <el-table-column
          prop="address"
          label="Bank Assets">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name:'employeeStats',
  mounted(){
    this.getData();
  },
  data() {
    return {
    }
  },
  methods:{
    getData:function(){
      // console.log("asda",this.account, this.password)
      this.axios({
      method: "post",
      url: "http://localhost:3000/employeeStats", // 接口地址
      data: {
        }
      }).then(response => {
        console.log(response.data[0]);   
      }).catch(error => console.log(error, "error")); 
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
  width: 90%;
  height: 100vh;
  padding: 50px;
  margin: auto;
  border: 1px solid #409EFF;
  text-align: left;
}
</style>