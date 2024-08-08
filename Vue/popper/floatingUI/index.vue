<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import { computePosition, flip, shift, offset, arrow } from "@floating-ui/dom";

const props = defineProps({
  content: {
    type: String,
    default: "",
  },
  placement: {
    type: String,
    default: "top",
  },
  alwaysDisplay: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["click-event"]);

const referenceEl = ref();
const floatingEl = ref();
const arrowEl = ref();

function updatePosition() {
  computePosition(referenceEl.value, floatingEl.value, {
    placement: props.placement,
    strategy: "fixed",
    middleware: [
      offset(10),
      flip(),
      shift({ padding: 10 }),
      arrow({ element: arrowEl.value }),
    ],
  }).then(({ x, y, placement, middlewareData }) => {
    const { x: arrowX, y: arrowY } = middlewareData.arrow;

    const staticSide = {
      top: "bottom",
      right: "left",
      bottom: "top",
      left: "right",
    }[placement.split("-")[0]];

    Object.assign(floatingEl.value.style, {
      left: `${x}px`,
      top: `${y}px`,
    });

    Object.assign(arrowEl.value.style, {
      left: arrowX != null ? `${arrowX}px` : "",
      top: arrowY != null ? `${arrowY}px` : "",
      right: "",
      bottom: "",
      [staticSide]: "-4px",
    });

    floatingEl.value.style.maxWidth = `${window.innerWidth - x - 10}px`;
  });
}

function isVisibleTooltip() {
  if (props.alwaysDisplay) {
    return true;
  }
  const el = referenceEl.value;
  const elComputed = document.defaultView.getComputedStyle(el, null);
  const padding =
    parseInt(elComputed.paddingLeft.replace("px", "")) +
    parseInt(elComputed.paddingRight.replace("px", ""));
  const range = document.createRange();
  range.setStart(el, 0);
  range.setEnd(el, el.childNodes.length);
  const rangeWidth = Math.round(range.getBoundingClientRect().width);
  return (
    rangeWidth + padding > el.offsetWidth || el.scrollWidth > el.offsetWidth
  );
}

function showTooltip() {
  if (!isVisibleTooltip()) {
    return;
  }
  floatingEl.value.style.display = "block";
  document.body.append(floatingEl.value);

  updatePosition();
}

function hideTooltip() {
  if (!isVisibleTooltip()) {
    return;
  }
  floatingEl.value.style.display = "";
  floatingEl.value.remove();
}

function handleClick() {
  hideTooltip();
  emits("click-event");
}

const eventListener = [
  ["mouseenter", showTooltip],
  ["mouseleave", hideTooltip],
];

function addEventListeners() {
  eventListener.forEach(([event, listener]) => {
    referenceEl.value.addEventListener(event, listener);
  });
}

function removeEventListeners() {
  eventListener.forEach(([event, listener]) => {
    referenceEl.value.removeEventListener(event, listener);
  });
}

onMounted(() => {
  // addEventListeners();
});

onBeforeUnmount(() => {
  // removeEventListeners();
});
</script>
<template>
  <div
    v-bind="$attrs"
    id="content"
    ref="referenceEl"
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
    @click="handleClick"
  >
    <slot>{{ content }}</slot>
  </div>
  <div id="tooltip" role="tooltip" ref="floatingEl">
    <span v-html="content"></span>
    <div id="arrow" ref="arrowEl"></div>
  </div>
</template>

<style scoped lang="scss">
#content {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
#tooltip {
  background: #222;
  color: white;
  padding: 5px 11px;
  border-radius: 4px;
  width: max-content;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  word-wrap: break-word;
  box-sizing: border-box;
  z-index: 9999;
  font-size: 12px;
  line-height: 20px;
  min-width: 10px;
}
#arrow {
  position: absolute;
  background: #222;
  width: 8px;
  height: 8px;
  transform: rotate(45deg);
}
</style>
