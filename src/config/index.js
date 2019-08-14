/*
 * @Description: 全局配置
 * @Author: zhaoxin
 * @Date: 2019-08-06 22:11:10
 * @LastEditTime: 2019-08-12 14:13:06
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'

const config = {
  isDevelopment: process.env.NODE_ENV == "development",
  mock: true,
  keepAlive: [['from','to']]
}
Vue.prototype.$config = config;
export default config;