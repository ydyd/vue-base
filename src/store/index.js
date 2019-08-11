import Vue from "vue";
import Vuex from "vuex";
import { setCache, removeCache } from "U/utils";
import { Message } from "element-ui";
import router from "@/router";
import { getUserInfo } from 'A/main';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    userInfo: null,
    paramsMap: {}
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
      if (token) {
        setCache("token", token);
      } else {
        removeCache("token");
      }
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo;
      if (userInfo) {
        setCache("userInfo", userInfo);
      } else {
        removeCache("userInfo");
      }
    },
    SET_PAGE_PARAMS: (state, preload) => {
      state.paramsMap[preload.path] = preload.params;
      setCache("paramsMap", state.paramsMap);
    },
    SET_PARAMS_MAP: (state, paramsMap) => {
      state.paramsMap = paramsMap;
      setCache("paramsMap", paramsMap);
    }
  },
  actions: {
    GET_USER_INFO({ commit, state }) {
      return getUserInfo().then(res => {
        if(res && res.code == "0" && res.returnData) {
          commit("SET_USER_INFO", res.returnData);
          return res.returnData;
        }else {
          commit("SET_TOKEN", "");
          Message({
            message: "用户信息错误，请重新登陆~",
            type: "error"
          });
          router.push({
            path: "/login"
          });
          return null;
        }
      });
    }
  },
  modules: {

  }
});
