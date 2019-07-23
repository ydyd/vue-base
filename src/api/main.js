import http from "U/http";
import qs from "qs";
import store from "@/store";
let preApi = "";
if (store.state.isDevelopment) {
  preApi = "mock";
}
export function login(params) {
  return http({
    url: `${preApi}/login`,
    method: "post",
    data: qs.stringify(params)
  });
}
