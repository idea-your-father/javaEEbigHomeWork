<template>
  <div>
    <!--      商品分类组件-->
    <search-input-header @_search="searchInfo">

    </search-input-header>
    <data-table-card

      ref="dataTable"
      @requestPage="updatePage"
      @getTotalCount="updateCount">

    </data-table-card>
    <common-pagination @listenChangePage="changePage" :total-count="totalCount" :page="page"
                       :size="size">

    </common-pagination>


  </div>
</template>

<script>
  import DataTableCard from "./components/DataTableCard";
  import SearchInputHeader from "./components/SearchInputHeader";
  import CommonPagination from "../../../components/CommonPagination";

  export default {
    name: "BrandInfo",
    data() {
      return {
        page: 1,
        size: 5,
        totalCount: 0,

      }
    },
    methods: {
      updatePage(page, size) {
        this.page = page
        this.size = size
      },
      updateCount(total) {
        this.totalCount = total
      },
      changePage(pageSizeCount) {
        this.$refs.dataTable.requestFirstPage(pageSizeCount.page, pageSizeCount.size)
      },
      searchInfo(json) {
        this.$log.print('11',json)

        let dataForm = this.$refs.dataTable
        dataForm.setQuery(json)
        dataForm.requestFirstPage(1, this.size)
      }
    },
    mounted() {
      this.$refs.dataTable.requestFirstPage(1,5)
    },
    components: {
      DataTableCard,
      SearchInputHeader,
      CommonPagination
    }

  }
</script>

<style scoped>


</style>
