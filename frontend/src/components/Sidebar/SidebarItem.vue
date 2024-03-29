<template>
  <div class="sidebar-item">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.sidebar-item {
  display: flex;
  align-items: center;
  padding: 8px 10px;
  cursor: pointer;
  user-select: none;
  border-radius: 0.25rem;
  &:hover {
    background-color: hsl(var(--color-muted));
  }
}
</style>
