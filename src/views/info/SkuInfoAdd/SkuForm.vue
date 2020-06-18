<template>
  <div>
    <tab></tab>



  </div>
</template>

<script>
  import Tab from "./components/Tab";


  export default {
    name: "SkuForm",
    data() {
      return {
        active: 0
      }
    },
    components:{
      Tab,

    }
  }
</script>

<style scoped>

</style>
