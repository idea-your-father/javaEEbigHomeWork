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
        <el-table :data="tableData"   border stripe>
<!--           <el-table-column label="品牌">-->
          <column v-for="(field,index) in fields" :key="index" :prop="field.prop" :label="field.label"></column>


        </el-table>
      </div>

      <!-- 分页组件        -->

    </el-card>
  </div>
</template>

<script>
  import Column from "./Column";
  import {webUtil} from '@/api/brand/brand';
  export default {
    name: "DataTableCard",
    data() {
      return {
        fields:[
          {
            label:'品牌',
            prop:'name'
          },
          {
            label:'首字母',
            prop: 'letter'
          }
        ],
        tableData:[
          {
            date:'ss',
            name:'小米'
          }

        ],
        totalCount:0,
        query:{name:'',letter:''}
      }
    }

    ,
    methods:{
      async requestFirstPage(page,size){
        await this.getTotalCount()
        // let {data:array} = await webUtil.showBrand(page,size)
        let name = ''
        let letter = ''
        console.log(this.query)
        if(this.query!=undefined) {
          name = this.query.name==undefined?'':this.query.name
          letter = this.query.letter==undefined? '':this.query.letter
          this.$log.print(name,letter)
        }
        let {data:array} = await webUtil.searchLike(page,size,name,letter)

        this.$log.print('$brand,,',array)
        this.tableData = array

        //通知父组件
        this.$emit('requestPage',page,size)
      },
      async getTotalCount() {
        let {data:total} = await webUtil.getTotalCount()
        this.totalCount = total
        this.$emit('getTotalCount',total)
      },
      setQuery(query) {
        this.query = query
      }

    },
    components:{
      Column
    },
    mounted() {
      // this.getTotalCount()
      // this.requestFirstPage(1,5)
    }
  }
</script>

<style scoped>
  .el-card {
    margin-top: 12px
  }
  .block{
    margin-top: 10px;
  }


</style>
