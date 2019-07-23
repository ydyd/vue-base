import Vue from "vue";
import Router from "vue-router";
import store from "@/store";
import { getCache } from "U/utils";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("V/Login.vue")
    },
    {
      path: "/",
      name: "home",
      component: () => import("V/Home.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path == "/login") {
    next();
  } else {
    if (store.state.token) {
      next();
    } else {
      let token = getCache("token");
      if (token) {
        store.commit("SET_TOKEN", token);
        next();
      } else {
        next("/login");
      }
    }
  }
});

export default router;
