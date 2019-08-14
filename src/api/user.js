/*
 * @Description: In User Settings Edit
 * @Author: zhaoxin
 * @Date: 2019-07-23 20:42:45
 * @LastEditTime: 2019-08-13 23:42:39
 * @LastEditors: Please set LastEditors
 */
import http from "U/http";
import qs from "qs";
import config from "@/config";
let preApi = "";
if (config.mock) {
  preApi = "/mock";
} else if (config.isDevelopment) {
  // preApi = 'http://127.0.0.1:8080';
}

export function queryUserDatas(params) {
  return http({
    url: `${preApi}/queryUserDatas`,
    method: "post",
    data: qs.stringify(params)
  });
}
