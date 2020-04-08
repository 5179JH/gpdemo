<template>
  <div id="app">
    <navbar />
    <crumbs />
    <!-- <keep-alive> -->
      <router-view />
    <!-- </keep-alive> -->
    <!-- <h2>{{message}}</h2> -->
    <backtop/>
    <foot/>
  </div>
</template>

<script>

import navbar from 'components/navbar'
import foot from 'components/foot'
import crumbs from 'components/crumbs'
import backtop from 'components/backtop'

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
    crumbs,
    backtop
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>
