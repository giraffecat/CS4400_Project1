<template>
  <div class="flex-container">
    <div class="center">
      <h2 align = "center">Display corporation stats</h2>
      <el-table
      :data="corporationStats"
      stripe
      style="width:100%"
      max-height="100vh">
        <el-table-column
          prop="corporation_identifier"
          label="Corporation ID">
        </el-table-column>
        <el-table-column
          prop="short_name"
          label="Short Name">
        </el-table-column>
        <el-table-column
          prop="formal_name"
          label="Formal Name">
        </el-table-column>
        <el-table-column
          prop="number_of_banks"
          label="Number of Banks">
        </el-table-column>
        <el-table-column
          prop="corporation_assets"
          label="Corporation Assets($)">
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
        corporationStats:[]
      }
    },
    mounted(){
      this.CorporationStats();
    },
    methods: {
      CorporationStats:function(){
        console.log("asda",this.account, this.password)
        this.axios({
        method: "get",
        url: "http://localhost:3000/CorporationStats", // 接口地址
        }).then(res => {
          this.corporationStats = res.data;
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