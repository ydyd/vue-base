<!--
 * @Description: In User Settings Edit
 * @Author: zhaoxin
 * @Date: 2019-07-25 19:44:34
 * @LastEditTime: 2019-08-13 21:40:01
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="global-container">
    <div class="global-left">
      <el-scrollbar class="height100">
        <left-container></left-container>
      </el-scrollbar>
    </div>
    <div class="global-right">
      <div class="global-top">
        <top-container></top-container>
      </div>
      <div class="global-main">
        <el-scrollbar class="width100 height100">
          <keep-alive :include="keepAlivePages">
            <router-view></router-view>
          </keep-alive>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import LeftContainer from 'C/container/LeftContainer'
import TopContainer from 'C/container/TopContainer'
export default {
  name: 'global-container',
  components: {
    LeftContainer,
    TopContainer
  },
  computed: {
    ...mapState({
      keepAlivePages: state => state.keepAlivePages
    })
  }
}
</script>
<style lang="scss" scoped>
.global-container {
  display: flex;
  width: 100%;
  height: 100%;
  .global-left {
    width: 240px;
  }
  .global-right {
    flex: 1;
    overflow: hidden;
    background-color: white;
    .global-top {
      height: 60px;
      box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.1);
    }
    .global-main {
      height: calc(100% - 62px);
      margin-top: 2px;
    }
  }
}
</style>

