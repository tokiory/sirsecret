import router from "@/router";
import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css";
import "@fontsource-variable/inter";
import "@/assets/styles/index.scss";

const app = createApp(App);
app.use(router);
app.mount("#app");
