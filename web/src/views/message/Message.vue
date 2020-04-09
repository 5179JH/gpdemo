<template>
  <div class="main">
    <h2>message</h2>
  </div>
</template>

<script>
export default {
  name: 'message',
  data() {
    return {
      msg: ''
    }
  },
  mounted() {
    this.axios.get("https://cnodejs.org/api/v1/messages", {
      params: {
        accesstoken: "c89313ed-ff55-43c1-9c46-fe5590156822"
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
}
</script>

<style>

</style>