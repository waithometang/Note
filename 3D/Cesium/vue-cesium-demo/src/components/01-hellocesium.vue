<script setup>
import { onMounted } from "vue";
import * as Cesium from "cesium";
console.log(Cesium);

onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYTZkZTU3MS0wYTI4LTQ0NDQtYmY4My05ZjA4Yjk2YmMwZGYiLCJpZCI6MjQ0MDY4LCJpYXQiOjE3MjcyNzMxOTd9.oXrtk8x_ASVxQQD8tIA2-xTGxJqUIbmhL7jNekq-_m4";
  // ArcGIS影像图层
  const esri = new Cesium.ArcGisMapServerImageryProvider({
    url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
    enablePickFeatures: false,
  });

  const viewer = new Cesium.Viewer("cesiumContainer", {
    imageryProvider: esri, // 自定义影像图层
    terrainProvider: Cesium.createWorldTerrain({
      requestWaterMask: true, // 水面特效
    }), // 地形图层
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
</style>
