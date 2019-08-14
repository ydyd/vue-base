/*
 * @Description: In User Settings Edit
 * @Author: zhaoxin
 * @Date: 2019-07-22 21:18:31
 * @LastEditTime: 2019-08-14 09:06:24
 * @LastEditors: Please set LastEditors
 */
import Vue from "vue";
import Router from "vue-router";
import config from "@/config";
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
        },
        {
          path: "/user",
          name: "user",
          component: () => import("V/user/Index.vue")
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
      store.dispatch('GET_USER_INFO').then(res => {
        gotoPage(to, from, next);
      });
    } else {
      next("/login");
    }
  }
});

const gotoPage = (to, from, next) => {
  // keep-alive缓存,从列表到详情，返回时需要缓存列表页面，其它页面进入列表页则不缓存
  let keepAlive = config.keepAlive;
  if(keepAlive && keepAlive.length) {
    for(let i=0; i<keepAlive.length; i++) {
      if(from.name == keepAlive[i][0]) {
        // 从缓存页面跳出
        if(to.name == keepAlive[i][1]) {
          store.commit("ADD_KEEP_ALIVE", keepAlive[i][0]);
        }
      }else if(to.name == keepAlive[i][0]) {
        // 进入缓存页面
        if(from.name != keepAlive[i][1]) {
          store.commit("DELETE_KEEP_ALIVE", keepAlive[i][0]);
        }
      }
    }
  }
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
