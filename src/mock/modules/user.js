/*
 * @Description: In User Settings Edit
 * @Author: zhaoxin
 * @Date: 2019-08-13 22:30:01
 * @LastEditTime: 2019-08-13 23:06:06
 * @LastEditors: Please set LastEditors
 */
export default [
  {
    url: '/mock/queryUserDatas',
    response: {
      code: 0,
      returnData: {
        'total|80-100': 1,
        'data|10': [{
          'id|20': /\d/,
          'userName|5-8': /[a-z]/,
          'realName': '@cname',
          'tel': /173\d{8}/,
          'email': '@email',
          'address': '@county(true) @ctitle(3) 小区',
          'children|0-5': [{
            'id|20': /\d/,
            'userName|5-8': /[a-z]/,
            'realName': '@cname',
            'tel': /173\d{8}/,
            'email': '@email',
            'address': '@county(true) @ctitle(3) 小区'
          }]
        }]
      }
    }
  }
]