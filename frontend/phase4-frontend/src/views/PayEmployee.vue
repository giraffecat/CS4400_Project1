<template>
  <div class="flex-container">
    <div class="center">
      <div class = "title"> 
        Pay employees
      </div>
      <div class="menu-item" >
        <el-button class="btn" type="primary">Pay all employees</el-button>
      </div>
    </div>
  </div>
</template>

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
.title{
  align-self: center;
  font-size: 25px;
  margin-bottom:30px;
}
.menu-item{
  margin: 30px;
  align-self: center;
}
.btn{
  width: 150px;
  font-size: 15px;
}
</style>

