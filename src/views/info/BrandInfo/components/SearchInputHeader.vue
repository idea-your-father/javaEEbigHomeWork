<template>
  <div class="header-block">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>
    <div>sfjlasjflasj</div>

  </div>
</template>

<script>
  export default {
    name: "SearchInputHeader",
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .header-block{
    border: 1px;
    background-color: red;
  }

</style>
