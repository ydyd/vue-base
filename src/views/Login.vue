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
import {login} from 'A/main'
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
          let params = {
            username: this.formData.username,
            password: this.formData.password
          }
          login(params).then(res => {
            if(res && res.code == '0') {
              this.$store.commit('SET_TOKEN',res.returnData);
              this.$store.dispatch('GET_USER_INFO').then(res => {
                this.$router.push('/');
              })
            }
          })
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  .login-card {
    width: 400px;
    margin: 200px auto 0 auto;
    .clearfix {
      clear: both;
    }
  }
}
</style>
