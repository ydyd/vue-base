/*
 * @Description: 全局指令封装
 * @Author: zhaoxin
 * @Date: 2019-08-12 10:20:24
 * @LastEditTime: 2019-08-12 10:22:40
 * @LastEditors: Please set LastEditors
 */
import Vue from "vue";
// 注册一个全局自定义指令 `v-focus`
Vue.directive("focus", {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function(el) {
    // 聚焦元素
    el.focus();
  }
});
