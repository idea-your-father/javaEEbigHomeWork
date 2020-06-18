<template>
  <div>
    <el-dialog
      title="编辑分类信息"
      :visible.sync="dialogTableVisible"
      width="600px"
      :before-close="handleClose"

    >
      <!--   start edit it    -->
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="title"
          label="产品"
          width="180">
        </el-table-column>
        <el-table-column
          prop="price"
          label="价格"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
      <!--  分页      -->
      <common-pagination @listenChangePage="changePage"
                         :total-count="totalCount" :page="query.page"
                         :size="query.size">

      </common-pagination>
      <!--      end !!!-->
    </el-dialog>
  </div>
</template>

<script>

  import {spuRequest} from '@/api/spu/spuRequest'
  import CommonPagination from "../../../../components/CommonPagination";

  export default {
    name: "PopUpTable",
    data() {
      return {
        dialogTableVisible: false,
        tableData: [],
        query: {
          categoryId: 1,
          page: 1,
          size: 5
        },
        totalCount:0
      }
    },
    methods: {
      setQuery(query) {
        this.query = query


      },
      changePage(data) {
        this.$log.print('*json',data)
        console.log(123,JSON.stringify(data))
        this.query.page = data.page
        this.query.size = data.size
        this.request(this.query)
      }
      ,
      async request(query) {
        let {data:res} = await spuRequest.request(query.page, query.size, query.categoryId)

        this.tableData = res.data
        this.totalCount = res.total;
      }
      ,
      openOrClose() {
        this.dialogTableVisible = !this.dialogTableVisible
        this.request(this.query)

      }
      ,
      handleClose(done) {
        done()
      }

    },
    components:{
      CommonPagination
    }

  }
</script>

<style scoped>

</style>
