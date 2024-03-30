<template>
  <div class="layout">
    <HeaderMain />
    <div class="layout__page">
      <SidebarMain />
      <div class="layout__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SidebarMain } from "@/components/Sidebar";
import { HeaderMain } from "@/components/Header";
</script>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 15px;

  &__page {
    flex-grow: 1;
    display: flex;
    gap: 24px;
  }

  &__content {
    flex-grow: 1;
  }
}
</style>
