<template>
  <aside class="sidebar">
    <SidebarNavigation />
  </aside>
</template>

<script setup lang="ts">
import { SidebarNavigation } from "@/components/Sidebar";
</script>

<style lang="scss" scoped>
.sidebar {
  width: 270px;
  height: fit-content;
}
</style>
