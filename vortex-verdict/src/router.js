import { createRouter, createWebHistory} from "vue-router";
// import { createRouter, createMemoryHistory } from "vue-router";
// import { createRouter, createWebHashHistory} from "vue-router";

import Home from "@/pages/TheHome.vue";
import NotFound from "@/pages/NotFound.vue";
// import GameList from "@/pages/GameList.vue";
// import GameReview from "@/pages/GameReview.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/:notFound(.*)", component: NotFound },
  { path: "/games", name: "GameList", component: () => import("@/pages/GameList.vue") },
  { path: "/game/:id", name: "GameReview", component: () => import("@/pages/GameReview.vue") },
]

const router = new createRouter({
  // mode: 'hash',
  history: createWebHistory(),
  // history: createWebHashHistory(),
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash };
    }
  },
  // history: createMemoryHistory(),
  routes,
});

export default router;
