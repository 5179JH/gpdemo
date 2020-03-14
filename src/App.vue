<template>
  <div id="app">
    <navbar />
    <router-view />
    <!-- <h2>{{message}}</h2> -->
  </div>
</template>

<script>

import navbar from 'components/navbar'

export default {
  name: "App",
  data() {
    return {
      message: ""
    };
  },
  components: {
    navbar
  },
  mounted() {
    this.axios.get("api/user").then(res => {
      this.message = res.data[0].username;
      console.log(res);
    });
  }
};
</script>

<style>
@import "./assets/css/base.css";
</style>
