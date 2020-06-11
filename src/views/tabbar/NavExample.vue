<template>
  <el-container class="home-container">
    <!-- 头部区域    -->
    <el-header>
      <div>
<!--        <img src="" alt="">-->
        <div class="el-icon-iconName el-icon-setting"></div>
        <span>商品信息管理系统</span>
      </div>
      <el-button type="info" @click="logout">
        退出
      </el-button>
    </el-header>
    <el-container>
      <!-- 侧边栏区域    -->
      <el-aside :width="isCollapse? '64px': '200px'" comment="这个是侧边栏">
      <!-- 折叠展开按钮！！！！！       -->
        <section class="toggle-button"  @click="changeCollapse">
          |||
        </section>
      <!-- 侧边栏菜单效果        -->
        <el-menu
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="isCollapse"
          :collapse-transition="false"
          router
        >
          <!-- 一级菜单         -->
          <el-submenu index="1">
          <!--            一级菜单模板  -->
            <template slot="title">
          <!--              图标  -->
              <i class="el-icon-menu"></i>
          <!--              内容    -->
              <span>商品</span>
            </template>
            <el-menu-item-group>
              <template slot="title">商品信息</template>
              <el-menu-item index="/shop">商品列表</el-menu-item>
<!--              <el-menu-item index="/category">商品分类</el-menu-item>-->
<!--              <el-menu-item index="/category">商品类型</el-menu-item>-->
<!--              <el-menu-item index="/brand">品牌管理</el-menu-item>-->
<!--              <el-menu-item index="/category">分类管理</el-menu-item>-->
            </el-menu-item-group>
<!--            <el-menu-item-group title="分组2">-->
<!--              <el-menu-item index="1-3">选项3</el-menu-item>-->
<!--            </el-menu-item-group>-->
<!--            <el-submenu index="1-4">-->
<!--              <template slot="title">选项4</template>-->
<!--              <el-menu-item index="1-4-1">选项1</el-menu-item>-->
<!--            </el-submenu>-->
          </el-submenu>

        </el-menu>

      </el-aside>
      <!-- 右边管理面板      -->
      <el-main>

        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "NavExample",
    data() {
      return {
        isCollapse:false
      }
    },
    mounted() {
    },
    methods: {
      logout() {
        window.localStorage.clear();
        let ret = Math.random()*100;
        this.$router.push('/?a=${ret}')
      },
      async getMenuItem() {
        let {data:res} = await this.$http.get('/menus')
        console.log(res)
      },
      changeCollapse() {
        this.isCollapse=!this.isCollapse
      }
    }
  }
</script>

<style  scoped lang="less">
  .el-header {
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #eeeeee;
    font-size: 20px;
  }

  .el-aside {
    background-color: #333744;


  }
  .toggle-button {
    text-align: center;
    font-size: 10px;
    line-height: 24px;
    color: white;
    letter-spacing: 0.3em;
    cursor: pointer;

  }

  .el-main {
    background-color: #EAEDF1;
  }
  .home-container {
    /*让该组件充满整一个 #app的框 */
    height: 100%;
    /*  */

  }





</style>
