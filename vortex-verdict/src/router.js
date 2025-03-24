import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/TheHome.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: Home },
    { path: "/:notFound(.*)", component: NotFound }
  ],
});

export default router;