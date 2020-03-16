<template>
  <div id="crumbs" class="main">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <span>{{crumbs}}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "crumbs",
  data() {
    return {
      crumbs: ""
    };
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      let path = this.$route.path;
      if (path === '/home') {
        this.crumbs = '首页'
      } else if (path === '/api') {
        this.crumbs = 'API'
      } else if (path === '/introduction') {
        this.crumbs = '新手入门'
      } else if (path === '/about') {
        this.crumbs = '关于'
      } else if (path === '/login') {
        this.crumbs = '登录'
      } else if (path === '/register') {
        this.crumbs = '注册'
      }
      console.log(path);
    }
  }
};
</script>

<style>
#crumbs {
  margin: 15px auto 0;
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
}
</style>