<template>
  <div class="flex-container">
    <div class="center">
      <h2 align = "center">Display bank stats</h2>
      <el-table
      :data="bankStats"
      stripe
      style="width:100%"
      max-height="100vh">
        <el-table-column
          prop="bank_identifier"
          label="Bank ID">
        </el-table-column>
        <el-table-column
          prop="name_of_corporation"
          label="Corporation Name">
        </el-table-column>
        <el-table-column
          prop="name_of_bank"
          label="Bank Name">
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
          prop="bank_assets"
          label="Bank Assets($)">
        </el-table-column>
        <el-table-column
          prop="total_assets"
          label="Total Assets($)">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        bankStats:[]
      }
    },
    mounted(){
      this.BankStats();
    },
    methods: {
      BankStats:function(){
        console.log("asda",this.account, this.password)
        this.axios({
        method: "get",
        url: "http://localhost:3000/BankStats", // 接口地址
        }).then(res => {
          this.bankStats = res.data;
          console.log("acount",res.data);
        })    
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