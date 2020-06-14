<template>
  <div>
    <el-dialog title="收货地址"
               @close="closePopUp"
               :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <!--      <el-table :data="gridData">-->
        <el-table-column v-for="(field,i) in fields"
                         :property="field.property"
                         :label="field.label"


                         :key="i"

        >

        </el-table-column>
        <!--        <el-table-column property="name" label="姓名" width="200"></el-table-column>-->
        <!--        <el-table-column property="address" label="地址"></el-table-column>-->
      </el-table>
    </el-dialog>
  </div>

</template>

<script>

  export default {

    name: "PopUp",
    data() {
      return {
        dialogTableVisible: false,
        gridData: [],
        fields: [
          {
            'property': 'title',
            'label': '产品'
          },
          {
            'property': 'price',
            'label': '价格'
          }, {
            'property': 'param',
            'label': '参数'
          },
          {
            'property': 'saleable',
            'label': '是否可销售'
          }, {
            'property': 'lastUpdateTime',
            'label': '最近更新时间'
          }
        ]
      }

    },
    methods: {
      closePopUp() {
        this.$emit('close')
      },
      openDialog(spuId) {
        this.$log.print('spuId ->', spuId)
        this.renderGrid(spuId)
      },
      async renderGrid(spuId) {
        let {data: result} = await this.$http.get(`/sku?spuId=${spuId}`);
         console.log("xxx--->",result)


          this.$log.print(result[0].param )
          // json.param = json.param.toString()
          //result[0].param = JSON.stringify(result[0].param)
        for(let i=0;i<result.length;++i) {
          result[i].param = JSON.stringify(result[i].param)
          result[i].lastUpdateTime = this.$log.formatDate(result[i].lastUpdateTime)
        }
        this.gridData = result
        this.dialogTableVisible = true
      }
    },
    computed: {

    }
  }
</script>

<style scoped>

</style>
