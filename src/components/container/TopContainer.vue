<!--
 * @Description: In User Settings Edit
 * @Author: zhaoxin
 * @Date: 2019-08-13 08:45:10
 * @LastEditTime: 2019-08-16 17:03:47
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="top-container">
    <div class="top-main"></div>
    <div class="top-option clickabled" @click="logout">
      <i class="iconfont icon-logout"></i>
      <span>退出登录</span>
    </div>
    <div class="top-option">
      <avatar class="user-avatar" size="medium" icon="el-icon-user-solid"></avatar>
      <span>{{userInfo.realName||userInfo.userName}}</span>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { logout } from 'A/main';
// 组件中Array.prototype.includes没有babel成es5，ie报错，引入未编译版本
import Avatar from 'element-ui/packages/avatar/src/main';
export default {
  name: 'top-container',
  components: {
    Avatar
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  },
  methods: {
    logout() {
      logout().then(res => {
        if(res && res.code == '0') {
          this.$store.commit('SET_TOKEN');
          this.$router.push('/login');
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.top-container {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-right: 15px;
  .top-main {
    flex: 1;
  }
  .top-option {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 15px;
    .user-avatar {
      margin-right: 10px;
    }
  }
  .top-option.clickabled {
    cursor: pointer;
  }
}
</style>