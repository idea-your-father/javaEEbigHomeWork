<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="商品添加"><form-container></form-container></el-tab-pane>

      <el-tab-pane label="产品搜索助手"><shop-info></shop-info></el-tab-pane>
      <el-tab-pane label="分类搜索助手"><category></category></el-tab-pane>
      <el-tab-pane label="品牌搜索助手"><brand-info></brand-info></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import BrandInfo from "../../BrandInfo/BrandInfo";
  import ShopInfo from "../../ShopInfo/ShopInfo";
  import FormContainer from "./FormContainer";
  import Category from "../../Category/Category";


  export default {
    name: "Tab",
    data() {
      return {}
    },
    components:{
      BrandInfo,
      ShopInfo,
      FormContainer,
      Category
    }
  }
</script>

<style scoped>

</style>
