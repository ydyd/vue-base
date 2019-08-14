/*
 * @Description: 全局字符串过滤器
 * @Author: zhaoxin
 * @Date: 2019-08-12 10:22:55
 * @LastEditTime: 2019-08-12 10:28:53
 * @LastEditors: Please set LastEditors
 */
import Vue from "vue";
Vue.filter("uppercaseFirst", function(string) {
  return string.replace(/^\w/, function(str) {
    return str.toUpperCase();
  });
});
