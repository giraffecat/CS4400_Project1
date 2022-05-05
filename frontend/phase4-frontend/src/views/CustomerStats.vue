<template>
  <div class="flex-container">
    <div class="center">
      <h2 align = "center">Display customer stats</h2>
      <el-table
      :data="customerStats"
      stripe
      style="width:100%"
      max-height="80vh">
        <el-table-column
          prop="person_identifier"
          label="Customer ID">
        </el-table-column>
        <el-table-column
          prop="tax_identifier"
          label="TAX ID">
        </el-table-column>
        <el-table-column
          prop="customer_name"
          label="Customer Name">
        </el-table-column>
        <el-table-column
          prop="date_of_birth"
          label="Date of Birth">
        </el-table-column>
                <el-table-column
          prop="joined_system"
          label="Joined Date">
        </el-table-column>
        <el-table-column
          prop="street"
          label="Street">
        </el-table-column>
                <el-table-column
          prop="city"
          label="City">
        </el-table-column>
                <el-table-column
          prop="state"
          label="State">
        </el-table-column>
        <el-table-column
          prop="zip"
          label="Zip">
        </el-table-column>
      <el-table-column
          prop="number_of_accounts"
          label="Number of Accounts">
        </el-table-column>
        <el-table-column
          prop="ifnull(customer_assets,0)"
          label="Customer Assets ($)">
        </el-table-column>
      </el-table>
      <el-button @click="back" class="btn" type="primary">Back</el-button>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        customerStats:[]
      }
    },
    mounted(){
      this.CustomerStats();
    },
    methods: {
      back: function(){
        this.$router.push('/viewstats')
      },
      CustomerStats:function(){
        this.axios({
        method: "get",
        url: "http://localhost:3000/CustomerStats", // 接口地址
        }).then(res => {
          //日期处理
          for(let i = 0; i < res.data.length; i++) {
            if( res.data[i].date_of_birth){
              res.data[i].date_of_birth = res.data[i].date_of_birth.split("T")[0];
            }
            if( res.data[i].joined_system){
              res.data[i].joined_system = res.data[i].joined_system.split("T")[0];
            }
          }
          this.customerStats = res.data;
          console.log("customerStats",res.data)
        })    
      }
    }
  }
</script>

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
  width: 90%;
  height: 100vh;
  padding: 50px;
  margin: auto;
  border: 1px solid #409EFF;
  text-align: left;
}
</style>
