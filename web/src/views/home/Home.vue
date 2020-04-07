<template>
<div id="home" class="main">
  <div v-for="(item,index) in msg" class="cell">
    <!-- <a class="user_avatar"><img :src="item.author.avatar_url" :alt="item.author.loginname" :title="item.author.loginname"></a> -->
    <span>{{item.author.loginname}}</span>
    <span class="last_create_time right">{{lastActiveTime(index)}}</span>
    <span class="topic_title_wrapper">
      <a :title="item.title" class="topic_title">{{item.title}}</a>
    </span>
  </div>
  <el-pagination
  :page-size="20"
  :pager-count="11"
  layout="prev, pager, next"
  :total="10">
</el-pagination>
</div>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      msg: '',
      curr: 1
    }
  },
  methods: {
    lastActiveTime(index) {
      let time = this.msg[index].create_at.substr(0,10)
      return time
    }
  },
  mounted() {
  this.axios.get("https://cnodejs.org/api/v1/topics", {
    params: {
      page: 10,
      limit: 10
    }
  }).then(res => {
    this.msg = res.data.data;
    console.log(res);
    });
  }
}
</script>

<style>
.cell {
  padding: 10px;
  font-size: 14px;
  border-top: 1px solid #f0f0f0;
}

.user_avatar {
  display: inline-block;
    width: 30px;
  height: 30px;
}

.user_avatar img {
  width: 30px;
  height: 30px;
  vertical-align: middle;
}

.cell .last_create_time {
  font-size: 11px;
  color: #778087;
  text-align: right;
  min-width: 50px;
  display: inline-block;
  white-space: nowrap;
}

.topic_title_wrapper .topic_title {
  margin-left: 20px;
  color: #888;
  font-size: 16px;
}
</style>