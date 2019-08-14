<!--
 * @Description: In User Settings Edit
 * @Author: zhaoxin
 * @Date: 2019-08-13 08:44:44
 * @LastEditTime: 2019-08-14 09:04:22
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="left-container">
    <div class="left-logo-container">
      <i class="iconfont icon-huabanfuben"></i>
      <span>运营管理中心</span>
    </div>
    <el-menu class="left-menu-container" @select="selectMenu" :default-active="menuIndex">
      <template v-for="(item, index) in menuList">
        <el-submenu v-if="item.children && item.children.length" :key="index" :index="item.path||('p'+index)">
          <template v-slot:title>
            <i :class="item.menuIcon"></i>
            <span>{{item.menuName}}</span>
          </template>
          <el-menu-item v-for="(child, cIndex) in item.children" :key="index+'-'+cIndex" :index="child.path||('c'+index+'-'+cIndex)">
            <span>{{child.menuName}}</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :key="index" :index="item.path||('p'+index)">
          <i :class="item.menuIcon"></i>
          <span>{{item.menuName}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'left-container',
  data() {
    return {
      menuIndex: '/user',
      menuList: [
        {
          menuName: '首页',
          menuIcon: 'iconfont icon-shouye',
          path: '/home'
        },
        {
          menuName: '用户信息',
          menuIcon: 'iconfont icon-yonghuguanli',
          children: [
            {
              menuName: '用户列表',
              path: '/user'
            }
          ]
        }
      ]
    }
  },
  created() {
    this.menuIndex = this.$route.path;
  },
  methods: {
    selectMenu(index, indexPath) {
      if(index.indexOf('/') === 0) {
        this.$router.push(index);
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.left-container {
  width: 100%;
  height: 100%;
  background-color: #304156;
  .left-logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    font-size: 16px;
    color: white;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
    .iconfont {
      padding-top: 5px;
      font-size: 20px;
      color: $color-primary;
      margin-right: 10px;
    }
  }
  .left-menu-container {
    height: calc(100% - 60px);
  }
}
</style>
<style lang="scss">
.left-container {
  .el-menu {
    border: none;
    background: none;
    .el-menu-item,.el-submenu__title {
      color: $color-txt-navigator;
      .iconfont {
        margin-right: 8px;
      }
    }
    .el-submenu .el-menu-item {
      background-color: #1f2d3d;
    }
    .el-menu-item:hover, .el-submenu__title:hover {
      background-color: rgba(0, 0, 0, 0);
      color: white;
      i {
        color: white;
      }
    }
    .el-menu-item:focus, .el-menu-item.is-active {
      background-color: rgba(0, 0, 0, 0);
      color: $color-primary;
      i {
        color: $color-primary;
      }
    }
    .el-submenu .el-menu-item:hover {
      background-color: #1f2d3d;
      color: white;
      i {
        color: white;
      }
    }
    .el-submenu .el-menu-item:focus, .el-submenu .el-menu-item.is-active {
      background-color: #1f2d3d;
      color: $color-primary;
      i {
        color: $color-primary;
      }
    }
  }
}
</style>