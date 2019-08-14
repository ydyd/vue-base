/*
 * @Description: In User Settings Edit
 * @Author: zhaoxin
 * @Date: 2019-07-22 22:55:50
 * @LastEditTime: 2019-08-13 20:29:45
 * @LastEditors: Please set LastEditors
 */
export default [
  {
    url: "/mock/login",
    response: {
      code: "0",
      "returnData|3": 'token'
    }
  },
  {
    url: "/mock/logout",
    response: {
      code: "0"
    }
  },
  {
    url: "/mock/getUserInfo",
    response: {
      code: "0",
      "returnData": {
        id: /\d{30}/,
        userName: 'admin',
        realName: '管理员',
        tel: '17312237975',
        email: '@email'
      }
    }
  }
];
