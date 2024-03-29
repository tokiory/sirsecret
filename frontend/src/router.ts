import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import SSHPage from "@/pages/SshPage.vue";
import EnvPage from "@/pages/EnvPage.vue";
import SettingsPage from "@/pages/SettingsPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/ssh",
      component: SSHPage,
    },
    {
      path: "/env",
      component: EnvPage,
    },
    {
      path: "/settings",
      component: SettingsPage,
    },
  ],
});

export default router;
