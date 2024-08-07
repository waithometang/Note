<script setup>
import { ref } from "vue";
import { rafTimeout, cancelRaf } from "./_util";
const props = defineProps({
  content: {
    type: String,
    default: "",
  },
  alwaysDisplay: {
    type: Boolean,
    default: false,
  },
});
const visible = ref(false);
const hideTimer = ref();
const contentRef = ref();
const tooltipRef = ref();
const OFFSET = 4;

const viewportWidth = window.innerWidth;

function isVisibleTooltip() {
  if (props.alwaysDisplay) {
    return true;
  }
  const el = contentRef.value;
  const elComputed = document.defaultView.getComputedStyle(el, null);
  const padding =
    parseInt(elComputed.paddingLeft.replace("px", "")) +
    parseInt(elComputed.paddingRight.replace("px", ""));
  const range = document.createRange();
  range.setStart(el, 0);
  range.setEnd(el, el.childNodes.length);
  const rangeWidth = Math.round(range.getBoundingClientRect().width);
  if (
    rangeWidth + padding > el.offsetWidth ||
    el.scrollWidth > el.offsetWidth
  ) {
    return true;
  } else {
    return false;
  }
}

function getPosition() {
  const contentWidth = contentRef.value && contentRef.value.offsetWidth;
  const contentHeight = contentRef.value && contentRef.value.offsetHeight;
  const tooltipWidth = tooltipRef.value && tooltipRef.value.offsetWidth;
  const tooltipHeight = tooltipRef.value && tooltipRef.value.offsetHeight;

  const { top, left, right } = contentRef.value.getBoundingClientRect();

  let topOffset,
    leftOffset,
    maxWidth = 40;
  if (top < tooltipHeight) {
    topOffset = top + contentHeight + OFFSET;
  } else {
    topOffset = top - tooltipHeight - OFFSET;
  }
  // 针对提示框永远在内容中间显示 absolute
  // leftOffset = -((tooltipWidth - contentWidth) / 2);
  // fixed
  leftOffset = left - (tooltipWidth - contentWidth) / 2;
  if (leftOffset < 0) {
    leftOffset = 2 * OFFSET;
  } else if (leftOffset + tooltipWidth > viewportWidth) {
    leftOffset = viewportWidth - tooltipWidth - 2 * OFFSET;
  }
  tooltipRef.value.style.top = `${topOffset}px`;
  tooltipRef.value.style.left = `${leftOffset}px`;
  tooltipRef.value.style.maxWidth = `${viewportWidth}px`;
}

function onShow(e) {
  if (!isVisibleTooltip()) {
    return;
  }
  getPosition(e);
  cancelRaf(hideTimer.value);
  visible.value = true;
}
function onHide() {
  hideTimer.value = rafTimeout(() => {
    visible.value = false;
  }, 100);
}
</script>
<template>
  <div
    @mouseenter="onShow($event)"
    @mouseleave="onHide"
    class="tooltip-wrapper"
  >
    <div
      ref="tooltipRef"
      :class="['tooltip-content', { 'show-tip': visible }]"
      @mouseenter="onShow"
      @mouseleave="onHide"
    >
      <div class="tooltip">
        <slot name="tooltip">{{ content }}</slot>
      </div>
    </div>
    <div ref="contentRef" class="content" v-bind="$attrs">
      <slot>{{ content }}</slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
$pd: 12px;
.tooltip-wrapper {
  width: 100%;
  overflow: hidden;
  position: relative;
  .tooltip-content {
    position: fixed;
    z-index: 9999;
    width: max-content;
    transform-origin: 50% 75%;
    transition: opacity 0.25s;
    opacity: 0;
    pointer-events: none;
    &.show-tip {
      opacity: 1;
      pointer-events: auto;
    }
    .tooltip {
      padding: 6px 8px;
      border-radius: 6px;
      background-color: rgba(0, 0, 0, 0.9) !important;
      box-shadow: 0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%),
        0 9px 28px 8px rgb(0 0 0 / 5%);
      color: #fff !important;
      font-size: 14px;
      line-height: 1.5714;
      text-align: start;
      text-decoration: none;
      word-wrap: break-word;
    }
  }
  .content {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
