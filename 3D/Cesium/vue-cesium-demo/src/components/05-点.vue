<script setup>
import { onMounted } from "vue";
import * as Cesium from "cesium";
console.log(Cesium);

onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYTZkZTU3MS0wYTI4LTQ0NDQtYmY4My05ZjA4Yjk2YmMwZGYiLCJpZCI6MjQ0MDY4LCJpYXQiOjE3MjcyNzMxOTd9.oXrtk8x_ASVxQQD8tIA2-xTGxJqUIbmhL7jNekq-_m4";

  const viewer = new Cesium.Viewer("cesiumContainer", {});
  // 写法一
  const position = Cesium.Cartesian3.fromDegrees(110, 20);
  // // 实体
  // const point = new Cesium.Entity({
  //   position,
  //   point: {
  //     pixelSize: 20,
  //     color: Cesium.Color.BROWN,
  //   },
  // });
  // viewer.entities.add(point);
  // viewer.zoomTo(point);
  // console.log(viewer.entities);
  const point = viewer.entities.add({
    id: "point",
    position,
    point: {
      pixelSize: 20,
      color: Cesium.Color.BROWN,
    },
  });
  viewer.zoomTo(point);
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
