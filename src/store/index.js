import Vue from "vue";
import Vuex from "vuex";
import { setCache, removeCache } from "U/utils";
import http from "U/http";
import { Message } from "element-ui";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isDevelopment: process.env.NODE_ENV == "development",
    mock: true,
    token: "",
    userInfo: null
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
    }
  },
  actions: {
    GET_USER_INFO({ commit, state }) {
      let url = "/getUserInfo";
      if (state.mock) {
        url = "/mock/getUserInfo";
      }
      return http({
        url: url,
        method: "post"
      }).then(res => {
        if (res && res.code == "0" && res.returnData) {
          commit("SET_USER_INFO", res.returnData);
          return res.returnData;
        } else {
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
  }
});
