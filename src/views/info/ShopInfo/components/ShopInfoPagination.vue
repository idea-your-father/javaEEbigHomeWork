<template>
  <div class="card-pagination">
    <el-card>
      <el-pagination
        @size-change="sendMsgPopUpSize"
        @current-change="sendMsgWithPage"
        :page-sizes="[5,10,15]"
        :page-size="this.size"
        :current-page="this.page"
        :total="this.totalCount"
        layout="total, sizes, prev, pager, next, jumper"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "ShopInfoPagination",
    props: {
      totalCount: Number,
      page: Number,
      size: Number
    },
    data() {
      return {}
    },
    methods: {
      sendMsgPopUpSize(size) {
        // console.log('页面改变了 '+val)
        if(size>=this.totalCount) {
          this.page = 1
        }
        let data = {
          'page':this.page,
          'size':size,
          'totalCount':this.totalCount
        }
        this.$emit('listenChangePage', data
        );
      },
      sendMsgWithPage(page) {
        let data = {
          'page':page,
          'size':this.size,
          'totalCount':this.totalCount
        }
        this.$emit('listenChangePage', data
        );
      }
    }
  }
</script>

<style scoped>
  .card-pagination {
    margin-top: 4px;
  }

</style>
