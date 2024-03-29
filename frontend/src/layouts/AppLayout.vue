<template>
  <div class="layout">
    <SidebarMain />
    <div class="layout__content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SidebarMain } from "@/components/Sidebar";
</script>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  padding: 15px;
  gap: 24px;

  &__content {
    flex-grow: 1;
  }
}
</style>
