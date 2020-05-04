<template>
  <div class="main">
    <p style="margin-top:1rem;font-size:14px; color:#333;">无</p>
  </div>
</template>

<script>
export default {
  name: "message",
  data() {
    return {
      msg: ""
    };
  },
  mounted() {
    this.axios
      .get("https://cnodejs.org/api/v1/messages", {
        params: {
          accesstoken: "c89313ed-ff55-43c1-9c46-fe5590156822"
        }
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
</style>