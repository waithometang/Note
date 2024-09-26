<script setup>
import { onMounted } from "vue";
import * as Cesium from "cesium";
console.log(Cesium);

onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYTZkZTU3MS0wYTI4LTQ0NDQtYmY4My05ZjA4Yjk2YmMwZGYiLCJpZCI6MjQ0MDY4LCJpYXQiOjE3MjcyNzMxOTd9.oXrtk8x_ASVxQQD8tIA2-xTGxJqUIbmhL7jNekq-_m4";

  const viewer = new Cesium.Viewer("cesiumContainer", {});
  const position = Cesium.Cartesian3.fromDegrees(110, 20, 10);
  const position2 = Cesium.Cartesian3.fromDegrees(120, 20);
  // 广告牌
  const billboard = viewer.entities.add({
    position,
    billboard: {
      image: "/src/assets/position.png",
      scale: 0.3,
      color: Cesium.Color.AQUA,
    },
  });
  // label文字
  const label = viewer.entities.add({
    position: position2,
    label: {
      text: "广东",
      showBackground: true,
      fillColor: Cesium.Color.CADETBLUE,
      backgroundColor: new Cesium.Color(255, 0, 0),
    },
  });
  // viewer.zoomTo(billboard);
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
