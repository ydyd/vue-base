const path = require("path");
module.exports = {
  devServer: {
    port: "8088"
  },
  css: {
    loaderOptions: {
      sass: {
        data: '@import "~@/css/define.scss";'
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        A: path.resolve("src/api"),
        C: path.resolve("src/components"),
        U: path.resolve("src/utils"),
        V: path.resolve("src/views")
      }
    }
  }
};
