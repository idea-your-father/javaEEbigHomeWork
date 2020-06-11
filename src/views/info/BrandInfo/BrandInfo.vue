<template>
    <div>
      <el-table :data="tableData">
        <el-table-column label="名称"         prop="title"     ></el-table-column>

        <el-table-column label="分类"         prop="category"     ></el-table-column>
        <el-table-column label="品牌"         prop="brand"     ></el-table-column>
        <el-table-column label="可出售"       prop="saleable"     ></el-table-column>
        <el-table-column label="上次更新时间"  prop="lastUpdateTime"     ></el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
        name: "BrandInfo",
      data() {
        return {
          //获取用户列表的数据
          queryInfo:{
            page:1,
            size:5
          },
          tableData: [{
            lastUpdateTime: '2016-05-02',
            title: '小米9',
            saleable: '是',
            category: '手机',

          }]

        }
      },
      mounted() {
      },
      methods:{

      }
    }
</script>

<style scoped>

</style>
