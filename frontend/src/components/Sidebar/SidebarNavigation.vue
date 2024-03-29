<template>
  <ul class="navigation">
    <li
      v-for="{ title, route, icon } in navigation"
      :key="route"
      class="navigation__item item"
    >
      <RouterLink class="item__link" :to="route">
        <SidebarItem class="item__body">
          <Icon height="16px" :icon="icon" />
          {{ title }}
        </SidebarItem>
      </RouterLink>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { SidebarItem } from "@/components/Sidebar";
import { Icon } from "@iconify/vue";

const navigation = [
  {
    icon: "ph:house-bold",
    title: "Home Page",
    route: "/",
  },
  {
    icon: "ph:plugs-connected-bold",
    title: "SSH Keys",
    route: "/ssh",
  },
  {
    icon: "ph:file-code-bold",
    title: "Env Files",
    route: "/env",
  },
  {
    icon: "ph:gear-bold",
    title: "Settings",
    route: "/settings",
  },
];
</script>

<style lang="scss" scoped>
.navigation {
  all: unset;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.item {
  all: unset;

  &__link {
    color: inherit;
    text-decoration: none;
  }

  &__body {
    display: flex;
    gap: 8px;
  }
}
</style>
