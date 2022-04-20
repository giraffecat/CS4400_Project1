<template>
  <div> This is about 
      <button @click="clickme"> click me </button>
  </div>
</template>

<script>
export default {
  name:"about",
  methods:{
    clickme:function() {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
