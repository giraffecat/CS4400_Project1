<template>
  
</template>

<script type="text/javascript">
  // 定义一些公共的属性和方法
  let LoginPerson = "atrebek1"
  // let test = "tess"
  function commonFun() {
      console.log("公共方法")
  }
  // function setLoginPerson(Login) {
  //   console.log("111111111111")
  //   LoginPerson = Login;
  // }
  // 暴露出这些属性和方法
  export default {
    LoginPerson,
    // test,
    commonFun,
    // setLoginPerson
  }
</script>

<style>

</style>