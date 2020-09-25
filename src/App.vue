<template>
  <div id="app">
    <div style="height: 1000px;"></div>
    <div id="viewer"></div>
    <el-tabs>
      <el-tab-pane lazy label="aaaaaa">
        <ViewerSync style="width: 300px; height: 500px" />
      </el-tab-pane>
      <el-tab-pane lazy label="bbbbbb">
        <ViewerSync style="width: 600px; height: 500px" />
      </el-tab-pane>
      <el-tab-pane lazy label="cccccc">
        <ViewerSync style="width: 100px; height: 900px" />
      </el-tab-pane>
      <el-tab-pane lazy label="dddddd">
        <ViewerSync style="width: 100%; height: 500px" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#viewer {
  position: absolute;
  background-color: red;
  display: none;
}
</style>
