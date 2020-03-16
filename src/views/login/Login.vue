<template>
  <div id="login" class="main">
    <h2>登录</h2>
    <el-input v-model="id" placeholder="请输入内容" style="width: 100px"></el-input>
    <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
  </div>
</template>

<script>
export default {
  name: "login",
  components: {},
  data() {
    return {
      id: "",
      password: ""
    };
  }
};
</script>

<style>
</style>