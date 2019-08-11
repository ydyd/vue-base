/*
 * @Description: In User Settings Edit
 * @Author: zhaoxin
 * @Date: 2019-07-22 21:18:31
 * @LastEditTime: 2019-08-11 16:33:08
 * @LastEditors: Please set LastEditors
 */
import Vue from "vue";
import config from '@/config';
Vue.prototype.$config = config;
import App from "./App.vue";
import router from "./router";
import store from "./store";
if(config.isDevelopment) {
  require('./mock');
}
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
import 'C/global';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
