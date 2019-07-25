import axios from "axios";
import router from "@/router";
import store from "@/store";
import { Message } from "element-ui";
const http = axios.create({
  timeout: 120000
});
http.interceptors.request.use(
  config => {
    config.token = store.state.token;
    return config;
  },
  error => {
    Promise.reject(error);
  }
);
http.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    if (error.response && error.response.status == 401) {
      // 防止提示信息弹出多次
      if (store.state.token) {
        store.commit("SET_TOKEN");
        Message({
          message: "登陆超时，请重新登陆~",
          type: "error"
        });
        setTimeout(() => {
          router.push({
            path: "/login"
          });
        }, 1000);
      }
      return error.response;
    }
  }
);
export default http;