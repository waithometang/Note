<script setup>
import { onMounted } from "vue";
import * as Cesium from "cesium";
console.log(Cesium);

onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYTZkZTU3MS0wYTI4LTQ0NDQtYmY4My05ZjA4Yjk2YmMwZGYiLCJpZCI6MjQ0MDY4LCJpYXQiOjE3MjcyNzMxOTd9.oXrtk8x_ASVxQQD8tIA2-xTGxJqUIbmhL7jNekq-_m4";

  const viewer = new Cesium.Viewer("cesiumContainer", {});

  // 描述一个盒子。中心位置和方向由包含的 Entity 确定
  const position = Cesium.Cartesian3.fromDegrees(200, 100, 400);
  const box = viewer.entities.add({
    position,
    box: {
      // 长宽高
      dimensions: new Cesium.Cartesian3(2000, 1000, 4000),
      material: Cesium.Color.RED,
    },
  });
  viewer.zoomTo(box);
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
