<template>
  <div class="search">

      <el-form :inline="true" :model="searchQuery" class="demo-form-inline">
        <el-form-item label="标题">
          <el-input v-model="searchQuery.title" placeholder="标题"></el-input>
        </el-form-item>
        <el-form-item label="分类">
          <el-input v-model="searchQuery.category" placeholder="分类"></el-input>
        </el-form-item>
        <el-form-item label="品牌">
          <el-input v-model="searchQuery.brand" placeholder="品牌"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>

  </div>
</template>

<script>
  export default {
    name: "ShopInfoSearch",
    data() {
      return {
        searchQuery: {
          title: '',
          category:'',
          brand:''
        }
      }

    },
    methods:{
      onSubmit() {

      }
    }
  }
</script>

<style scoped>
  .search{
    /*border: 1px solid black;*/
    background-color: white;
    box-sizing: border-box;
    padding-top: 18px;
    padding-left: 10px;
  }

</style>
