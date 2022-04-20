<template>
  <div class="flex-container">
    <div class="center">
      <el-table
      stripe
      style="width: 100%">
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
    data() {
      return {
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