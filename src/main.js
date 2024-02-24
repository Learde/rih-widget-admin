import "tippy.js/dist/tippy.css";
import "driver.js/dist/driver.css";
import "./assets/main.scss";
import bridge from "@vkontakte/vk-bridge";
import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

bridge.send("VKWebAppInit");

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
