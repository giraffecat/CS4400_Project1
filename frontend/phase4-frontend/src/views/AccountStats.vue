<template>
  <div class="flex-container">
    <div class="center">
      <h2 align = "center">Display account stats</h2>
      <el-table
      :data="accountStats"
      stripe
      style="width:100%"
      max-height="80vh">
        <el-table-column
          prop="name_of_bank"
          label="Bank">
        </el-table-column>
        <el-table-column
          prop="account_identifier"
          label="AccountID">
        </el-table-column>
        <el-table-column
          prop="account_assets"
          label="Account Balance($)">
        </el-table-column>
        <el-table-column
          prop="number_of_owners"
          label="Number of Owners">
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
        accountStats:[]
      }
    },
    mounted(){
      this.AccountStats();
    },
    methods: {
      back: function(){
        this.$router.push('/viewstats')
      },
      AccountStats:function(){
        console.log("asda",this.account, this.password)
        this.axios({
        method: "get",
        url: "http://localhost:3000/AccountStats", // 接口地址
        }).then(res => {
          this.accountStats = res.data;
          console.log("acount",res.data);
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
