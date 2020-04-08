<template>
<div id="home" class="main">
    <div v-if="$route.path === '/home'">
    <div v-for="(item,index) in msg" class="cell" :key="index">
      <!-- <a class="user_avatar"><img :src="item.author.avatar_url" :alt="item.author.loginname" :title="item.author.loginname"></a> -->
      <span>{{item.author.loginname}}</span>
      <span class="last_create_time right">{{lastActiveTime(index)}}</span>
      <span class="topic_title_wrapper">
        <!-- <a :title="item.title" class="topic_title">{{item.title}}</a> -->
        <router-link tag="a" class="topic_title" :title="item.title" :to="{path: '/home/message', query: {id: item.id}}">{{item.title}}</router-link>
      </span>
    </div>
    <el-pagination
      @current-change="handleCurrentChange"
      layout="prev, pager, next"
      :total="page.total">
    </el-pagination>
  </div>

<router-view v-else/>
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
      page: {
        total: 100,
        pageSize: 40,
        currentPage: 1
      },

    }
  },
  methods: {
    lastActiveTime(index) {
      let time = this.msg[index].create_at.substr(0,10)
      return time
    },
    handleCurrentChange(val) {
      this.page.currentPage = val
      // console.log(this.page.currentPage)    
      this.roleSearch()
      setTimeout(() => {
        window.scrollTo(0,0)
      }, 1000);
    },
    roleSearch() {
      this.axios.get("https://cnodejs.org/api/v1/topics", {
        params: {
        page: this.page.currentPage,
        limit: this.page.pageSize
        }
      }).then(res => {
      let newData = new Date()
      this.msg = res.data.data;
      // this.msg.splice(0,0,{
      //   title: 111,
      //   create_at: newData.toString(),
      //   author: {
      //     loginname: 111
      //   }
      // })
      console.log(this.msg);
      });
    }
  },
  mounted() {
    this.roleSearch()
    console.log('111')
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
  line-height: 18px;
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