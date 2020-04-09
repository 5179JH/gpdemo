<template>
  <div id="introduction" class="main">
    <div class="inner topic">
      <div class="topic_content">
        <div class="markdown-text">
          <h2>Node.js 入门</h2>
          <p>《<strong>快速搭建 Node.js 开发环境以及加速 npm</strong>》</p>
          <p><a href="http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html"
              target="_blank">http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</a></p>
          <p>《<strong>Node.js 包教不包会</strong>》</p>
          <p><a href="https://github.com/alsotang/node-lessons"
              target="_blank">https://github.com/alsotang/node-lessons</a></p>
          <p>《<strong>ECMAScript 6入门</strong>》</p>
          <p><a href="http://es6.ruanyifeng.com/" target="_blank">http://es6.ruanyifeng.com/</a></p>
          <p>《<strong>七天学会NodeJS</strong>》</p>
          <p><a href="https://github.com/nqdeng/7-days-nodejs"
              target="_blank">https://github.com/nqdeng/7-days-nodejs</a></p>
          <h2>Node.js 资源</h2>
          <p>《<strong>前端资源教程</strong>》</p>
          <p><a href="https://cnodejs.org/topic/56ef3edd532839c33a99d00e"
              target="_blank">https://cnodejs.org/topic/56ef3edd532839c33a99d00e</a></p>
          <p>《<strong>国内的 npm 镜像源</strong>》</p>
          <p><a href="http://cnpmjs.org/" target="_blank">http://cnpmjs.org/</a></p>
          <p>《<strong>node weekly</strong>》</p>
          <p><a href="http://nodeweekly.com/issues" target="_blank">http://nodeweekly.com/issues</a></p>
          <p>《<strong>node123-<em>node.js中文资料导航</em></strong>》</p>
          <p><a href="https://github.com/youyudehexie/node123"
              target="_blank">https://github.com/youyudehexie/node123</a></p>
          <p>《<strong>A curated list of delightful Node.js packages and resources</strong>》</p>
          <p><a href="https://github.com/sindresorhus/awesome-nodejs"
              target="_blank">https://github.com/sindresorhus/awesome-nodejs</a></p>
          <p>《<strong>Node.js Books</strong>》</p>
          <p><a href="https://github.com/pana/node-books" target="_blank">https://github.com/pana/node-books</a></p>
          <h2>Node.js 名人</h2>
          <p>《<strong>名人堂</strong>》</p>
          <p><a href="https://github.com/cnodejs/nodeclub/wiki/%E5%90%8D%E4%BA%BA%E5%A0%82"
              target="_blank">https://github.com/cnodejs/nodeclub/wiki/名人堂</a></p>
          <h2>Node.js 服务器</h2>
          <p>新手搭建 Node.js 服务器，推荐使用无需备案的 <a href="https://www.digitalocean.com/?refcode=eba02656eeb3"
              target="_blank">DigitalOcean(https://www.digitalocean.com/)</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'introduction',
    components: {}
  }
</script>

<style>

#introduction {
   padding-top: 30px;
}

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