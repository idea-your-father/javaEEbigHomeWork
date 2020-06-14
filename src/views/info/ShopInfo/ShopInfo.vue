<template>
  <div>
    <!--    面包屑-->
    <shop-info-head></shop-info-head>
    <!--    搜索框-->
    <shop-info-search></shop-info-search>
<!--  POPup  -->
    <pop-up ref="popup"  @close="closePopUp"></pop-up>
<!--    <el-button></el-button>-->

    <!--  数据表格  -->
    <el-table :data="tableData" border stripe>
      <el-table-column label="名称" prop="title">

      </el-table-column>

      <el-table-column label="分类" prop="category">
        <template slot-scope="scope">
          {{scope.row.category.name}}
        </template>
      </el-table-column>
      <el-table-column label="品牌" prop="brand">
        <template slot-scope="scope">
          {{scope.row.brand.name}}
        </template>
      </el-table-column>
      <el-table-column label="可出售" prop="saleable">
        <template slot-scope="scope">
          <!--       ss   {{scope.row}}-->
          <el-switch v-model="scope.row.saleable"
                     @change="changeStatus($event,scope.row,scope.$index)"
                     active-value="1"
                     inactive-value="0"
          >

          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="上次更新时间" prop="lastUpdateTime">
        <template slot-scope="scope">
          {{$log.formatDate(scope.row.lastUpdateTime)}}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!--    修改按钮      -->
          <el-tooltip effect="dark" content="查看品牌详细商品信息" placement="top">
            <el-button type="primary" size="mini" icon="el-icon-view" @click="openDialog(scope.row.id)"></el-button>
          </el-tooltip>

          <el-button type="danger" size="mini" icon="el-icon-delete"></el-button>

          <el-tooltip effect="dark" content="修改商品信息" placement="top">
            <el-button type="warning" size="mini" icon="el-icon-setting"></el-button>
          </el-tooltip>
        </template>
      </el-table-column>

    </el-table>
    <!--    分页-->
    <shop-info-pagination :total-count="this.tableParam.totalCount" :page="tableParam.page" :size="tableParam.size"
                          @listenChangePage="listenChangePage"
    />


  </div>
</template>

<script>
  import ShopInfoHead from "./components/ShopInfoHead";
  import ShopInfoSearch from "./components/ShopInfoSearch";
  import ShopInfoPagination from "./components/ShopInfoPagination";
  import PopUp from "./components/PopUp";
  export default {
    name: "ShopInfo",
    data() {
      return {
        //获取用户列表的数据
        tableParam: {
          totalCount: 0,
          page: 1,
          size: 5
        },
        queryInfo: {
          page: 1,
          size: 5
        },
        tableData: [{
          lastUpdateTime: '2016-05-02',
          title: '小米9',
          saleable: '1',
          category: '手机',
          brand: '小米'

        }],
        PopUpVisible:false,
        PopUpShowSpuId:0

      }
    },
    mounted() {
      //初始化表格！！！
      this.initTable()
      this.initTotalCount()
      // 获取总记录数量

    },
    methods: {
      openDialog(spuId){
        this.PopUpVisible = true
        console.log(this.$refs.popup)
        this.$refs.popup.openDialog(spuId)

        // this.$refs.popup.openDialog()
      },
      async initTable() {
        console.log("发送ajax请ss求")
        const {data: result} = await this.$http.get('spu/spu_info?page=1&size=5');

        this.tableData = result;
        this.tableParam.page = 1;
        this.tableParam.size = 5;

      },
      async initTotalCount() {
        const {data: result} = await this.$http.get('spu/spu_info/_count')
        let recordCount = result.data
        this.tableParam.totalCount = recordCount;

        // console.log(`result ->${result}`)
        console.log(`总记录数量 ${recordCount}`)
      },
      async requestShopInfoData() {
        const {data: result} = await this.$http.get(`spu/spu_info?page=${this.tableParam.page}&size=${this.tableParam.size}`);
        console.log(result)
      },
      listenChangePage(param) {
        console.log('result --->',param)
        this.requestData(param.page,param.size)
        this.initTotalCount()

      },

      changeStatus(event,obj,idx) {
        // this.$log.print("改变状态->",obj,"->"+idx)
        this.changeStatus2(event,obj)
      },
      async changeStatus2(event,obj) {
        let status = obj.saleable
        let spuId = obj.id
        this.$log.print("改变状态->",status,"->"+spuId)
        let req = {
          'id':spuId,
          'saleable':status.toString()
        }

        let resp = await this.$http.put("/spu/spu/saleable",req)
        this.$log.print('response',resp)
      }
      ,
      async requestData(page, size) {

        let data = await this.$http.get(`spu/spu_info?page=${page}&size=${size}`);
        // console.log('result ->',data)
        this.tableData = data.data
        // log.info("data:"+data)


        this.tableParam.page = page
        this.tableParam.size = size
        // this.tableData = result
        // this.tableParam.totalCount = count
      },
      // popUpDialog(obj) {
      //   this.$log.print('点击对象',obj)
      //   this.PopUpVisible = !this.PopUpVisible
      // },
      closePopUp() {
        this.PopUpVisible = false
        this.$log.print('关闭窗口')
      }
    },

    components: {
      'shop-info-head': ShopInfoHead,
      'shop-info-search': ShopInfoSearch,
      ShopInfoPagination,
      PopUp
    }
  }
</script>

<style scoped>

</style>
