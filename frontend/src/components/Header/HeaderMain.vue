<template>
  <header class="header">
    <HeaderSearch class="header__search" />
  </header>
</template>

<script lang="ts" setup>
import HeaderSearch from "./HeaderSearch.vue";
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;

  &__search {
    width: 100%;
    max-width: 600px;
  }
}
</style>
