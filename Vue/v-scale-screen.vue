<script setup>
import { onMounted, nextTick, onUnmounted } from "vue";
import { debounce } from "lodash-es";
import screenfull from "screenfull";
const dw = 1920;
const dh = 1080;
let resizeObserver;
function handleWindowResize() {
  const dom = document.getElementById("screen");
  let clientHeight = 0;
  let clientWidth = 0;
  let scale = 1;
  if (!screenfull.isFullscreen) {
    const dom = document.querySelector(".board-container");
    const domRect = dom.getBoundingClientRect();
    clientHeight = domRect.height;
    clientWidth = domRect.width;
  } else {
    clientHeight = document.documentElement.clientHeight;
    clientWidth = document.documentElement.clientWidth;
  }
  scale =
    clientWidth / clientHeight < dw / dh ? clientWidth / dw : clientHeight / dh;
  dom.style.height = `${clientHeight / scale}px`;
  dom.style.width = `${clientWidth / scale}px`;
  dom.style.transform = `scale(${scale})`;
}
async function useKeepFit() {
  await nextTick();
  const dom = document.getElementById("screen");
  dom.style.transformOrigin = `0 0`;
  dom.style.overflow = "hidden";
  handleWindowResize();

  const resizeDebounced = debounce(handleWindowResize, 50);
  resizeObserver = new ResizeObserver(resizeDebounced);

  const mainDom = document.querySelector(".board-container");
  resizeObserver.observe(mainDom);
}
onMounted(() => {
  useKeepFit();
});
onUnmounted(() => {
  resizeObserver.disconnect();
});
</script>

<template>
  <div class="board-container screenfull">
    <div class="screen-wrapper" id="screen"></div>
  </div>
</template>

<style scoped lang="scss">
@mixin bgImg($img) {
  background: url("/assets/dataBoard/#{$img}") no-repeat;
  background-size: 100% 100%;
}

.board-container {
  @include bgImg("container.png");
  width: calc(100% + 40px);
  height: calc(100% + 40px);
  margin: -20px;
  color: #fff;
  .screen-wrapper {
  }
}
</style>
