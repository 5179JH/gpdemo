<template>
  <div class="navbar">
    <div class="navbar-inner">
      <div class="container">
        <router-link class="brand" tag="a" to="/">
          <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" />
        </router-link>
        <ul class="nav pull-right right">
          <li>
            <router-link tag="a" to="/home">首页</router-link>
          </li>
          <li>
            <router-link tag="a" to="/introduction">新手入门</router-link>
          </li>
          <li>
            <router-link tag="a" to="/api">API</router-link>
          </li>
          <li>
            <router-link tag="a" to="/about">关于</router-link>
          </li>
          <li>
            <router-link tag="a" to="/register">注册</router-link>
          </li>
          <li>
            <router-link tag="a" to="/login">登录</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "navbar",
  data() {
    return {
      home: "/"
    };
  },
  methods: {
    itemClick() {
      console.log(this.home);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  position: relative;
  top: 0;
  left: 0;
  z-index: 9;
  padding: 5px;
  width: 100%;
  background: #444;
  font-size: 13px;
}

.navbar-inner {
  height: 40px;
  border: none;
  box-shadow: none;
  width: 90%;
  margin: auto;
  padding: 5px;
}

.navbar .container {
  width: 100%;
  min-width: 960px;
  margin: 0 auto;
  max-width: 1400px;
}

.navbar .brand {
  position: absolute;
  top: 10px;
  width: 120px;
  color: #ccc;
  font-weight: 700;
}

.navbar .brand img {
  vertical-align: initial;
}

.navbar .nav.pull-right {
  margin-right: 0;
}
.navbar .nav > li {
  line-height: 34px;
  float: left;
}

.navbar .nav > li > a {
  color: #ccc;
  float: none;
  padding: 10px 15px;
}

.navbar .nav > li > a:hover {
  color: #fff;
}

/* .router-link-active {
  color:red !important;
} */
</style>
