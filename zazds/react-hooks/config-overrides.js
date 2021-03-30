/*
 * @Author: shawn
 * @Date: 2019-01-16 08:48:18
 * @Last Modified by: shawn
 * @Last Modified time: 2019-11-06 15:27:13
 */

const {
  injectBabelPlugin,
  getLoader,
  getBabelLoader,
} = require("react-app-rewired");

const path = require("path");

function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

module.exports = {
  webpack: function (config, env) {
    // 别名
    config.resolve.alias = {
      "@": resolve("src"),
    };
    config.externals = {
      jquery: "jQuery",
      react: "React",
      "react-dom": "ReactDOM",
    };
    return config;
  },
};
