<template>
  <div class="login">
    <el-card class="login-card">
      <div slot="header" class="clearfix">
        <span>登陆</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="login">GO</el-button>
      </div>
      <el-form ref="loginForm" :model="formData" :rules="formRules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formData.password" type="password"></el-input>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      formData: {
        username: "",
        password: ""
      },
      formRules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    login() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$message({
            message: "login",
            duration: 1000
          });
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  .login-card {
    width: 540px;
    margin: 200px auto 0 auto;
    .clearfix {
      clear: both;
    }
  }
}
</style>
