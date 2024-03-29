<template>
  <div
    class="text"
    :class="{ text_muted: muted, text_center: center, text_bold: bold }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface TextProps {
  center?: boolean;
  muted?: boolean;
  bold?: boolean;
}

defineProps<TextProps>();
</script>

<style lang="scss" scoped>
.text {
  color: hsl(var(--color-foreground));
  line-height: 1.6;

  &_muted {
    color: hsl(var(--color-muted-foreground));
  }

  &_bold {
    font-weight: 600;
  }

  &_center {
    text-align: center;
  }
}
</style>
