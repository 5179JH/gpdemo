<template>
  <div id="backtop">
    <el-backtop :bottom="100" :right="0">
      <div>回到顶部</div>
    </el-backtop>
  </div>
</template>

<script>
export default {
  name: "backtop"
};
</script>

<style>
#backtop .el-backtop {
  width: 24px;
  height: 101px;
  line-height: 20px;
  font-size: 14px;
  color: gray;
  padding: 12px 0 12px 5px;
  cursor: pointer;
  text-align: center;
  background-color: #fff;
  border-radius: 12px 0 0 12px;
}
</style>