<template>
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    :class="className"
  />
  <svg
    v-else
    class="svg-icon"
    :class="className"
    :style="styleWH"
    aria-hidden="true"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
function external(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}
export default {
  props: {
    // icon 图标
    icon: {
      type: String,
      required: true,
    },
    // 图标类名
    className: {
      type: String,
      default: "",
    },
    styleWH: {
      type: Object,
      default: () => ({
        width: "1em",
        height: "1em",
      }),
    },
  },
  computed: {
    // 判断是否为外部图标
    isExternal() {
      return external(this.icon);
    },
    // 外部图标样式
    styleExternalIcon() {
      return {
        mask: `url(${this.icon}) no-repeat 50% 50%`,
        "-webkit-mask": `url(${this.icon}) no-repeat 50% 50%`,
      };
    },
    // 项目内图标
    iconName() {
      return `#icon-${this.icon}`;
    },
  },
};
</script>

<style scoped lang="scss">
.svg-icon {
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  &:focus {
    outline: none;
  }
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
