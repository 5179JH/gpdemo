<template>
  <div id="app">
    <navbar />
    <crumbs />
    <router-view />
    <h2>{{message}}</h2>
    <foot/>
  </div>
</template>

<script>

import navbar from 'components/navbar'
import foot from 'components/foot'
import crumbs from 'components/crumbs'

export default {
  name: "App",
  data() {
    return {
      message: ""
    };
  },
  components: {
    navbar,
    foot,
    crumbs
  },
  mounted() {
    // this.axios.get("api/user").then(res => {
    //   this.message = res.data[0].username;
    //   console.log(res);
    // });
  }
};
</script>

<style>
@import "./assets/css/base.css";
</style>
