<template>
  <AppLayout>
    <div class="home">
      <WelcomeCard />
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import { WelcomeCard } from "@/components/WelcomeCard";
import AppLayout from "@/layouts/AppLayout.vue";
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
