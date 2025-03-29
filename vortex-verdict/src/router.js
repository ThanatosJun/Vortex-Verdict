import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/TheHome.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: Home },
    { path: "/:notFound(.*)", component: NotFound },
    {
      path: '/games',
      name: 'GameList',
      component: () => import('@/pages/GameList.vue')
    },
    {
      path: '/game/:id',
      name: 'GameReview',
      component: () => import('@/pages/GameReview.vue')
    }
  ],
});

export default router;