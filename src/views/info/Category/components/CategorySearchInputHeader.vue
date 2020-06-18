<template>
  <div class="header-block">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{path:'/shop'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="search">
      <!-- form      -->
      <el-form :inline="true" :model="query" class="demo-form-inline">
        <el-form-item label="品牌">
          <el-input v-model="query.brand" placeholder="输入查找品牌"></el-input>
        </el-form-item>
        <el-form-item label="首字母">
          <el-input v-model="query.letter" placeholder="输入首字母"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>


  </div>
</template>

<script>
  export default {
    name: "SearchInputHeader",
    data() {
      return {
        query:{
          letter:'',
          brand:''
        }
      }
    },
    methods:{
      onSubmit() {
        this.$emit('_search',this.query)

      }
    }
  }
</script>

<style scoped>
  .search{
    margin-top: 13px;
  }

</style>
