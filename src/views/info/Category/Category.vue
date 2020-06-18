<template>
  <div>

    <category-search-input-header></category-search-input-header>
    <category-data-table-card></category-data-table-card>


  </div>
</template>

<script>
  import CategorySearchInputHeader from "./components/CategorySearchInputHeader";
  import CategoryDataTableCard from "./components/CategoryDataTableCard";


  export default {
    name: "Category",
    data() {
      return {
        //获取用户列表的数据
        queryInfo: {
          page: 1,
          size: 5
        },


      }
    },
    mounted() {
    },
    components:{
      CategorySearchInputHeader,
      CategoryDataTableCard,


    },
    methods: {}
  }
</script>

<style scoped>

</style>
