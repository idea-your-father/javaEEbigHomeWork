<template>
  <div>
    <el-dialog
      title="编辑分类信息"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"

    >
<!--   start edit it    -->
      <el-form    ref="ruleForm">
        <el-form-item label="类型"   prop="name">
          <el-input v-model="tableForm.categoryName"  autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-select v-model="tableForm.categoryIsDeleted" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

      </el-form>

<!--      end !!!-->
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "PopUp",

    data() {
      return {
        dialogVisible:false,
        options: [{
          value: '1',
          label: '有效'
        },
          {
            value: '0',
            label: '无效'
          }
        ],

        tableForm:{
          categoryName:'？',
          categoryIsDeleted:'有效'
        }

      }





    },
    methods: {
      handleClose(done) {
        done()
        // this.$confirm('确认关闭？')
        //   .then(_ => {
        //     done();
        //   })
        //   .catch(_ => {
        //   });
      },
      openOrClose() {

        this.dialogVisible = true
      }
    }

  }

</script>

<style scoped>

</style>
