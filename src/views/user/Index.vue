<!--
 * @Description: In User Settings Edit
 * @Author: zhaoxin
 * @Date: 2019-08-13 21:01:56
 * @LastEditTime: 2019-08-14 09:08:49
 * @LastEditors: Please set LastEditors
 -->
<template>
  <page-container>
    <el-table :data="tableData" row-key="id" :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      <el-table-column header-align="center" prop="userName" width="160" label="用户名"></el-table-column>
      <el-table-column align="center" header-align="center" prop="realName" width="130" label="姓名"></el-table-column>
      <el-table-column align="center" header-align="center" prop="tel" width="130" label="手机号"></el-table-column>
      <el-table-column align="center" header-align="center" prop="email" width="200" label="邮箱"></el-table-column>
      <el-table-column align="center" header-align="center" prop="address" label="地址"></el-table-column>
    </el-table>
  </page-container>
</template>
<script>
import { queryUserDatas } from 'A/user';
export default {
  name: 'user',
  data() {
    return {
      queryParams: {
        userName: '',
      },
      tableData: []
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.getUserDatas();
    },
    getUserDatas() {
      let params = {};
      queryUserDatas(params).then(res => {
        if(res.code == '0' && res.returnData && res.returnData.data) {
          this.tableData = res.returnData.data;
        }
      });
    }
  }
}
</script>