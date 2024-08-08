<template>
  <div class="btn-wrapper">
    <tool-tip
      :content="content"
      alwaysDisplay
      :placement="placement"
      ref="tooltip"
    >
      <el-button
        :plain="plain"
        :type="type"
        :size="size"
        :disabled="disabled"
        @click="onClick"
        v-bind="$attrs"
        v-auth="auth"
        :class="['svg-button', { wd_90: !size, disabled }]"
      >
        <svg-icon :icon="icon"></svg-icon>
      </el-button>
    </tool-tip>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    placement: {
      type: String,
      default: "top",
    },
    content: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "primary",
    },
    plain: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
    },
    icon: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    auth: {
      type: [Number, String],
    },
  },
  emits: ["click-event"],
  methods: {
    onClick() {
      this.$refs.tooltip?.hideTooltip();
      this.$emit("click-event");
    },
  },
};
</script>

<style lang="scss">
.btn-wrapper {
  display: inline-block;
  & + & {
    margin-left: 10px;
  }
  .svg-button {
    &.wd_90 {
      width: 90px;
    }
  }
}
</style>
