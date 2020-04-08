<template>
  <div>
    <div class="panel">
      <div class="header topic_header">
        <span class="topic_full_title">
          {{msg.title}}
        </span>
      </div>
      <div class="inner">
        <div class="topic_content" v-html="msg.content">
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="header">
        <span class="col_fade">{{msg.reply_count}} 回复</span>
      </div>
      <div class="cell" v-for="(item, index) in msg.replies" :key="index">
        <div class="author_content  clear-fix">
          <span class="left">{{item.author.loginname}}:</span>
          <div class="user_action right">
            <span  @click="btnOn(index)">
              <i class="el-icon-star-off up_btn" title="喜欢" v-if="focus"></i>
              <i class="el-icon-star-on up_btn" title="喜欢" v-else></i>
            </span>
            <span v-show="item.ups.length !== 0">{{item.ups.length}}</span>
          </div>
        </div>
        <div class="reply_content" v-html="item.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeMessage',
  data() {
    return {
      id: this.$route.query.id,
      msg: '',
      focus: false
    }
  },
  methods: {
    btnOn(index) {
      this.focus = !this.focus
      this.msg.replies[index].ups.push('1')
    }
  },
  mounted() {
    this.axios.get("https://cnodejs.org/api/v1/topic/" + this.id).then(res => {
      this.msg = res.data.data
      console.log(this.msg)
    })
  },
}
</script>

<style>
.panel {
  /* margin-bottom: 13px; */
  border-bottom: 23px solid #e1e1e1;
  margin: 0 -20px -10px;
}

.panel .header {
  padding: 10px;
}

.panel .header.topic_header {
  background-color: #fff;
}
.topic_full_title {
  font-size: 22px;
  font-weight: 700;
  margin: 8px 0;
  display: inline-block;
  vertical-align: bottom;
  width: 75%;
  line-height: 130%;
}

.panel .inner {
  padding: 10px;
  border-top: 1px solid #e5e5e5;
  border-radius: 0 0 3px 3px;
  line-height: 2em;
}

.topic_content {
  margin: 0 10px;
}
.topic_content p {
  font-size: 15px;
  line-height: 1.7em;
  overflow: auto;
}

.markdown-text ul {
  margin: 0 0 10px 25px;
  font-size: 14px;
}

.markdown-text li {
  font-size: 14px;
  line-height: 2em;
}

.markdown-text p {
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
  line-height: 2em;
  margin: 1em 0;
}
.markdown-text a {
  color: #08c;
}

.markdown-text img {
  cursor: pointer;
}

.markdown-text>:first-child {
  margin-top: 0;
}

.panel .header {
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
}

.header .col_fade {
  color: #444;
  font-size: 14px;
  line-height: 20px;
}

.user_action {
    float: right;
    margin-left: 20px;
    font-size: 15px;
}

.up_btn {
  font-size: inherit;
  cursor: pointer;
  opacity: .4;
  margin-right: 5px;
}

.up-count {
  color: gray;
}

.reply_content {
    padding-left: 50px;
    color: #333;
}
</style>