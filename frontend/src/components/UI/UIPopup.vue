<template>
  <div v-if="active" class="wrapper" @click.self="onWrapperClick">
    <div
      class="wrapper__popup popup"
      bind="$attrs"
      :class="{
        [`popup_${props.position}`]: props.position,
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface PopupProps {
  position?: "top" | "bottom" | "center";
  closeOnWrapper?: boolean;
}

const active = defineModel<boolean>("active");

const props = withDefaults(defineProps<PopupProps>(), {
  position: "center",
  closeOnWrapper: true,
});

const onWrapperClick = () => {
  active.value = false;
};
</script>

<style lang="scss" scoped>
.wrapper {
  z-index: $zi-popup-wrapper;
  position: fixed;
  inset: 0;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(var(--color-popover) / 0.3);
}

.popup {
  background-color: hsl(var(--color-popover));
  border: 1px solid hsl(var(--color-border));
  border-radius: 0.25rem;
  min-width: 300px;
  min-height: 120px;

  &_top {
    margin-bottom: auto;
  }

  &_bottom {
    margin-top: auto;
  }
}
</style>
