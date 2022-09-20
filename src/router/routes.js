import Home from "../pages/AppHome.vue";
import About from "../pages/AppAbout.vue";
import List from "../pages/AppList.vue";
import Edit from "../pages/AppEdit.vue";
import Crear from "../pages/AppCrear.vue";
import { createRouter, createWebHashHistory } from "vue-router"; 

export const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/list", component: List},
  {path: "/edit", component: Edit},
  {path: "/create", component: Crear},
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
