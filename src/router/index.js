import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/search/:drinkName?",
    name: "Search",
    component: () =>
      import(/* webpackChunkName: "list" */ "../views/Search.vue")
  },
  {
    path: "/list",
    name: "List",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "list" */ "../views/List.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
