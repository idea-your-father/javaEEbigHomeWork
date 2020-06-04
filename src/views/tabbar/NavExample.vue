<template>
  <el-container>
    <!-- 头部区域    -->
    <el-header>
      Header
      <el-button type="info">退出</el-button>
    </el-header>
    <el-container>
      <!-- 侧边栏区域    -->
      <el-aside></el-aside>
      <el-main></el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "NavExample"
  }
</script>

<style lang="less" scoped>
  .el-header {
    background-color: #373d41;
  }

  .el-aside {
    background-color: #333744;
  }

  .el-main {
    background-color: #EAEDF1;
  }


</style>
