import http from "U/http";
import qs from "qs";
import config from "@/config";
let preApi = "";
if (config.mock) {
  preApi = "/mock";
} else if (config.isDevelopment) {
  // preApi = 'http://127.0.0.1:8080';
}
export function login(params) {
  return http({
    url: `${preApi}/login`,
    method: "post",
    data: qs.stringify(params)
  });
}
export function getUserInfo() {
  return http({
    url: `${preApi}/getUserInfo`,
    method: "post"
  });
}
