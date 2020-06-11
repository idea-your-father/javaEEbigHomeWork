<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avater_box">
        <img src="@/assets/logo.png" alt="">
      </div>
      <!-- 登录组件      -->
      <el-form label-width="0px" class="login_form"
               comment="这个是登录框，:model 用来双向绑定数据"
               :model="loginInfo"
               :rules="inputRules"
               ref="loginFormRef"
      >
        <el-form-item comment="用户名" prop="username">
          <!-- 如果没有提供的话，就去阿里图标库下载          -->
          <el-input prefix-icon="el-icon-user" v-model="loginInfo.username"></el-input>
        </el-form-item>
        <el-form-item comment="密码" prop="password">
          <el-input prefix-icon="el-icon-warning-outline" v-model="loginInfo.password" type="password"></el-input>
        </el-form-item>

        <el-form-item class="btn-line">
          <el-button type="success" @click="doPost">登录</el-button>
          <el-button type="info" @click="resetFields">重置</el-button>

        </el-form-item>


      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LoginPage",
    data() {
      return {
        //用户输入信息校验
        loginInfo: {
          username: '',
          password: ''
        },
        //  用户输入校验
        inputRules: {
          username: [
            {required: true, message: '请输入登录账号', trigger: 'blur'},
            {min: 1, max: 20, message: "长度在1到20个字符", trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入登录密码', trigger: 'blur'},
            {min: 1, max: 20, message: "长度在1到3个字符", trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      doPost() {
        this.$refs.loginFormRef.validate(async valid => {
          // console.log(123)
          console.log(valid);
          let result = false;
          if (!valid) return;
          try {
            let postData = {
              name: this.loginInfo.username,
              password: this.loginInfo.password
            }
            const {data: result} = await this.$http.post("/login", postData);
            console.log(result)
            if(result.code==200) {
              this.$message.success("登录成功")
              window.sessionStorage.setItem('token',result.data)
              await this.$router.push('/nav2')
            }else{
              this.$message.error("登录失败，请求重新登录")
            }
          } catch (e) {
            console.log('异常')
            // this.$message.error("网络有问题")
            this.$message.error("网络问题，请求失败")
            // let token = '123'
            // window.sessionStorage.setItem('token',token)
            // result = true;
          }

          //将 result.data 拿出来，并且打印
        })
      },
      resetFields() {
        this.$refs.loginFormRef.resetFields();
      }
    }
  }
</script>

<style scoped lang="less">
  .login_container {
    background-color: #111821;
    height: 100%;
    width: 100%;


    .login_box {
      width: 450px;
      height: 300px;
      background-color: white;
      border-radius: 3px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      .avater_box {
        height: 130px;
        width: 133px;
        border: 1px solid #eeeeee;
        border-radius: 50%; /*    父节点圆角          */
        box-shadow: 0 0 10px #ddd; /* 设置同心圆阴影 */
        left: 50%;
        right: 50%;
        position: absolute;
        transform: translate(-50%, -50%); /* 使用绝对定位，所有根据该盒子的高度移动*/
        background-color: #fff;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%; /*   图片圆角       */
          background-color: #eeeeee;
        }

      }

      .btn-line {
        display: flex;
        justify-content: flex-end;
      }

      .login_form {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 10px;
        box-sizing: border-box; /* form 不设置border-sizing 会撑开父元素 */
      }
    }

  }


</style>
