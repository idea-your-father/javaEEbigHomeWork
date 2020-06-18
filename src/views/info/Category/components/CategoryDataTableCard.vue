<template>
  <div>
    <el-card>
      <!--      <el-row>-->
      <!--        <el-col>-->
      <!--          <el-button type="primary">添加分类</el-button>-->
      <!--        </el-col>-->

      <!--      </el-row>-->
      <!-- 表格        -->
      <div class="block">
        <el-table
          :data="tableData"
          style="width: 100%"
          row-key="id"
          border
          lazy
          :load="loadData"


          :tree-props="{children: 'children', hasChildren: 'isParent'}">
          <el-table-column :width="180" v-for="(item,key) in fields" :key="item.id" :label="item.label"  :prop="item.prop"></el-table-column>
          <el-table-column label="是否有效">
            <template slot-scope="scope">
              {{convertData(scope.row.isDeleted)}}
            </template>
          </el-table-column>

          <el-table-column label="操作">
            <template slot-scope="scope">
              <!--    修改按钮      -->

              <el-tooltip v-if="scope.row.sort==3" effect="dark" content="查看品牌详细商品信息" placement="top">
                <el-button type="primary" size="mini" icon="el-icon-view" @click="openDialog(scope.row.id)"></el-button>
              </el-tooltip>



              <el-button v-if="scope.row.sort==3" type="danger" size="mini" icon="el-icon-delete"></el-button>

              <el-tooltip v-if="scope.row.sort==3" effect="dark" content="修改商品信息" placement="top">
                <el-button
                  @click="openSetting"
                  type="warning" size="mini" icon="el-icon-setting"></el-button>
              </el-tooltip>
            </template>
          </el-table-column>

        </el-table>
        <pop-up-setting ref="setting"></pop-up-setting>
<!--     弹框   -->
        <pop-up-table ref="popTable"></pop-up-table>


<!--        <button type="warning" @click="$refs.xx.openOrClose"></button>-->
      </div>

      <!-- 分页组件        -->

    </el-card>
  </div>
</template>

<script>

  import {categoryUtil} from "../../../../api/category/category";
  import PopUpSetting from "./PopUpSetting";
  import PopUpTable from "./PopUpTable";

  export default {
    name: "CategoryDataTableCard",
    data() {
      return {
        fields: [
          {
            label: '类型',
            prop: 'name'
          },

        ],

        tableData:[{
          name:'sjflajsf',
          isParent:1,
          isDeleted:'sfjaljf'
        }],

      }
    }
    ,
    methods: {
      async mountedLoad() {
        let {data:list} = await categoryUtil.request(null, 1)
        this.tableData = list
        this.$log.print('data -->',list)
      },
      openDialog(ss) {
        this.$log.print('查询参数',ss)
        let query = {
          'categoryId':ss,
          page:1,
          size:5
        }
        this.$refs.popTable.setQuery(query)
        this.$refs.popTable.openOrClose()
      },
      convertData(field) {
        if(field==null||field==0) {
          return '有效'
        }
        return '无效'
      },
      //下面是请求分类数据
      loadData(tree, treeNode, resolve) {
        this.$log.print(tree)
        this.$log.print(treeNode)
        // categoryUtil.request(tree[0].id,tree[0].sort+1)
        setTimeout(  () => {
          categoryUtil.request(tree.id,tree.sort+1)
          .then(data=>{
            // console.log('sjfajsfl'+JSON.stringify(data))
            resolve(data.data)
          })

        }, 0)
      },
      openSetting() {
        this.$refs.setting.openOrClose()

      }
    },
      //



    components: {

      PopUpSetting,
      PopUpTable
    },
    created() {
      this.mountedLoad()
      // this.getTotalCount()
      // this.requestFirstPage(1,5)
    }
  }
</script>

<style scoped>
  .el-card {
    margin-top: 12px
  }

  .block {
    margin-top: 10px;
  }


</style>
