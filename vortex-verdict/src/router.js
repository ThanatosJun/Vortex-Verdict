import { createRouter, createWebHistory} from "vue-router";
// import { createRouter, createMemoryHistory } from "vue-router";
// import { createRouter, createWebHashHistory} from "vue-router";

import Home from "@/pages/TheHome.vue";
import NotFound from "@/pages/NotFound.vue";
import GameList from "@/pages/GameList.vue";
import GameReview from "@/pages/GameReview.vue";

const routes = [
  { path: "/Vortex-Verdict", name: "Home", component: Home },
  { path: "/Vortex-Verdict/:notFound(.*)", component: NotFound },
  { path: "/Vortex-Verdict/games", name: "GameList", component: GameList },
  { path: "/Vortex-Verdict/games/:id", name: "GameReview", component: GameReview },
  // { path: "/Vortex-Verdict/game/:id", name: "GameReview", component: () => import("@/pages/GameReview.vue") },
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

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next('/Vortex-Verdict'); // 導向主畫面
  } else {
    next();
  }
});

export default router;
