<template>
  <div id="main">
    <el-container id="container">
      <el-header class="header">
        <h3 class="title">Pesend's WebSite —— Pesend的个人前端作品集</h3>
      </el-header>
      <el-container class="main">
        <el-aside class="nav">
          <el-menu router :default-active="activePath">
            <el-menu-item-group>
              <template #title>
                <i class="el-icon-collection"></i>
                <span>CSS-Demos</span>
              </template>
              <el-menu-item index="/layout/css-demos">全部CSS-Demos</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template #title>
                <i class="el-icon-collection"></i>
                <span>Projects</span>
              </template>
              <el-menu-item index="/layout/projects">全部Projects</el-menu-item>
            </el-menu-item-group>
          </el-menu>
        </el-aside>
        <el-main class="content">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activePath: '/layout/css-demos'
    }
  },
  watch: {
    $route: {
      handler () {
        this.activePath = this.$route.fullPath
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style lang='less' scoped>
#main {
  height: 100vh;
  #container {
    height: 100%;
  }
  .header {
    display: flex;
    align-items: center;
    background-color: #333;
    color: #fff;
    .title {
      text-align: center;
    }
  }
  .main {
    .nav {
      width: 200px !important;
      .el-menu {
        height: 100%;
        ::v-deep .el-menu-item-group__title {
          background-color: #f7f4f5;
        }
      }
    }
  }
}
</style>
