<script setup>
import { onMounted } from "vue";
import * as Cesium from "cesium";
console.log(Cesium);

onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYTZkZTU3MS0wYTI4LTQ0NDQtYmY4My05ZjA4Yjk2YmMwZGYiLCJpZCI6MjQ0MDY4LCJpYXQiOjE3MjcyNzMxOTd9.oXrtk8x_ASVxQQD8tIA2-xTGxJqUIbmhL7jNekq-_m4";

  const viewer = new Cesium.Viewer("cesiumContainer", {});

  // 经纬度转笛卡尔坐标
  const cartesian1 = Cesium.Cartesian3.fromDegrees(110, 20, 20); // 经度 纬度 高度
  const cartesian2 = Cesium.Cartesian3.fromDegrees(110, 20, 10); // 经度 纬度 高度
  // x y z 轴
  console.log(cartesian1, cartesian2);

  // 笛卡尔转经纬度
  // 1、笛卡尔转弧度坐标
  const cartographic = Cesium.Cartographic.fromCartesian(cartesian1);
  // 2、弧度转角度
  const longitude = Cesium.Math.toDegrees(cartographic.longitude);
  const latitude = Cesium.Math.toDegrees(cartographic.latitude);
  // 会存在误差转换
  // 角度=弧度×(180/π)
  // 原生实现
  const lon = (180 / Math.PI) * cartographic.longitude; // 经度
  const lat = (180 / Math.PI) * cartographic.latitude; // 纬度
  console.log(cartographic, longitude, latitude);
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
