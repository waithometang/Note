<script setup>
import { onMounted } from "vue";
import * as Cesium from "cesium";
console.log(Cesium);

onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYTZkZTU3MS0wYTI4LTQ0NDQtYmY4My05ZjA4Yjk2YmMwZGYiLCJpZCI6MjQ0MDY4LCJpYXQiOjE3MjcyNzMxOTd9.oXrtk8x_ASVxQQD8tIA2-xTGxJqUIbmhL7jNekq-_m4";

  const viewer = new Cesium.Viewer("cesiumContainer", {
    timeline: false, // 时间轴控件
    animation: false, // 动画控件
    geocoder: false, // 搜索按钮
    homeButton: false, // 主页按钮
    sceneModePicker: false, // 投影方式按钮
    baseLayerPicker: false, // 图层选择按钮
    navigationHelpButton: false, // 帮助按钮
    fullscreenButton: false, // 全屏按钮
  });
});
</script>

<template>
  <div id="cesiumContainer"></div>
</template>

<style scoped>
#cesiumContainer {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
:deep(.cesium-viewer-bottom) {
  display: none;
}
</style>
