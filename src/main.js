import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHashHistory } from "vue-router";
import Foo from "./views/Foo.vue";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Foo,
    },
  ],
});

app.use(router);

app.mount("#app");
