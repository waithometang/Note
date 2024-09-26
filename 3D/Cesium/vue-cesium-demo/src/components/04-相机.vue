<script setup>
import { onMounted } from "vue";
import * as Cesium from "cesium";
console.log(Cesium);

onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYTZkZTU3MS0wYTI4LTQ0NDQtYmY4My05ZjA4Yjk2YmMwZGYiLCJpZCI6MjQ0MDY4LCJpYXQiOjE3MjcyNzMxOTd9.oXrtk8x_ASVxQQD8tIA2-xTGxJqUIbmhL7jNekq-_m4";

  const viewer = new Cesium.Viewer("cesiumContainer", {});
  // 定义相机目的地（方向），直接跳转目的地
  // viewer.camera.setView({
  //   // 默认 (0,-90,0)
  //   destination: position, // 1. Set position with a top-down view 默认从顶部向下看
  //   orientation: {
  //     heading: Cesium.Math.toRadians(0), // east, default value is 0.0 (north) 左右视角
  //     pitch: Cesium.Math.toRadians(-90), // default value (looking down) 上下视角
  //     roll: Cesium.Math.toRadians(-90), // 歪头
  //   },
  // });

  // const position = Cesium.Cartesian3.fromDegrees(110, 20, 20000);
  // // 将相机从当前位置移动到新位置 带动画效果
  // viewer.camera.flyTo({
  //   destination: position,
  //   orientation: {
  //     heading: Cesium.Math.toRadians(0),
  //     pitch: Cesium.Math.toRadians(0),
  //     roll: 0,
  //   },
  //   duration: 3, // 单位秒
  // });

  // 使用目标和偏移量设置摄像机的位置和方向，锁定视角，不能改变位置
  const position1 = Cesium.Cartesian3.fromDegrees(110, 20);
  const heading = Cesium.Math.toRadians(0);
  const pitch = Cesium.Math.toRadians(-90);
  const range = 20000;
  viewer.camera.lookAt(position1, new Cesium.Cartesian3(heading, pitch, range));
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
</style>
