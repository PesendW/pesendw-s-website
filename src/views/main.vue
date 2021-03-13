<template>
  <div id="main">
    <el-container>
      <el-header>
        <el-menu router :default-active="activePath" mode="horizontal">
          <el-menu-item index="/css-demos">css-demos</el-menu-item>
          <el-menu-item index="/projects">projects</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activePath: '/css-demos'
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

</style>
