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
      name: "container",
      redirect: '/home',
      component: () => import("C/container/Index.vue"),
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("V/home/Index.vue")
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path == "/login" || store.state.token) {
    gotoPage(to, from, next);
  } else {
    let token = getCache("token");
    if (token) {
      store.commit("SET_TOKEN", token);
      let paramsMap = getCache('paramsMap');
      store.commit('SET_PARAMS_MAP', paramsMap||{});
      gotoPage(to, from, next);
    } else {
      next("/login");
    }
  }
});

const gotoPage = (to, from, next) => {
  let params = to.params;
  if(params) {
    if(Object.keys(params).length) {
      store.commit('SET_PAGE_PARAMS', {
        path: to.path,
        params: params
      });
    }else if(store.state.paramsMap[to.path]) {
      params = store.state.paramsMap[to.path];
      for(let key in params) {
        to.params[key] = params[key];
      }
    }
  }
  next();
}

export default router;
