<template>
  <el-container class="container">
    <el-header>header</el-header>
    <el-main>
      <div class="main height100">
        <el-scrollbar class="width100 height100">
          <router-view></router-view>
        </el-scrollbar>
      </div>
    </el-main>
  </el-container>
</template>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  .main {
    display: flex;
  }
}
</style>

