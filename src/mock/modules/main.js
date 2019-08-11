export default [
  {
    url: "/mock/login",
    response: {
      code: "0",
      "returnData|3": 'token'
    }
  },
  {
    url: "/mock/getUserInfo",
    response: {
      code: "0",
      "returnData": {
        id: /\d{30}/,
        name: '@first @last',
        tel: /173\d{8}/,
        email: '@email'
      }
    }
  }
];
