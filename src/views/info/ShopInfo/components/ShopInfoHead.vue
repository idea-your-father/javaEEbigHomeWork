<template>
    <div class="shop-info-head">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{path:'/shop'}" >首页</el-breadcrumb-item>
        <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        <el-breadcrumb-item>商品SPU信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        name: "ShopInfoHead"
    }
</script>

<style scoped lang="less">
  .shop-info-head{
    margin-bottom: 16px;
  }



</style>
