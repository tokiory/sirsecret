<template>
  <UIInput ref="inputRef" v-model="query" class="search">
    <template #placeholder>
      <div class="search__placeholder">
        <Icon icon="ph:magnifying-glass-bold" />
        <UIText class="search__text">Search for anything</UIText>
      </div>
    </template>
  </UIInput>
</template>

<script setup lang="ts">
import { UIInput, UIText } from "@/components/UI";
import { Icon } from "@iconify/vue";
import { onMounted, ref, shallowRef } from "vue";

const inputRef = shallowRef<HTMLInputElement | null>(null);
const query = ref("");

onMounted(() => {
  document.addEventListener("keydown", (event) => {
    if (event.metaKey && event.shiftKey && event.code === "KeyF") {
      inputRef.value?.focus();
    }
  });
});
</script>

<style lang="scss" scoped>
.search {
  &__placeholder {
    display: flex;
    gap: 4px;
    justify-content: center;
    align-items: center;
  }

  &__text {
    color: inherit;
  }
}
</style>
