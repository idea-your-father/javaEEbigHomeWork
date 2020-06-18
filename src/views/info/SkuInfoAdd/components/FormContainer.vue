<template>
  <div>
    <header>
      <el-steps :active="active" finish-status="success">
        <el-step title="填写商品分类品牌"></el-step>
        <el-step title="填写商品spu"></el-step>
        <el-step title="填写商品sku"></el-step>
        <el-step title="提交"></el-step>
      </el-steps>
    </header>
    <section>
      <div>
        <el-form>
          <el-row class="category">
            <el-col :span="12">
              <el-input v-model="validateBo.brand" placeholder="产品品牌:小米"></el-input>
            </el-col>
          </el-row>
          <!--  产品         -->
          <el-row class="category">
            <el-col :span="12">
              <el-input v-model="validateBo.category" placeholder="商品分类: 手机"></el-input>
            </el-col>
          </el-row>
          <!--  产品名称        -->
          <el-row class="category">
            <el-col :span="12">
              <el-input v-model="validateBo.name" placeholder="产品名称: 小米9"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <!-- 参数名称 -->
            <el-col :span="6">
              <el-input v-model="inputParam.k" placeholder="内存"></el-input>
            </el-col>
            <el-col :span="2">
              <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            </el-col>

            <!--            参数值-->

            <el-col :span="6">
              <el-input v-model="inputParam.v" placeholder="32G" :disabled="disableV">

              </el-input>
            </el-col>
            <el-col :span="2">
              <div>&nbsp;&nbsp;&nbsp;</div>
            </el-col>

            <el-col :span="5">
              <el-button type="success" @click="addKV">添加参数</el-button>
            </el-col>
          </el-row>
          <el-row class="category">
            <el-col :span="5">
              <!--          库存-->
              <el-input label="小米9" v-model="inputParam.subtitle"   placeholder="副标题: 小米9尊享版本"/>

            </el-col>
          </el-row>


          <el-row class="category">
            <el-col :span="5">
<!--          库存-->
              <el-input label="库存" v-model="inputParam.surplusCount" placeholder="库存"/>

            </el-col>
          </el-row>
          <el-row class="category">
            <el-col :span="5">
              <!--          库存-->
              <el-input label="价格" v-model="inputParam.price" placeholder="单价"/>

            </el-col>
          </el-row>


        </el-form>
      </div>


    </section>
    <section class="table">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="param"
          label="参数"
          width="180">
        </el-table-column>
        <el-table-column
          prop="value"
          label="值"
          width="180">
        </el-table-column>

        <el-table-column>
          <template slot-scope="scope">
            <el-button type="danger"  size="mini" icon="el-icon-delete" @click="remove(scope.$index)"></el-button>
          </template>
        </el-table-column>

      </el-table>
    </section>
    <footer>
      <el-row>
        <el-button type="success" @click="commit">提交</el-button>
      </el-row>
    </footer>
  </div>
</template>

<script>
  import axios from 'axios'
  import {StringUtils} from "../../../../common/utils/StringUtils";

  export default {
    name: "FormContainer",
    data() {
      return {
        active: 0,

        tableData: [],
        inputParam: {
          k: '',
          v: '',
          price:'',
          surplusCount: '',
          subtitle:'',
          param:{}

        },
        validateBo: {
          brand: '',
          category: '',
          name: '',

        },

      }
    },
    methods: {
      remove(index){
        console.log(index)
        this.tableData.splice(index,1)
      },
      validate() {

      },
      commit() {
        let spuProductName = this.validateBo.name
        let brand =          this.validateBo.brand
        let category =       this.validateBo.category
        if(StringUtils.isAnyBlank(brand,category,spuProductName)) {
          return this.$message.error("请填写完整消息")
        }

        this.$log.print('param参数..',this.commitPacket())
        // 提交参数
        axios.post(`/spu/spu?brand=${brand}&category=${category}&spuProductName=${spuProductName}`)
        .then(res=>{
            console.log(res)
            if(500==res.data.code) {
              this.$message.error("对不起，没有这个分类，请先添加对应商品分类")
            }
            return res.data

        }).then(data=>{
          this.$log.print('data:0',data)
          //去提交 sku数据
          let sku = this.commitPacket()
          sku.spuId = data.data.id
          this.$log.print('log->>',sku)
          axios.post('/sku_info',sku)
          .then(skuResult=>{
            this.$log.print('skuResult ->',skuResult)
          })
        })
      },


      addKV() {
        if (this.inputParam.v == '') return
        this.tableData.push({
          'param': this.inputParam.k,
          'value': this.inputParam.v
        })
      }
      ,
      handleCheckChange() {

      },
      commitPacket(){

          //param
          let paramList = this.tableData
          let p1        = this.inputParam
          console.log(paramList)
          for(let i =0;i<paramList.length;++i) {
            let kv = paramList[i]
            console.log(kv.param)
            console.log(kv.value)
            p1.param[kv.param] = kv.value
          }
          p1.title = p1.subtitle

          return p1

          // title
          // let title = this.


        }
    },
    computed: {
      disableV: {
        get() {
          return this.inputParam.k.replace(/^\s+|\s+$/gm, '').length <= 0
        },


      },


    }
  }
</script>

<style scoped>
  header {
    width: 500px;
    margin-bottom: 20px;
  }

  .category {
    margin-bottom: 12px;
    margin-top: 12px;
  }

</style>
