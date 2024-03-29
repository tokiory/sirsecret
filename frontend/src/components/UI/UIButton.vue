<template>
  <button class="button">
    <slot />
  </button>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.button {
  all: unset;
  padding: 10px 14px;
  border-radius: 8px;
  background-color: hsl(var(--color-primary));
  color: hsl(var(--color-primary-foreground));
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: hsl(var(--color-primary) / 0.9);
  }
}
</style>
