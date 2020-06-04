<template>
  <div class="wrapper">
<!--    <el-radio-group v-model="labelPosition" size="small">-->
<!--      <el-radio-button label="left">左对齐</el-radio-button>-->
<!--      <el-radio-button label="right">右对齐</el-radio-button>-->
<!--      <el-radio-button label="top">顶部对齐</el-radio-button>-->
<!--    </el-radio-group>-->
    <div style="margin: 20px;"></div>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="用户密码">
        <el-input v-model="formLabelAlign.region"></el-input>
      </el-form-item>
      <el-form-item label="验证码" style="width: 450px">
        <el-input v-model="formLabelAlign.type" />
        <img class="vcode" :src="url" alt="">
      </el-form-item>
<!--      <el-form-item label="验证码">-->
<!--       -->
<!--      </el-form-item>-->

      <el-button type="success">登录</el-button>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        labelPosition: 'left',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },

        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      };
    }
  }
</script>

<style scoped>
  .wrapper{
    margin: auto;
    width: 564px;
    text-align: center;
    justify-content: center;
  }
  .vcode{
    width: 96px;
    display: inline;
    float: right;
    position: absolute;
    right: -109px;
    height: 41px;

  }

</style>
