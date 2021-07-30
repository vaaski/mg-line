import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "home",
    component: () => import("./views/Home.vue"),
  },
  {
    path: "/dash",
    name: "dash",
    component: () => import("./views/Dash.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/dash",
  },
]

const router = createRouter({
  // @ts-expect-error idk
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
